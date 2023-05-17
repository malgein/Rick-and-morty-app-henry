Rick and Morty 1 (nextjs)
JS
1. en index. js le damos un elemento padre de div a n uestra funcion madre de Home y le damos una clase de styles.App  dentro metemos un header de clase styles.AppHeader despues dentro agregamos un h1 de clase styles.title y dentro del h1 escribimos Rick & Morty, luego aun dentro del header colocamos tag de Imagge de src={rickAndMorty} y una clase styles.imgHome y al principio del archivo importamos import rickAndMorty from ‘../images/rick-morty.png’ descargamos dicha imagen del siguiente link: https://raw.githubusercontent.com/ratasi/rick-morty/master/src/img/rick-morty.png, luego de esto creamos un tag button dspues del de <img /> todo esto dentro de <header></header> en <button> le damos un className de styles.btnSearch y un onClick de {reqApi} y dentro de button Buscar Personajes cuando cerramos el tag de button justo despues cerramos el </header> que abrimos en un principio
2. luego nos vamos antes del return definimos la funcion  reqApi dentro la volvemos asincrona y creamos una constante llamada api dandole el valor de await fetch(‘https://rickandmortyapi.com/api/character’) si hacemos un console.log(api). veremos aqui la infor con respecto a los personajes de la serie con status 200 , linea abajo creamos la constante  characterApi dentro le damos un valor de await  api.json() linea abajo si colocamos un console.log de characterApi veremos un json de todos los personajes de la serie, linea abajo colocamos setCharacters(characterApi.results) si hacemos un consolelog justo despues de este punto de charace. luego es hora de crear un state llamado [characters, setCharacters] = useState(null).  
3. luego creamos components dentro de este creamos el componente llamado characters.js  creamos la funcion principal de Characters le damos unos elementos padres tipo div y metemos por ahora desde characters en dicho div, por ahora lo dejamos asi y nos vamos a index.js dentro nos vamos justo despues del h1 de clase title aqui abrimos una llaves {} y dentro colocamos una condicional de que si existe characters retornaremos el componente Characters que acabamos de crear a este en su renderizavion en index.js le vamos a pasar a un prop llamado characters el valor characters y si characters no tiene nada retornamos encerrado en unos tacgs vacios <></> el tag de image de clase imageHome y el boton de clase btnSearch: {characters ? ( <Characters characters={characters} /> ) : (  <>   <img src={imageRickMorty} alt="Rick & Morty" className={styles.imgHome} />
       <button onClick={reqApi}className={styles.btnSearch}>
  Buscar personajes
</button>
     </>
 4. a este punto podemos destructurar characters directamete como prop de character.js  o lo desestructuramos manualmente: const {characters} = props en el div principal le damos una clase de {styles.characters} dentro borramos el contenido y un h1 que diga personajs, debajo metemos un span  de clase {styles.backHome} y que dentro del span diga Volver a la Home</span> linea abajo colocacomos un div de clase containerCharacters, dentro metemos entre llaves {} : {characters.map((character, index) => (   <div className={characterContainer} key={index}>      <p>{character.name}</p>   </div> ))} hasta ahora si hemos hecho esto deberiamos poder ver un listado de nombres en nuestra app. luego continuando con el mapeo de los elementos en characters eliminamos el parrafo donde esta {character.name} lo borramos e inmediatamente colocamos una capa de div sin clase , dentro de esta capa metemos un tag de <img de src{character.image} y de alt={character.name}, luego cerramos ese div que abrimos en un princioio sin clase, luego metemos otra capa de div que si va a tener bastante contendio lo primero que tendra sera un h3 que contiene {character.name} deguidompor un h6 que contiene un condicional de que si exite un estatus de vivo en un character retorna eltexto alive con la clase alive y de lo cobtrario dead con la clase dead :<h6> {character.status ===‘Alive’ ? ( <>   <span className=‘alive’>Alive</span> </> ):( <> <span className=‘dead’>Dead</span> </> )} </h6> luego de este codigo colocamos inmediatamente un parrafo <p> que  a la vez contiene un <span> cual dicho span contendra la clase de ‘text-grey’ y el texto de  Episodios:  en su interior luego linea abajo colocamos otro span y en el interior {character.episode.length} luego cerramos el parrafo  que abrimos </p>, despues inemdiatamente creamos tro parrfo con un span dentro de igual clase ‘text-grey’ y dentro el texto Especie: cerrando este span abrimos otro  y dentro {character.species},  para luego cerrar los dos divs que faltan el div que abrimos por alla justo antes del h3 {character.name} y el div contenedor del map.
5. finalmente despues del cierre que contiene el mapeo es decir despues del cierre de del div con la clase {styles.containerCharacters} colocamos un span de clase {styles.backHome} y  un evento onClick que contendra la funcion resetHome y  en su contenido volver a la Home. luego volvemos a index.js y le pasamos  setCharacters como valor a un prop del mismo nombre en el renderizado de Characters, luego desestructuramos al lado de characters en Characters.js setCharatarers: {characters, setCharacters} = props o podremos pasarlo directamente como argumento en la contante padre luego para declarar la funcion resetHome por encima del return  y dentro llamar a setCharacters(null) dentro con esto deberiamos tener la aplicacion lista con clickear este link deberiamosvolver al inicio debemos colocar este evento onClick dentro del span que esta arriba tambien

CSS
1. en global.css en el selector de body quitamos el padding de cero y le dejamos solo el margin de 0 y la parte del font-family
2. luego nos vamos en home.module.css primero creamos la clase App y le damos una alineacion de texto de centro, luego creamos la clase AppHeader dentro le damos un color de fondo de #282c34, una altura minima de 100vh , un display de flex, una difeccion de flex de column una alineacion de objetos de centro, un justificado de centro, un tamano de fuente de de calc(10px + 2vmin) y un color de blanco, despues de esto creamos la clase .title dandole un color de #738f93, un tamano de fuente de 40px, una fuente de familia de fantasy, sans-serif y un margen inferior de 0, luego creamos la clase imgHome dentro le damos un ancho de 700px y una altura de 500px, luego creamos la clase btnSearch le damos dentro un color de fondo de #1ba94c, un color de #fffff un box-shadow de 0 4px 12px rgb(27 169 76 / 50%), un tamano de fuente de 18.005px , un relleno izquierdo de 1.528em, un relleno derecho de 1.528em un relleno superior de 0, un relleno inferior de 0, una altura minima de 2.778em un borde de none, un cursor de pointer, un margen superiior de 20px, abajo la seudo clase btnSearch:hover y dentro un color de fondo de #ffffff un borde de 1px solid #1ba94c y un color de #1ba94c
3. creamos el archivo characters.module.css y dentro creamos la clase .characters y le damos un relleno de 50px, luego creamos otra clase .characters h1 y dentro le damos un margen superior de 0, luego creamos la clase .containersCharacters y dento le damos un display de grid, un grid-template-columns de auto auto auto, le damos un ancho de 100%, y un relleno inferior de 50px, luego creamos la clase de characterContainer y dentro le damos un display de flex, un fondo de #3c3e44, un margen de 20px 10px un radio de 10px y una alineacionde objetos de flex-start, luego creamos la clase de characterContainer h3 y dentro le damos un. margen 10px 0, luego un clase characterContainer h6 y dentro le damos un margen superior de 
QUEDA PENDIENTE EL RESTO DEL CSS
4. Para estilar nuestro boto de bucar personajes le damos al button de buscar personajes una clas .btn-search  y le damos los siguientes estilos: background-color: #1ba94c;
  color: #ffffff;
  box-shadow: 0 4px 12px rgb(27 169 76 / 50%);
  font-size: 18.005px;
  padding-left: 1.528em;
  padding-right: 1.528em;
  padding-top: 0;
  padding-bottom: 0;
  min-height: 2.778em;
  border: none;
  cursor: pointer;

  para luego darle un hove de :
  background-color: #ffffff;
  border: 1px solid #1ba94c;
  color: #1ba94c;


  .container-characters {
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
  padding-bottom: 50px;
}

.character-container {
  display: flex;
  background: #3c3e44;
  margin: 20px 10px;
  border-radius: 10px;
  align-items: flex-start;
}

.App{
     background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}