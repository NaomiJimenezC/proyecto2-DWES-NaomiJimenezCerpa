# CheatsSheet de IndexedDB

## ¿Qué es IndexedDB?
Es una base de datos NoSQL que está integrada en todos los navegadores modernos que usamos. Es una base de datos que basada
en objetos y organizadas por clave-valor. Esto lo hace una alternativa más llamativa si queremos que en nuestra aplicación web
se quieran guardar muchos datos, porque no solo podemos guardar diferentes tipos de datos (no estamos limitados a Strings)
si no que además podemos recuperar fácilmente la információn haciendo una query.

## Creación de la IndexedDB 

Para crear (o abrir) nuestra base de datos en nuestro código bastará hacer lo siguiente:
```
const db = indexedDB.open("clientes",3)
```
El método open tiene 2 parámetros, el nombre de la base de datos y el número de la versión.
Si no existe la base de datos en el lado cliente la creará, de lo contrario simplemente nos permitirá hacer operaciones 
la base de datos existente

En cuanto el número de la versión, cuando vas a inicializar la base de datos puedes indicarle en que versión de la misma
vas a estar trabajando. Si vas a cambiar la estructura de tu base de datos se recomienda que al momento de abrir la base de datos
subas el número de versión para tener un mejor control de los cambios que se hacen en esta.


## Operaciones básicas

### Creación

### Lectura

### Actualización

### Eliminación

## Operaciones complejas

## Bibliografía
https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API