"use client";

import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export default function CrearVeterinario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numeroCertificado, setNumeroCertificado] = useState("");
  const [dni, setDni] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [salario, setSalario] = useState("");

  const router = useRouter();

  const registrarPersona: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await fetch("http://localhost:8080/veterinarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        numeroCertificado: numeroCertificado,
        dni: dni,
        especialidad: especialidad,
        salario: Number(salario),
      }),
    });

    alert("Usuario fue registrado");
    router.push("/nosotros");
  };

  return (
    <div>
      <h1>Registre su veterinario</h1>
      <form onSubmit={registrarPersona}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
          />
          <input
            type="text"
            placeholder="Número de certificado"
            value={numeroCertificado}
            onChange={(event) => setNumeroCertificado(event.target.value)}
          />
          <input
            type="text"
            placeholder="DNI"
            value={dni}
            onChange={(event) => setDni(event.target.value)}
          />
          <input
            type="text"
            placeholder="Especialidad"
            value={especialidad}
            onChange={(event) => setEspecialidad(event.target.value)}
          />
          <input
            type="text"
            placeholder="Salario"
            value={salario}
            onChange={(event) => setSalario(event.target.value)}
          />
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}
