const Physical_Performance = require('../../models/all/physical_performance');
const Mode_Of_Motor_Activity = require('../../models/all/mode_of_motor_activity');

module.exports = new Promise((resolve, reject) => {
    let createPhysicalPerformance = function (physicalPerformance) {
        Mode_Of_Motor_Activity.find(
            {
                title: physicalPerformance.mode_of_motor_activity
            },
            (err, activity) => {
                if (err) {
                    throw err;
                } else {
                    Physical_Performance.create(
                        {
                            mode_of_motor_activity: activity[0],
                            thresholdLoadInMen: physicalPerformance.thresholdLoadInMen,
                            thresholdLoadInWomen: physicalPerformance.thresholdLoadInWomen,
                            loadValue: physicalPerformance.loadValue,
                            trainingHeartRate: physicalPerformance.trainingHeartRate
                        },
                        (err, physicalPerformance) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(physicalPerformance)
                            }
                        }
                    )
                }
            }
        );
    };

    createPhysicalPerformance(
        {
            mode_of_motor_activity: 'Щадно-тренувальний',
            thresholdLoadInMen: '51-100',
            thresholdLoadInWomen: '51-85',
            loadValue: '0,6-1,3',
            trainingHeartRate: '120'
        }
    );
    createPhysicalPerformance(
        {
            mode_of_motor_activity: 'Тренувальний',
            thresholdLoadInMen: '101-150',
            thresholdLoadInWomen: '86-125',
            loadValue: '1,1-1,9',
            trainingHeartRate: '140'
        }
    );
    createPhysicalPerformance(
        {
            mode_of_motor_activity: 'Інтенсивно тренувальний',
            thresholdLoadInMen: 'понад 150',
            thresholdLoadInWomen: 'понад 125',
            loadValue: '1,6-2,5',
            trainingHeartRate: '160'
        }
    );
});