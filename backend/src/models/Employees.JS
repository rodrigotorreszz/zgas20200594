import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    birthday: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    hireDate: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    telephone:{
        type: Number,
        require: true,
        min: 0
    },
    dui:{
        type: Number,
        require: true,
        min: 0
    },
    isssNumber: {
        type: Number,
        require: true,
        min: 0
    },
    isVerified:{
        type: Boolean
    }

},{
timestamps: true,
strict: false
})

export default model("Employees", employeeSchema);