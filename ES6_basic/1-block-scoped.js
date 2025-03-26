export default function taskBlock(trueOrFalse) {
  let task = false; // Cambia const a let para permitir la reasignación
  let task2 = true;

  if (trueOrFalse) {
    task = true; // Asigna a la variable externa
    task2 = false; // Asigna a la variable externa
  }

  return [task, task2]; // Devuelve las variables
}
