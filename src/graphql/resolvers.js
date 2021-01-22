import Course from '../models/Course';
import Student from '../models/Student';

const resolvers = {
  Query: {
    getCourses: async () => {
      try {
        const course = await Course.find({});
        return course;
      } catch (error) {
        return new Error(error);
      }
    },
    getCourse: async (obj, { id }) => {
      const course = await Course.findById({ _id: id });
      return course;
    },
    getStudents: async () => {
      const student = await Student.find({});
      return student;
    },
    getStudent: async (obj, { id }) => {
      const student = await Student.findById({ _id: id });
      return student;
    },
  },

  Mutation: {
    newCourse: async (obj, { input }) => {
      try {
        const course = new Course(input);
        await course.save();
        return course;
      } catch (error) {
        return new Error(error);
      }
    },
    editCourse: async (obj, { id, input }) => {
      try {
        const course = await Course.findByIdAndUpdate({ _id: id }, input, {
          new: true,
        });
        return course;
      } catch (error) {
        return new Error(error);
      }
    },
    deleteCourse: async (obj, { id }) => {
      try {
        await Course.findByIdAndDelete({ _id: id });
        return 'Curso Eliminado';
      } catch (error) {
        return new Error(error);
      }
    },
    newStudent: async (obj, { input }) => {
      try {
        const student = new Student(input);
        await student.save();
        return student;
      } catch (error) {
        return new Error(error);
      }
    },
    editStudent: async (obj, { id, input }) => {
      try {
        const student = await Student.findByIdAndUpdate({ _id: id }, input, {
          new: true,
        });
        return student;
      } catch (error) {
        return new Error(error);
      }
    },
    deleteStudent: async (obj, { id }) => {
      try {
        await Student.findByIdAndDelete({ _id: id });
        return 'Estudiante Eliminado';
      } catch (error) {
        return new Error(error);
      }
    },
  },
};

export default resolvers;
