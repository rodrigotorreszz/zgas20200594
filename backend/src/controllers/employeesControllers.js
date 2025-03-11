const employeesController = {};
import employeeModel from "../models/Employees.js"

//SELECT
employeesController.getEmplooyes = async (req, res) => {
    const employee = await employeeModel.find()
    res.json(employee)
}

// INSERT
employeesController.insertEmplooyes = async (req, res) => {
    const {  name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body;
    const newEmployee = new employeeModel({ name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified })
    await newEmployee.save()
    res.json({message: "Emplooyes saved"})
}

// DELETE
employeesController.deleteEmplooyes = async (req, res) => {
    await employeeModel.findByIdAndDelete(req.params.id)
    res.json({message: "Emplooyes deleted"})
}

// UPDATE

employeesController.updateEmplooyes = async (req, res) => {
    const { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body
    const updateEmplooyes = await employeeModel.findByIdAndUpdate(req.params.id, 
        { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified }, 
        {new:true}
    );
        res.json({message: "Emplooyes updated successfully "})
};

export default employeesController;