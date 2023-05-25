const veterinarios = [
  {
    id: 1,
    nombre: "Alex",
    especialidad: "Oncologia",
  },
  {
    id: 2,
    nombre: "Malena",
    especialidad: "Oncologia",
  },
];

export default function Nosotros() {
  return (
    <div>
      <h1>Nosotros</h1>
      <p>Somos una empresa dedicada ...</p>
      <h3>Objetivo</h3>
      <p>Nuestra meta en el 2026 es lograr a ser</p>

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

interface Veterinario {
  nombre: string;
  especialidad: string;
}

function VeterinarioCard({ nombre, especialidad }: Veterinario) {
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
