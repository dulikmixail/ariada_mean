const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClAppointmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClAppointment = mongoose.model('M_Cl_Appointment', mClAppointmentSchema);
module.exports = require('../../services/crud.service')(MClAppointment);
