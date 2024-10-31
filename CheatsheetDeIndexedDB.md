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
Para la inserción de datos nuevos en la base indexedDB basta con hacer lo siguiente:
```javascript
const transaccion = db.transaction("clientes","readwrite")
const clientesActuales = transaccion.objectStore("clientes")
const request = clientesActuales.add(datosCliente)
```
Hacemos una transación a la base de datos, indicandole que vas a realizar acciones de lectura y escritura.
Cuando hemos seleccionado la objectStore con la que vamos a seleccionar realizamos la adición con el método add
Como el resto de operaciones CRUD que veremos, el objeto request nos permitirá gestionar situaciones tanto como si sucede
un error como si todo funciona correctamente

```javascript
request.onerror= function () {
    // gestionar el error
}

request.onsuccess= function (){
    //gestionas el success
}
```

### Lectura

Para la lectura de datos de la base de datos basta hacer lo siguiente:
```javascript
const transaccion = db.transaction("clientes","readonly")
const clientesActuales = transaccion.objectStore("clientes")

const request = clientesActuales.getAll() //si quieres todo
const unCliente = clientesActuales.get(idCliente)// si quieres un elemento

request.onsuccess= (ev)=>{
    ev.target.result.forEach((datoCliente) =>
        console.log(datoCliente)
    )
}
```

### Actualización

La actualización es bastante similar a la Creación, solo varía el add por el put. Aquí un ejemplo:

```javascript
   const transaccion = db.transaction("clientes","readwrite")
    const clientesActuales = transaccion.objectStore("clientes")
    const request = clientesActuales.put(datosNuevos)

    request.onerror = function (){
        mostrarError(request.onerror.name,formulario)
    }

```

### Eliminación
Para la eliminación de elementos de la base de datos o de la objectStore debemos hacer lo siguiente:
```javascript
//Para borrar un elemento de una objectStore
 const transaccion = db.transaction("clientes","readwrite")
    const clienteActuales = transaccion.objectStore("clientes")
    const request = clienteActuales.delete(idCliente)
    request.onsuccess = function() {
        console.log("Cliente borrado")
        clientRow.remove();
    }

    request.onerror = function() {
        console.log("Algo fue mal")
    }
```
Para eliminar una objectStore se puede realizar lo siguiente:
```javascript
const request = indexedDB.open("miBaseDeDatos", nuevaVersion); // nuevaVersion debe ser mayor que la versión actual

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    
    // Verifica si el objectStore existe antes de intentar eliminarlo
    if (db.objectStoreNames.contains("nombreDelObjectStore")) {
        db.deleteObjectStore("nombreDelObjectStore"); // Eliminar el objectStore
        console.log("El objectStore fue eliminado exitosamente.");
    } else {
        console.log("El objectStore no existe.");
    }
};
```

Para eliminar la base de datos directamente basta con esto:

```javascript
const request = indexedDB.deleteDatabase("miBaseDeDatos");
```
## Bibliografía
https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API