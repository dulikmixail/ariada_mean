const Number_Unit = require('../../models/all/number_unit.model');
module.exports = require('../crud.service')(Number_Unit, 'unit_of_measure', 'limitation_of_units');
