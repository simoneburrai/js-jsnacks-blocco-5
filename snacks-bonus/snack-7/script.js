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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }t
let id2Student;

for(let i=0; i<students.length; i++){
  const currentStudent = students[i];
  const currentStudentId= students[i].id;
  if(currentStudentId === 2){
    id2Student = currentStudent;
  }
}

console.log(id2Student);