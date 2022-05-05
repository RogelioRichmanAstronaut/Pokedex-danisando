Teconologías utilizadas:
Figma
Vue 3 in Vite
store vue
vue-router



Construcción Pokedex:

1 Rediseño en Figma:
https://www.figma.com/file/UEyWEsK4DO7kP24jVEj9tb/pokedex-design

2 Obtención de datos en el store de vue
2.1 lista con el nombre de cada pokemon a obtener. En store(), array: "lPokemones"
2.2 colores de clases previamente establecidos. En store(), array: "coloresTipo"
2.3 para cada nombre de pokemon en el array, creación de objeto y petición de obtención de la información necesaria.
2.3.1 (para la lógica detrás, los métodos necesarios se encuentran en store.js)

3 Pantalla principal HomeView: para la pantalla principal, se muestra la información básica de cada pokemon.

4 Pantalla secundaria AboutVie: para la pantalla secundaria, se espera a un loader que da la bienvenida a la información avanzada de cada pokemon.

5 Botón compartir: en la información detallada de cada pokemón hay un botón de compartir disponible, que copia al portapapeles separado por comas "," el nombre del pokemon seguido por sus atributos