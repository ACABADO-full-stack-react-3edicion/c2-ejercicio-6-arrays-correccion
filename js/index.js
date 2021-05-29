const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 17,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];

const analizaPacientes = (pacientes) => {
  const nPacientes = pacientes.length;
  const nMayoresEdad = pacientes.filter(
    ({ paciente: { edad } }) => edad >= 18
  ).length;
  const nHombresDiabeticos = pacientes.filter(
    ({ dieta, paciente: { sexo } }) =>
      dieta.toLowerCase() === "diabetes" && sexo.toLowerCase() === "h"
  ).length;
  const diasIngreso = pacientes.reduce(
    (acumulador, { diasIngresado }) => acumulador + diasIngresado,
    0
  );
  const mediaEdadMujeres = pacientes
    .filter(({ paciente: { sexo } }) => sexo.toLowerCase() === "m")
    .reduce(
      (totalEdad, { paciente: { edad } }, i, mujeres) =>
        totalEdad + edad / mujeres.length,
      0
    )
    .toFixed(2);

  const analisis = {
    nPacientes,
    nMayoresEdad,
    nHombresDiabeticos,
    diasIngreso,
    mediaEdadMujeres,
  };

  return analisis;
};

console.log(analizaPacientes(pacientes));
