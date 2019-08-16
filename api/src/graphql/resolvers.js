export default {
  Query: {
    employees: async (parent, args, { models }) => {
      const Employee = await models.Employee.find({});
      console.log(Employee);
      return Employee;
    },
    chartData: async (parent, args, { models }) => {
      const Employee = await models.Employee.find({});
      let chartData = {
        ids: [],
        names: [],
        lastNames: [],
        particip: []
      };
      Employee.forEach(elem => {
        chartData.ids.push(elem._id);
        chartData.names.push(elem.firstName);
        chartData.lastNames.push(elem.lastName);
        chartData.particip.push(elem.particip);
      });
      console.log(chartData);
      return chartData;
    }
  },
  Mutation: {
    createEmployee: async (parent, { firstName, lastName, particip }, { models }) => {
      const Employee = await models.Employee.findOne({ "firstName": firstName, "lastName": lastName });

      if (Employee) {
        throw new Error('Please provide a unique title.');
      }


      const newEmployee = new models.Employee({
        firstName,
        lastName,
        particip
      });


      try {
        await newEmployee.save();
      } catch (e) {
        throw new Error('Cannot Save the employee!!!');
      }

      return true;
    },
    removeEmployee: async (parent, { firstName, lastName }, { models }) => {

      try {
        await models.Employee.deleteOne({ "firstName": firstName, "lastName": lastName });
      } catch (e) {
        throw new Error('Cannot Delete the Employee!!!');
      }

      return true;
    },
  },
};