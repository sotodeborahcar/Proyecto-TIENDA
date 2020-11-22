Querida Debo, 

Qué hermosa quedó tu tienda. Me encanta la elección de colores y los pequeños detalles de maquetado que diferencian tu tienda del modelo pero respetando la consgna. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

Impecable el trabajo en accesibilidad. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. Usas bien los atributos alt y especialmente las etiquetas aria. Increible trabajo aqui, se nota que le pusiste ganas y esfuerzo. 

### Filtros y búsqueda

Tus filtros funcionan a la perfeccion. No solo eso, sino que la utilizacion de estilos y funcionalidad en responsive es perfecta.

Lo unico que comentaria (que es un detalle) es que las tarjetas no se filtran cuando estan puestas como columna. Fue un descuido o algo que no pudiste solucionar? Si es el segundo caso escribime!

### Carrito

Tu carrito funciona muy bien, esta muy bien maquetado y cumple todos los requerimientos solicitados. No tengo mucho que agregar: hay poco que decir ante un buen trabajo. Un detalle nada mas, la imagen de la camara Nikon no se ve y es porque la ruta esta mal escrita en data-image (tiene dos puntos cuando deberia ser uno)

### Checkout

Impecable el funcionamiento. 

Ocasionalmente ocurre que las sumas de los totales dan decimales algo extraños. No es culpa de tus calculos, sino de como se comportan los numeros flotantes, tanto en JS como en cualquier otro lenguaje. Por ejemplo si sumamos 0.1 + 0.2 notaras que el total no es 0.3 sino 0.30000000000000004. En tu carrito, si selecciono la playstation 4 y le agrego tarjeta de credito y descuento, veo como total $62998.899999999994. Algo muy, muy molesto cuando trabajamos con numeros en web. Podes solucionarlo con un toFixed(2) en todos los numeros para que se vean solo 2 decimales. 

### Misc 

Tu HTML esta muy bien. Excelente la indentacion, claro, completo, con las etiquetas semanticas adecuadas. Tu CSS tambien esta muy prolijo y bien hecho, reutilizas bien los estilos y los nombres de clases son claros y descriptivos.  El responsive esta hecho a la perfeccion. Noto quiza cierta dependencia de algunas soluciones del codigo de la web modelo para cosas que podrias haber solucionado de manera mas sencilla con lo que sabes; pero entiendo que el maquetado no era la prioridad aqui. 

Tu JS da el mismo efecto, claro y prolijo, se agradecen los comentarios que aclaran lo que haces y las distintas secciones de tu trabajo. Tenes muchos y muy buenos commits, y ni hablar de la calidad de tu README. Este es un trabajo del que estar muy orgullosa. 

Un detalle de tu JS es que haces cosas como esta: `${`$`}${costoEnvio}`, que no son necesarias. Dentro de las comillas `` podemos escribir cualquier string, y si usamos ${} podemos poner ahi dentro cualquier variable. Es decir:

```js
const nombre = "Deborah"
const stringConVariable = `El nombre de la alumna es ${nombre}`
```

Asi que en tu codigo podriamos escribir `$${costoEnvio}`. 

### Nota 

En resumen, hiciste un enorme trabajo, casi ningun problema en el producto entregado y con una enorme atencion al detalle y la calidad. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
✅ Respeta el funcionamiento.
✅ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✅  Funciones pequeñas.
✅ Commits con mensajes adecuados.
✅ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 10




