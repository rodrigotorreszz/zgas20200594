const clientController = {};
import clientModel from "../models/Clients.js"

//SELECT
clientController.getClients = async (req, res) => {
    const clients = await clientModel.find()
    res.json(clients)
}

// INSERT
clientController.insertClients = async (req, res) => {
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body;
    const newClient = new clientModel({ name, lastName, birthday, email, password, telephone, dui, isVerified })
    await newClient.save()
    res.json({message: "Client saved"})
}

// DELETE
clientController.deleteClients = async (req, res) => {
    await clientModel.findByIdAndDelete(req.params.id)
    res.json({message: "Clients deleted"})
}

// UPDATE

clientController.updateClients = async (req, res) => {
    const { name, lastName, birthday, email, password, telephone, dui, isVerified } = req.body
    const updateClients = await clientModel.findByIdAndUpdate(req.params.id, 
        { name, lastName, birthday, email, password, telephone, dui, isVerified }, 
        {new:true}
    );
        res.json({message: "Clients updated successfully "})
};

export default clientController;