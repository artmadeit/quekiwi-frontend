# Mi proyecto de veterinarias

Un proyecto de ejemplo...

## Clase 10

React es una librería para desarrollar interfaces de usuario web o nativas (mobile).

Nextjs es un framework basado en React para hacer aplicaciones web, es un framework fullstack, puede usarlo para el backend como frontend. Next.js te da una estructura base para iniciar tus proyectos dandote ciertas configuraciones por defecto y te da muchas funcionalidades con un rendimiento muy bueno, como son: ruteo, imagenes, fuentes y muchas cosas más.

## Aprenda mas de nextjs

- [React](https://react.dev/learn) - documentación de React
- [Next.js](https://nextjs.org/docs) - documentación de Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - tutorial de Next.js

### Crear un proyecto en Nextjs

Para crear un proyecto en nextjs ejecute el comando:

```bash
npx create-next-app@latest
```

Para ello usted debe tener [Node 16.8 o más](https://nextjs.org/docs/getting-started/installation)
Para ejecutar el proyecto escriba:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) en su navegador y vera el proyecto

### Que es un componente

React esta organizado en componentes (al igual que la mayoria de tecnologias actuales: Vue, Angular, Qwik, Svelte).

Un componente en React es una funcion que retorna html.

```tsx
function MyFooter() {
  return <footer>Copyright © QueKiwi 2023</footer>;
}
```

En React, el nombre del componente debe estar en PascalCase (x ejemplo MyFooter) esto ayuda a diferenciar las etiquetas html de los componentes (x ejemplo footer es un etiqueta de html mientras que Footer es un componente).

El componente que llame a nuestro componente MyFooter, sera algo como:

```tsx
function Home() {
  return (
    <div>
      <h1>Hola mundo!</h1>
      <MyFooter />
    </div>
  );
}
```

### Interpolación

Puede mostrar contenido dinamico de una variable usando `{}`.

```tsx
function Footer() {
  const year = 2023;
  return <footer>Copyright © QueKiwi {year}</footer>;
}
```

En si cualquier expresión en js es válida entre las `{}` React.

```tsx
function Footer() {
  const year = new Date().getFullYear();
  return <footer>Copyright © QueKiwi {year}</footer>;
}

// o mas corto
function Footer() {
  return <footer>Copyright © QueKiwi {new Date().getFullYear()}</footer>;
}
```

Si usa Angular o Vue, esto es parecido a `{{year}}`

Un ejemplo más completo seria por ejemplo una ficha de una persona, un:

```tsx
function PersonaCard() {
    const nombre = "Arthur"
    const especialidad = "Ingeniero de software"
    const descripcion = "Desarollador de software titulado de la ...";

    return (
        <div>
          <img src="foto-arthur.png">
          <h4>{nombre}</h4>
          <p>
              <strong>{especialidad}</strong>
          </p>
          <p>
              {descripcion}
          </p>
        </div>
    );
}
```

### Props (o propiedades)

En html una etiqueta posee propiedades, estas pueden recibir valores.

```html
<!-- src es una propiedad que tiene un valor -->
<img src="un_path_a_una_imagen" />
<!-- un boton con una propiedad disabled -->
<button disabled>Un boton</button>
```

Si desea mandar datos dinamicos a una etiqueta html, use `{}`, por ejemplo:

```tsx
const unaImagen = "un_path_a_una_imagen";
<img src={unaImagen} />;
```

De igual forma que las etiquetas html, tienen propiedades, en React sus componentes pueden recibir propiedades a traves de pasarles un argumento props.

```tsx
// Aqui usamos typescript para decirle que las props son en este formato
interface Persona {
  nombre: string;
  especialidad: string;
  descripcion: string;
}

function PersonaCard(props: Persona) {
    const nombre = props.nombre;
    const especialidad = props.especialidad;
    const descripcion = props.descripcion;

    return (
        <div>
          <img src="foto-arthur.png">
          <h4>{nombre}</h4>
          <p>
              <strong>{especialidad}</strong>
          </p>
          <p>
              {descripcion}
          </p>
        </div>
    );
}
```

Luego el componente que lo llame podria llamarlo de esta forma:

```tsx
function Home() {
  return (
    <div>
      <h1>Hola mundo!</h1>
      <PersonaCard nombre="Arthur" especialidad="Software" descripcion="..." />
      <PersonaCard
        nombre="Diana"
        especialidad="NLP y Software Engineer"
        descripcion="..."
      />
    </div>
  );
}
```

Al mandar props a un componente hacemos el componente mas dinamico y reusable.

Que tal si mejoramos un poco el componente anterior? Una caracteristica de javascript es [la deestructuración](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), esta nos puede ayudar a acortar el codigo anterior:

```tsx
interface Persona {
  nombre: string;
  especialidad: string;
  descripcion: string;
  imageUrl: string; // nota agregue este nueva propiedad para hacer dinamico la imagen
}

function PersonaCard({ nombre, especialidad, descripcion, imageUrl }: Persona) {
  return (
    <div>
      <img src={imageUrl} />
      <h4>{nombre}</h4>
      <p>
        <strong>{especialidad}</strong>
      </p>
      <p>{descripcion}</p>
    </div>
  );
}
```

### Nextjs

Hasta ahora hemos visto algunos conceptos básicos de React. Next.js es un framework basado en React para hacer aplicaciones web con mucho rendimiento.

### Nextjs Rutas y paginas

En nextjs las paginas estan organizadas en la carpeta /app usando subcarpetas como nombres de rutas y para definir una pagina esta debe tener el nombre exacto: page.tsx.

Por ejemplo:
Si usted quiere crear una pagina en http://localhost:3000/nosotros, debera crear /app/nosotros/page.tsx
Si usted quiere crear una pagina en http://localhost:3000/productos, debera crear /app/productos/page.tsx
Si usted quiere crear una pagina en http://localhost:3000/productos/en-descuento, debera crear /app/productos/en-descuento/page.tsx

El contenido de su page.tsx debe ser un componente que sea exportado por defecto, por ejemplo, para /app/nosotros/page.tsx, podria tener lo siguiente:

```tsx
export default function Nosotros() {
  return (
    <h1>Nosotros</h1>
    <p>Somos una empresa ....</p>
  );
}
```

Igualmente el componente que previamente habiamos hecho el Home, podriamos ponerlo en /app/page.tsx

```tsx
// recuerde el export default
export default function Home() {
  return (
    <div>
      <h1>Hola mundo!</h1>
      <PersonaCard nombre="Arthur" especialidad="Software" descripcion="..." />
      <PersonaCard
        nombre="Diana"
        especialidad="NLP y Software Engineer"
        descripcion="..."
      />
    </div>
  );
}
```

### Nextjs Link

Al igual que hemos creado nuestro componente Nextjs tiene unos cuantos componentes que nos pueden ayudar en el desarrollo. Uno de ellos es el Link. Por ejemplo si queremos enlazar nuestra pagina nosotros a la pagina productos:

```tsx
// en app/nosotros/page.tsx
export default function Nosotros() {
  return (
    <Header>
    <h1>Nosotros</h1>
    <p>Somos una empresa ....</p>
    <p>Tenemos productos muy buenos, vealos <Link href="productos">aquí</Link></p>
    <MyFooter/>
  );
}
```

```tsx
// en app/productos/page.tsx
export default function Productos() {
  return (
    <Header>
    <h1>Productos</h1>
    <p>Tenemos productos que les encantaran..</p>
    <ul>
      <li>Zapatillas</li>
      <li>Pelotas de futbol</li>
      <li>Camisas</li>
    </ul>
    <MyFooter/>
  );
}
```

El `<Link>` es casi como una etiqueta `<a>`, sin embargo esta permite la transicion de una pagina a otra sin necesidad de recargar la pagina (a esto se le conoce como client-side navigation)

### Nextjs Layout

Cuando usted desee que varias paginas compartan una estructura puede usar el layout.tsx. Por ejemplo el Header y MyFooter aparecen en todas las paginas que hemos hecho en nosotros, el home y productos.

Nextjs le da un layout por defecto (tambien conocido como RootLayout), este lo encontrara en /app/layout.tsx

El contenido de este es un componente exportado por defecto, por ejemplo podriamos poner esto:

```tsx

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Header/>
    {children}
    <Footer>
  );
}
```

Luego en /app/nosotros/page.tsx

```tsx
// en app/nosotros
export default function Nosotros() {
  return (
    // <Header> <= ya no es necesario lo podemos eliminar
    <h1>Nosotros</h1>
    <p>Somos una empresa ....</p>
    <p>Tenemos productos muy buenos, vealos <Link href="productos">aquí</Link></p>
    // <MyFooter/> <= igual aqui
  );
}
```

Lo mismo podriamos hacer con /app/productos/page.tsx y /app/page.tsx

## Clase 11

### Realizando Request a servicios REST

Para llamar a un servicio web REST usted tiene varias alternativas en js:

- Usar [fetch(), el cual es una función estandar de javascript](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), con esto usted hara requests al servicio y recibira una respuesta en [forma de promesa](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
- Usar una [libreria como axios](https://axios-http.com/docs/intro)
- Dependiendo de su framework usara otras formas, por ejemplo en Angular usted usara [httpClient](https://angular.io/guide/http)

Veamos ejemplos sencillos de hacer un fetch(), para realizar una petición GET haga:

```js
async function getVeterinarios() {
  const response = await fetch("http://localhost:8080/veterinarios");
  console.log(response.headers);
  console.log(response.body);
}
```

Fetch recibe una url como parametro y opcionalmente como 2do parametro mas opciones (lo veremos mas abajo)

Note que fetch() nos devuelve una promesa de una respuesta, para esperar dicha promesa use await.
Recuerde para que el await funcione debe usarlo dentro de una funcion asincrona (async).

Como explicamos en otras clases en HTTP, tanto los request como los responses tienen cabeceras (headers) como un cuerpo (body). Sin embargo, si usted ve el contenido de la console.log, vera que el body esta en un formato binario. Si usted quiere obtener el body en formato json, haga:

```js
async function getVeterinarios() {
  const response = await fetch("http://localhost:8080/veterinarios");
  console.log(response.json());
}
```

Un ejemplo completo lo puede [encontrar aqui](https://github.com/artmadeit/quekiwi-frontend/commit/634f30c8b0b1f84dd1d2b3be01522e0179631a9a)

Si usted usa axios el ejemplo seria asi:

```js
import axios from "axios";

async function getVeterinarios() {
  const response = await axios.get("http://localhost:8080/veterinarios");
  console.log(response.data);
}
```

Si usted usa http client (solo en Angular), el ejemplo seria asi:

```js
import { HttpClient } from '@angular/common/http';

class VeterinarioService {
  constructor(private http: HttpClient) { }

  getVeterinarios() {
    // Note que la funcion no usa el async, en Angular, se usa rxjs
    // en vez de usar promesas se devuelven observables
    // esta es otra manera de manejar asincronia en js (aunque no es parte oficial de js)
    const response = http.get("http://localhost:8080/veterinarios");
    response.subscribe(console.log);
  }
}
```

Hasta ahora hemos visto ejemplos de hacer un metodo GET, como haria una petición POST?
Se necesitara ademas de la URL mandarle un body además de una cabecera para indicar que lo que se envia está en formato json. Un ejemplo usando fetch() es el siguiente

```js
await fetch("http://localhost:8080/veterinarios", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nombre: "Arthur",
    apellido: "Mauricio",
    numeroCertificado: "...",
    dni: "...",
    especialidad: "Desarrollador",
    salario: 2000,
  }),
});
```

La funcion fetch() por defecto envia peticiones GET, si queremos decir que usamos POST, debemos indicarla a traves del `method: "POST"`. Con el uso `headers` podra indicar las cabeceras http (como el Content-Type, Authorization y muchos otro más). En el caso Content-Type, este como se explico arriba, avisa al backend que enviaremos contenido en formato "json" (tambien podemos indicar que enviaremos XML, PDF entre otros muchos otros formatos más...)

Puede ver un [ejemplo completo en React en el commit](https://github.com/artmadeit/quekiwi-frontend/commit/7a4819d87245f56de9bc99947007f65fc9b612bb).

Si usted usa axios el ejemplo seria asi:

```js
import axios from "axios";

async function registrarVeterinario() {
  const response = await axios.post("http://localhost:8080/veterinarios", {
    nombre: "Arthur",
    apellido: "Mauricio",
    numeroCertificado: "...",
    dni: "...",
    especialidad: "Desarrollador",
    salario: 2000,
  });
  console.log(response.data);
}
```

Si usted usa http client (solo en Angular), el ejemplo seria asi:

```js
import { HttpClient } from '@angular/common/http';

class VeterinarioService {
  constructor(private http: HttpClient) { }

  registrarVeterinario() {
    const response = http.post("http://localhost:8080/veterinarios", {
      nombre: "Arthur",
      apellido: "Mauricio",
      numeroCertificado: "...",
      dni: "...",
      especialidad: "Desarrollador",
      salario: 2000,
    });
    response.subscribe(console.log);
  }
}
```

### React State

Previamente habiamos visto propiedades de un componente o como se dice en React los `props`. Está es una pieza fundamental de React, otra pieza base a entender es el estado de un componente.

Al igual que usted declara en una clase atributos que forman el estado de su clase y tiene metodos computados (que son calculados en base a esos atributos), en java por ejemplo:

```java
class Persona {
  String nombres;
  String apellidos;
  LocalDate fechaNacimiento;

  Integer getEdad() { // un método (o una propiedad computada)
    return Period.between(fechaNacimiento, LocalDate.now()).getYears();
  }

  // getter y setter..
}
```

Igualmente sus componentes pueden tener estado y calcular valores, para el estado use useState().

```jsx
function PersonaCard() {
  // useState(arg) recibe un argumento opcional, el estado inicial.
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date(1998, 8, 4));
  const edad = calcularEdad(fechaNacimiento);

  // Note en React el value y onChange
  // <input
  //   value={nombres}
  //   onChange={(event) => setNombres(event.target.value)}
  // />
  // estas son como si en Angular usara: <input [(ngModel)]="nombres" />
  // o en Vuejs usara: <input v-model="nombres" />
  // internamente Vuejs y Angular hacen lo mismo que en React
  // React no da una forma de hacer un shorthand, puesto que tiene la filosofia de
  // hacer explicito, cualquier cambio de estado. Esto facilita ver donde usted ha
  // hecho cambios, por ejemplo buscando setNombres, sabra cualquier cambio al estado nombres
  // Además puede reducir componentes muy acoplados y bugs, si desea ver más vea su filosofia
  // de unidireccionalidad: https://react.dev/learn/thinking-in-react

  return (
    <div>
      <h1>Registro de personas</h1>
      <form onSubmit={registrarPersona}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombres}
            onChange={(event) => setNombres(event.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellidos}
            onChange={(event) => setApellidos(event.target.value)}
          />
          <input
            type="date"
            placeholder="Fecha nacimiento"
            value={fechaNacimiento}
            onChange={(event) => setFechaNacimiento(event.target.value)}
          />
          <p>Mi edad es: {edad}</p>
        </div>
      </form>
    </div>
  );
}

function calcularEdad(fechaNacimiento) {
  // calcular la edad en js es un poco feo, esto lo saque de stackoverflow
  // https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
  const today = new Date();
  var age = today.getFullYear() - fechaNacimiento.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
```

El ejemplo completo de [usar React state + fetch está aqui](https://github.com/artmadeit/quekiwi-frontend/commit/7a4819d87245f56de9bc99947007f65fc9b612bb)
