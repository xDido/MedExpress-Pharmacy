const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const Port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); // Add this line to parse form data

// Connect to MongoDB
mongoose.connect('mongodb+srv://rawanelashmawy:rawanelashmawy@infodb.srentmg.mongodb.net/ClinicPharmaDB')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

app.listen(Port, () => {
    console.log("Server running at http://localhost:" + Port + "/");
});

// Import your routes here
const path = require('path');
const { registerPPatient, registerPharmacist, loginUser } = require('./controllers/GuestController');

const AdminRoutes = require('./routes/AdminRoutes')
const {createAdmin, removePharmacist, removePatient, viewPharmacistApplications, viewPharmacists} = require('./controllers/AdminController');
const {addMedicine, editMedicine, viewMedicines, viewMedicinesPharmacist, searchMedicine, getMedicinesByMedicalUse, getMedicalUses} = require('./controllers/MedicineController'); // Import MedicineController

const AuthRoutes = require('./routes/AuthRoutes');
const {createPharmacist} = require('./controllers/PharmacistController');


app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "pages", "Home.html");
    res.sendFile(filePath);
});

app.get("/register", (req, res) => {
    const filePath = path.join(__dirname, "pages", "PPatientRegister.html");
    res.sendFile(filePath);
});

app.get("/Pharmregister", (req, res) => {
    const filePath = path.join(__dirname, "pages", "PharmRegister.html");
    res.sendFile(filePath);
});




app.use('/register', AuthRoutes);
app.use('/Pharmregister', AuthRoutes);


app.put('/editMedicine',editMedicine);


app.get("/admin", (req, res) => {
    const filePath = path.join(__dirname, "pages", "admin.html");
    res.sendFile(filePath);
});

app.get("/addMedicine", (req, res) => {
    const filePath = path.join(__dirname, "pages", "addMedicine.html");
    res.sendFile(filePath);
});

app.get("/ppatient", (req, res) => {
    const filePath = path.join(__dirname, "pages", "PPatient.html");
    res.sendFile(filePath);
});

app.get("/pharmacist", (req, res) => {
    const filePath = path.join(__dirname, "pages", "Pharmacist.html");
    res.sendFile(filePath);
});

app.get("/medicine", (req, res) => {
    const filePath = path.join(__dirname, "pages", "Medicine.html");
    res.sendFile(filePath);
});

app.get("/CreateAdmin", (req, res) => {
    const filePath = path.join(__dirname, "pages", "CreateAdmin.html");
    res.sendFile(filePath);
});

app.get("/createPharmacist", (req, res) => {
    const filePath = path.join(__dirname, "pages", "createPharmacist.html");
    res.sendFile(filePath);
});

app.get("/viewPharmacists", (req, res) => {
    const filePath = path.join(__dirname, "pages", "ViewPharmacists.html");
    res.sendFile(filePath);
});

app.get("/viewPatients", (req, res) => {
    const filePath = path.join(__dirname, "pages", "viewPatients.html");
    res.sendFile(filePath);
});

app.get("/searchMedicine", (req, res) => {
    const filePath = path.join(__dirname, "pages", "Medicine.html");
    res.sendFile(filePath);
});

app.get("/getMedicalUses", (req, res) => {
    const filePath = path.join(__dirname, "pages", "Medicine.html");
    res.sendFile(filePath);
});

app.get("/getMedicinesByMedicalUse", (req, res) => {
    const filePath = path.join(__dirname, "pages", "Medicine.html");
    res.sendFile(filePath);
});

app.get("/removePharmacist", (req, res) => {
    const filePath = path.join(__dirname, "pages", "removePharmacist.html");
    res.sendFile(filePath);
});
app.get("/removePatient", (req, res) => {
    const filePath = path.join(__dirname, "pages", "removePatient.html");
    res.sendFile(filePath);
});
// app.get("/viewPharmacistApplications", (req, res) => {
//     console.log('Request to viewPharmacistApplications received');
//     const filePath = path.join(__dirname, "pages", "viewPharmacistApplications.html");
//     res.sendFile(filePath);
// });
app.get("/iewPharmacistApplications", viewPharmacistApplications);

app.get("/viewPharmacistApplications", (req, res) => {
    const filePath = path.join(__dirname, "pages", "viewPharmacistApplications.html");
    res.sendFile(filePath);
});

// app.get("/viewPharmacistApplications", async (req, res) => {
//     try {
//         const pharmacistApplications = await viewPharmacistApplications();
//         res.status(200).json({ pharmacistApplications });
//     } catch (error) {
//         console.error('Error fetching pharmacist applications:', error);
//         res.status(500).json({ error: 'Failed to fetch pharmacist applications', detailedError: error.message });
//     }
// });

app.get("/viewMedicines", (req, res) => {
    const filePath = path.join(__dirname, "pages", "viewMedicines.html");
    res.sendFile(filePath);
});



app.use('/register', AuthRoutes);
app.use('/Pharmregister', AuthRoutes);
app.use('/CreateAdmin', AdminRoutes);


app.post("/register", registerPPatient);
app.post("/Pharmregister",registerPharmacist);
app.post("/addMedicine", addMedicine);
app.post("/addUser", registerPPatient);
app.post("/CreateAdmin", createAdmin);
app.post("/createPharmacist", createPharmacist);
app.delete("/removePharmacist", removePharmacist);
app.delete("/removePatient" , removePatient);
//app.get("/viewPharmacistApplications", viewPharmacistApplications);

app.get("/iewPharmacists", viewPharmacists);
app.get("/Medicines",viewMedicines);
app.get("/MedicinesPharmacist",viewMedicinesPharmacist);
app.post("/earchMedicine", searchMedicine);
app.get("/MedicalUses", getMedicalUses);
app.get("/ilterMedicine", getMedicinesByMedicalUse);

// Define your /addUser route here to handle the POST request
// app.post("/register", registerPPatient);
// app.post("/Pharmregister",registerPharmacist);
// app.post("/addMedicine", addMedicine);