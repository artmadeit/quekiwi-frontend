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
