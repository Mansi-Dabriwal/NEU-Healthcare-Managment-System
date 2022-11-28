import express from 'express';
const patientRouter = express.Router();
import * as patientController from '../controller/patientController.js'



console.log("in patientRouter")
patientRouter.post("/create", patientController.createPatient);
patientRouter.get("/getAll", patientController.getAll);
// patientRouter.get("/login", patientController.login)
export default patientRouter;