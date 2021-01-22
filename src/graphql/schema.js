import { gql } from 'apollo-server';

const schema = gql`
  type Course {
    id: ID
    title: String
    teacher: String
    description: String
    topic: String
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
  }

  type Mutation {
    newCourse(input: CourseInput!): Course
    editCourse(id: ID!, input: CourseInput!): Course
    deleteCourse(id: ID!): String
    newStudent(input: StudentInput!): Student
    editStudent(id: ID!, input: StudentInput!): Student
    deleteStudent(id: ID!): String
  }
`;

export default schema;
