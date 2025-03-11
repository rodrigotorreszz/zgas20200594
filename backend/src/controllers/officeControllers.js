const officeControllers = {};
import OfficeModels from "../models/Office.js"

//SELECT
officeControllers.getOffices = async (req, res) => {
    const office = await OfficeModel.find()
    res.json(office)
}

// INSERT
officeControllers.insertOffices = async (req, res) => {
    const {  name, address, telephone, schedule } = req.body;
    const newoffice = new OfficeModel({ name, address, telephone, schedule })
    await newoffice.save()
    res.json({message: "offices saved"})
}

// DELETE
officeControllers.deleteOffices = async (req, res) => {
    await officeModel.findByIdAndDelete(req.params.id)
    res.json({message: "office deleted"})
}

// UPDATE

officeControllers.updateOffices = async (req, res) => {
    const { name, address, telephone, schedule } = req.body
    const updateoffice = await OfficeModels.findByIdAndUpdate(req.params.id, 
        { name, address, telephone, schedule }, 
        {new:true}
    );
        res.json({message: "Offices updated successfully "})
};

export default officeControllers;