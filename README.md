# Plaza Primaveras

## Proyecto 
   El proyecto es para acreditacion de curso Full Stack Javascript impartido por [BEDU](https://bedu.org/)

### Colaboradores del proyecto:
   * [Ilse Alejandra Polanco Isais](https://github.com/IlsePolanco)
   * [Jannay Salvador Tapia Guerrero](https://github.com/Blaheud)
   * [Edgar Fabian Osorio Alcala](https://github.com/FabianOAlca)
   

### Pre-requisitos 
   * Necesitas tener [NodeJS](https://nodejs.org/en/download/) instalado en tu computadora version 12.18.2
   * Backend desarrollado en famework de [Express](https://expressjs.com/es/)
   * Frontend desarrollado en famework [React Js](https://es.reactjs.org/)
   * Gestor de base de datos, recomendado [PostgresSQL](https://www.postgresql.org/)
   

## Instalacion
   

* 1.- Clonalo 
    ```
    git clone https://github.com/FabianOAlca/PlazaPrimaveras.git
    ```
    * Para trabajar en el backend
    ```
    cd PlazaPrimaveras 

    ```
    * Para trabajar en el Frontend con React Js
       ```
         cd PlazaPrimaveras/Frontend
         npm install
         npm run start
       ```
* 2.- Crea archivo .env para poder atuentificar el usuario requiere una variable de entorno secreta
    Ejemplo:
    ```
    JWT_SECRET = Palbra_secreta
    ```
* 3.-Base de Datos, corre en consola
    Ejemplo: 
   ```
    ~psql postgres
    postgres=# CREATE USER admin WITH PASSWORD 'admin';
    postgres=# CREATE DATABASE primavera;
    postgres=# \q
    
    ~psql primavera
    primavera=# CREATE TABLE locales;
    primavera=# INSERT INTO locales (numLocal,name,description,contact,email,image,rent,pay_day,p_water,open,monday,tuesday,wednesday,thursday,friday,saturday,sunday) VALUES ('3''Planchalav','Lavanderia y tintoreria','3121567342','planchalav@gmail.com','../public/images/demo.jpg',50000,'1/mes',False,True,'8:00-21:00','8:00-21:00','8:00-21:00','8:00-21:00','8:00-21:00','8:00-21:00','8:00-21:00');
    ```
    Se puede omitir el ultimo paso despues de crear la tabla en la base de datos y se puede apoyar con sofware externo para agregar informacion en la tabla 
    
* 4.- Corre en la carpeta raiz del proyecto para instalar dependencias
    ```
    npm install
    ```
* 5.- Corre migraciones y seeders para inicializar datos por defecto 
     ```
    ./node_modules/.bin/sequelize db:migrate
    ./node_modules/.bin/sequelize db:seed:all
    ```

* 6.- Correr en el puerto localhost//4000
    ```
    npm run dev
    ```

* 7.- Se requieren software para simular peticiones tales como [Postman](https://www.postman.com/) e [Insombian](https://insomnia.rest/download/), solo para trabajar con el backend como api



