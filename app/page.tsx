import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Quekiwi</h1>
      <p>
        Somos una veterinaria que cuida a tus mascotas como si fueran nuestras
      </p>
      <Footer />
    </main>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return <footer>Copyright © QueKiwi {year}</footer>;
}

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>
            <Link href="nosotros">Nosotros</Link>
          </li>
          <li>
            <Link href="contactenos">Contactenos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
