# Fundamentos de React: Ejercicios básicos

Este repositorio contiene una serie de ejercicios diseñados para demostrar y poner en práctica conceptos básicos de **React**. A lo largo de los ejercicios, se aborda la creación y manipulación de componentes, la gestión del estado, la comunicación entre componentes, el renderizado condicional y la interacción con el DOM.

## Ejercicio 1 — Estructura base

En este ejercicio, se crea una aplicación simple con tres componentes fundamentales:

- **Encabezado**: Muestra el título de la aplicación.
- **Área principal**: Presenta un mensaje de bienvenida.
- **Pie de página**: Muestra el año actual.

Cada sección se define como un componente separado, lo que ayuda a organizar el código y mantener la modularidad.

---

## Ejercicio 2 — Comunicación entre componentes

Este ejercicio introduce la comunicación entre componentes, donde un **componente hijo** recibe un mensaje del **componente padre**. Además, el mensaje puede ser modificado desde el componente padre y la vista se actualiza automáticamente al cambiar.

---

## Ejercicio 3 — Renderizado condicional

Se implementa un componente que muestra un texto diferente según una condición booleana. La condición puede ser modificada mediante un botón, y tanto el texto como el botón se actualizan dinámicamente.

---

## Ejercicio 4 — Listas dinámicas

En este ejercicio, se crea un componente que maneja una lista de elementos:

- Los elementos se muestran en la interfaz.
- Se permite agregar y eliminar elementos de la lista.
- Si no hay elementos en la lista, se muestra un mensaje alternativo.

---

## Ejercicio 5 — Estado y eventos

Se construye un componente que maneja un número y permite aumentarlo o disminuirlo mediante botones. Se definen valores mínimo y máximo para el número, y se muestra un aviso visual o textual cuando se alcanza cualquiera de los límites.

---

## Ejercicio 6 — Hook de efecto

Este ejercicio introduce el **hook `useEffect`** para actualizar la hora actual en la pantalla cada segundo. La hora deja de actualizarse cuando el componente se desmonta.

---

## Ejercicio 7 — Referencias

Se crea un formulario con un campo de texto que recibe automáticamente el foco al cargar la vista. Además, se muestra el valor del campo en la consola cada vez que el usuario presiona **Enter**.

---

## Ejercicio 8 — Composición

En este ejercicio, se diseña un componente principal que combina al menos tres de los ejercicios anteriores en una misma vista. La estructura debe mantenerse ordenada y la comunicación entre componentes debe funcionar correctamente.

---

## Ejercicio 9 — Interacción entre componentes

Se crea un **componente Padre** que administra una lista y un **componente Hijo** que permite agregar elementos a esa lista. El estado global es manejado por el componente padre, y la lista se actualiza sin necesidad de recargar la página.

---

## Ejercicio 10 — Evaluación integradora

En este ejercicio final, se construye una aplicación simple para gestionar una colección de datos (por ejemplo, tareas, usuarios o productos). La aplicación permite:

- Agregar y eliminar elementos.
- Mostrar la cantidad total de elementos.
- Mostrar un mensaje si la colección está vacía.

La aplicación se compone de varios componentes bien estructurados, aplicando todos los conceptos aprendidos hasta ahora.

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/matiasozores/fundamentos-react.git
   ```
