// const Lib = require("pg-hstore");

// const e = require("express");


let productList = [];
// let categories = [];
let carShop = [];
let total = 0;


function add (event, id, price){
    console.log(id)
    const product = productList.find(p => p.id === id);
    console.log(productList);
    product.stock--;
    console.log(id, price);
    carShop.push(id);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
    displayProducts ();

}




async function pay() {
    try{
        const productList = await ( await fetch(" ",{
            method: "post",
            body: JSON.stringify(carShop),
            headers: {
                "content-type": "application/json"
            }
        })).json();
    }
    catch{
        window.alert("Sin stock");  
    } 
    carShop = [];
    total = 0;
    await fetchProducts();
    // document.getElementById("checkout").innerHTML = `Pagar $${total}`

    // window.alert(carShop.join (", \n"));
}


// //------
const getCategories = async () => {
    try {
        const res = await (await fetch("/category")).json();
        console.log(res, );
        return res;
        
    } catch (error) {
        
    }
    
}
// getCategories();

async function displayCategories (){
    const categories = await getCategories();
    console.log(categories);
    let categoryHTML = '';
    for (const category of categories) {
        // Creamos el botón
        const boton = document.createElement("button");
        boton.textContent = category.title;
      
        
        // Agregamos el evento click al botón
        boton.addEventListener("click", function(event) {
            console.log(event.target.textContent);
            filterProducts(event.target.textContent);
          // Hacemos algo cuando se hace clic en el botón
        });
              
        // Agregamos el botón al DOM
        // categoryHTML += boton
      document.getElementById('category').appendChild (boton);
        


        // document.body.appendChild(boton);
      }
    //   document.getElementById('category').innerHTML = categoryHTML;
      

    // categories.forEach (cat=>{
    //     let category = cat.title
    //     console.log(cat.title);
    //     categoryHTML += 
    //     `<button class="category-btn">${cat.title}</button>`;
    // });
    // document.getElementById('category').innerHTML = categoryHTML;

}
displayCategories();





function displayProducts(){
    let productsHTML = '';
    productList.forEach( p => {
        let buttonHTML = `<button class="button-add" onclick="add(event, '${p.id}', ${p.price})">Agregar</button>`;

        if (p.stock <=0) {
            buttonHTML = `<button disabled class="button-add disabled" onclick="add(${p.id},${p.price})">Sin stock</button>`;
        }

        productsHTML +=
        `<div class= "product-container">
            <h3> ${p.title}</h3>
            <img src="${p.img}"/>
            <h3> $${p.price}</h3>
            <p> ${p.description}</p>
            ${buttonHTML}
        </div>`
                
    });
    document.getElementById('page-content').innerHTML = productsHTML;

}

async function fetchProducts(){
    productList = await ( await fetch("/product")).json();
    console.log(productList);
    displayProducts ();

}

async function filterProducts(category){
    console.log(category);
    productList = await ( await fetch(`/product/${category}`)).json();
    console.log(productList);
    displayProducts ();

}

window.onload = async() =>{
     await fetchProducts();
     
     
}

const openModal = document.querySelector("#create-product")
const closeModal = document.querySelector("#close-modal")
const modal = document.querySelector ("#new-products")

openModal.addEventListener("click",()=>{
    modal.showModal();
})
closeModal.addEventListener("click",()=>{
    modal.close();
})

document.querySelector("#form")
addEventListener("submit", e =>{
    e.preventDefault(); 
    console.log(hola);
    const data = Object.fromEntries(
        new FormData(e.target))
        alert(JSON.stringify(data))
})

const form = document.getElementById("form")
const name = document.querySelector("form")

// const dataFormProduct = (event) => {
//     event.preventDefault ();
// // }
// const data = new FormData(EventTarget);
// const dataComplet = Object.fromEntries(data.entries());
// console.log(dataComplet);

