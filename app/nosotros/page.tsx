import Link from "next/link";

interface Veterinario {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  numeroCertificado: string;
  especialidad: string;
  salario: number;
}

export default async function Nosotros() {
  const response = await fetch("http://localhost:8080/veterinarios", {
    cache: "no-cache",
  });
  const veterinarioPage = await response.json();
  const veterinarios: Veterinario[] = veterinarioPage.content;

  return (
    <div>
      <h1>Nosotros</h1>
      <p>Somos una empresa dedicada ...</p>
      <h3>Objetivo</h3>
      <p>Nuestra meta en el 2026 es lograr a ser</p>

      <h3>Nuestro equipo:</h3>
      <Link href="veterinarios/crear">
        <button>Agregar veterinario</button>
      </Link>
      {veterinarios.map((veterinario) => (
        <VeterinarioCard
          key={veterinario.id}
          nombre={veterinario.nombre}
          especialidad={veterinario.especialidad}
        />
      ))}
    </div>
  );
}

interface VeterinarioCardProps {
  nombre: string;
  especialidad: string;
}

function VeterinarioCard({ nombre, especialidad }: VeterinarioCardProps) {
  return (
    <div style={{ border: "2px solid black" }}>
      <h4>{nombre}</h4>
      <p>
        <strong>{especialidad}</strong>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic
        explicabo nisi modi sint, eligendi iure ratione quas voluptate
        consectetur laboriosam autem ipsam. Dolor, deleniti ipsa. Aliquam
        suscipit hic voluptatem.
      </p>
    </div>
  );
}
