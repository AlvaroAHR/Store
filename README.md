# BoilerPlateSQL-ProtalentoB7

Template SQL sequelize
0 - crear un archivo index.js
1 - `npm init -y` => creamos el package.json y lo editamos con la info que queriamos
{
"name": "boilerplatesql-protalentob7",
"version": "1.0.0",
"description": "Template SQL sequelize",
"main": "index.js",
"scripts": {
"start": "node --watch index.js",
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC",

}

2- `npm install express --save` => se crea package-lock.json , la carpeta node_modules e instalamos express como dependencia

3- Creamos un archivo llamado .gitignore, el cual ignora node_modules y package-lock.json en los push

4- Agregar contenido al index (código levantar el servidor) y ejecutar el script `npm run start`


## Si cloné este repo:
`npm install` o `npm i`

{
 "newProduct":{
    "title": "Televisor LED",
    "price": 150,
    "description": "LG 55p",
    "stock": 4,
    "img": "product-1.jpg"
  },
  "category": "Electronics"
}

{
    "title": "Hogar"
}