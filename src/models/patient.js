const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  patientId: {type: Number},
  reportedOn: {type:String},
  onsetEstimate: {type:String},
  ageEstimate: {type:String},
  gender: {type:String},
  city: {type:String},
  disctrict: {type:String},
  state: {type:String},
  status: {type:String},
  notes: {type:String},
  contractedFrom: {type:String},
});

const Patient=mongoose.model("Patient", patientSchema)

module.exports = Patient;
