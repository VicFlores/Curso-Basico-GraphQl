import { gql } from 'apollo-server';

const schema = gql`
  union Result = Course | Student
  type Course {
    id: ID
    title: String
    teacher: String
    description: String
    topic: String
    student: ID
    level: Level
  }

  "Valida los tipos de nivel"
  enum Level {
    principiante
    intermedio
    avanzando
  }

  type Student {
    id: ID
    name: String
    email: String
    password: String
  }

  input CourseInput {
    title: String!
    teacher: String!
    description: String!
    topic: String!
    level: Level!
  }

  input StudentInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    getCourses: [Course]
    getCourse(id: ID!): Course
    getStudents: [Student]
    getStudent(id: ID!): Student
    search: [Result]
  }

  type Mutation {
    "Crea un nuevo curso"
    newCourse(input: CourseInput!): Course
    "Edita un curso"
    editCourse(id: ID!, input: CourseInput!): Course
    "Elimina curso"
    deleteCourse(id: ID!): String
    "Crea un nuevo estudiante"
    newStudent(input: StudentInput!): Student
    "Edita un estudiante"
    editStudent(id: ID!, input: StudentInput!): Student
    "Elimina un estudiante"
    deleteStudent(id: ID!): String
    "Agregar estudiante a curso"
    addStudent(courseID: ID!, studentID: ID!): Course
  }
`;

export default schema;
