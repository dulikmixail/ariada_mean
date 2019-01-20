const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

let CalculationSchema = new Schema({
  signal: {
    type: String
  },
  date: {
    type: Date
  },
  heartRate: {
    type: Number
  },
  systolicPressure: {
    type: Number
  },
  diastolicPressure: {
    type: Number
  },
  pulsePressure: {
    type: Number
  },
  pulseRate: {
    type: Number
  },
  pulseRecoveryMinutes: {
    type: Number
  },
  changesSystolicPressure: {
    type: Number
  },
  changesDiastolicPressure: {
    type: Number
  },
  changesPulsePressure: {
    type: Number
  },
  recoveryPulsePressureMinutes: {
    type: Number
  },
  cTypeOfReaction: {
    type: [Schema.Types.ObjectId],
    ref: 'C_Type_Of_Reaction'
  }
}, {versionKey: false});

module.exports = mongoose.model('Calculation', CalculationSchema);
