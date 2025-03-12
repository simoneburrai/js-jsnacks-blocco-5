const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

let marcoClass;

for (let i = 0; i < students.length; i++) {
  const currentStudent = students[i];
  const currentName = currentStudent.name;
  const currentClass = currentStudent.class;

  if(currentName === "Marco Lanci"){
    marcoClass = currentClass;
  }
}

console.log(marcoClass);
