
![Logo](https://femcoders.factoriaf5.org/wp-content/uploads/2021/12/factoria-web.png)


# Escape Rooms

Es una aplicación de Escape Rooms especialmente diseñada para la integracion de los usuarios y la empresa factoria. Contiene una seccion de pruebas logicas y otra de editor de codigo tipo kata. podemos registranos como usuarios administrativo y con ello tener las opciones de crear, editar, eliminar. 


## Roadmap

- https://www.figma.com/file/ZFWVjAgM02zu3pWCKDvNbN/UserFlowScapeRoom?node-id=1%3A2



## Documentation

[Documentation](https://escaperoom.atlassian.net/jira/software/projects/ER/boards/1)

https://drive.google.com/file/d/1c8TI5sJGP3O-mZiFxq9QQvtN1U1IW7G4/view?usp=sharing


## Used By

This project is used by the following companies:

- Factoria F5



## Installation

Install my-project with npm


```bash Back
  npm install laravel
  npm install composer

```

```bash Front
  npm install vue
    npm install axios
    npm install vuetify
    npm install quasar

```

```bash
  npm install 
  cd my-project
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash Back
  npm install laravel
  npm install composer
  composer update
  npm install
  Crear el archivo .env
  Copiar todo lo del archivo .env.example
  Pegamos en el .env
  Colocar el nombre de la BBDD en la linea 14 DB_DATABASE=escaperoomdigital
  Ir a MySql y crear una BBDD con el nombre escaperoomdigital
  Importar nuestra bbdd escaperoomdigital.sql que está en la carpeta public 
  Ejecuta en la terminal el comando php artisan key:generate para generar la llave del proyecto
  Php artisan migrate:fresh --seed
  
```

```bash Front
  npm install vue
    npm install axios
    npm install vuetify
    npm install quasar

```

```bash
  npm install
```

Start the server

```bash front
  npm run start
  npm run dev
 ```
   
```bash back
npm run dev
php artisan serve
```


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Running Tests

To run tests, run the following command

```bash
  npm run test 
```


## Tech Stack

**Client:** Vue3, nextjs, quasar js, vuetify.

**Server:** Laravel, composer

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#ff4702](https://via.placeholder.com/10/ff4702?text=+) #ff4702 |
| Example Color | ![#000](https://via.placeholder.com/10/000?text=+) #000|
| Example Color | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff |


## Demo

https://www.figma.com/file/FojGlYBBtVpu4J0p7aT0Mu/Project?node-id=0%3A1



## Authors
- [@JDDeveloper1](https://github.com/orgs/Escape-Room-Digital/people/JDDeveloper1)
- [@prlongoria](https://github.com/orgs/Escape-Room-Digital/people/prlongoria)
- [@BigBen999](https://github.com/orgs/Escape-Room-Digital/people/BigBen999)
- [@lucyalvarado4692](https://github.com/orgs/Escape-Room-Digital/people/lucyalvarado4692)



## License

[MIT](https://choosealicense.com/licenses/mit/)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

