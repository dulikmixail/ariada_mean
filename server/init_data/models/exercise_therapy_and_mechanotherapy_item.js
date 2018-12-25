const Exercise_Therapy_And_Mechanotherapy_Item = require('../../models/all/exercise_therapy_and_mechanotherapy_item');
const Number_Unit = require('../../models/all/number_unit');
const Unit_Of_Measure = require('../../models/all/unit_of_measure');
const Limitation_Of_Units = require('../../models/all/limitation_of_units');
const promiseHelper = require('../promise_helper');

module.exports = new Promise((mainResolve, mainReject) => {
    let createExerciseTherapyAndMechanotherapyItems = function (itemsArray) {
        itemsArray.forEach(item => {
            let promises = [];
            let pushingPromiseUnitOfMeasure = function (numberUnit) {
                promises.push(new Promise((resolve, reject) => {
                    let promisesForNumberUnit = [];
                    if (numberUnit.unit_of_measure && numberUnit.unit_of_measure.shortName) {
                        promisesForNumberUnit[0] = promiseHelper.getPromiseFindModel(
                            Unit_Of_Measure,
                            {
                                shortName: numberUnit.unit_of_measure.shortName
                            }
                        )
                    }
                    if (numberUnit.limitation_of_units && numberUnit.limitation_of_units.titles) {
                        promisesForNumberUnit[1] = promiseHelper.getPromiseFindModel(
                            Limitation_Of_Units,
                            {
                                titles: numberUnit.limitation_of_units.titles
                            }
                        )
                    }

                    Promise.all(promisesForNumberUnit).then(items => {
                        items = promiseHelper.joinAllArrayResults(items);
                        Number_Unit.create(
                            {
                                numbers: numberUnit.numbers,
                                unit_of_measure: items[0],
                                limitation_of_units: items[1]
                            },
                            (err, numberUnit) => {
                                if (err) {
                                    reject(err)
                                } else {
                                    resolve(numberUnit)
                                }
                            }
                        )
                    });
                }))
            };
            if (item.time) {
                pushingPromiseUnitOfMeasure(item.time)
            }
            if (item.counter) {
                pushingPromiseUnitOfMeasure(item.counter)
            }


            Promise.all(promises).then(numberUnits => {
                Exercise_Therapy_And_Mechanotherapy_Item.create(
                    {
                        title: item.title,
                        time: numberUnits[0],
                        counter: numberUnits[1]
                    },
                    (err, exerciseTherapyAndMechanotherapyItem) => {
                        if (err) {
                            mainReject(err)
                        } else {
                            mainResolve(exerciseTherapyAndMechanotherapyItem)
                        }
                    }
                )
            });
        });
    };

    createExerciseTherapyAndMechanotherapyItems(
        [
            {
                title: 'Профілактор Євмінова',
                time: {
                    numbers: [15, 20],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Після заняття рекомендовано лежати на матраці',
                time: {
                    numbers: [30],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Еспандер',
                counter: {
                    numbers: [3],
                    unit_of_measure: {
                        shortName: 'шт'
                    }

                },
                time: {
                    numbers: [2, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Гімнастичні палиці',
                counter: {
                    numbers: [3],
                    unit_of_measure: {
                        shortName: 'шт'
                    }
                },
                time: {
                    numbers: [15],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Дитячий комплекс «Турбота»',
                time: {
                    numbers: [20],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Велотренажер',
                counter: {
                    numbers: [3],
                    unit_of_measure: {
                        shortName: 'шт'
                    }
                },
                time: {
                    numbers: [10],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Дитячий куток',
                time: {
                    numbers: [15],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Дитячий човник',
                time: {
                    numbers: [2, 4],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Дитяча шведська стінка',
                time: {
                    numbers: [15],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Шведська стінка (доросла)',
                time: {
                    numbers: [15],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Дитяча бігова доріжка',
                time: {
                    numbers: [5],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Дитячий велотренажер',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки гомілково – ступневих суглобів',
                time: {
                    numbers: [3, 5, 15],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Ходулі',
                time: {
                    numbers: [5, 10, 15],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки хребта',
                time: {
                    numbers: [2, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Човник (дорослий)',
                time: {
                    numbers: [2, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Ритм',
                time: {
                    numbers: [2, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат «Герца». Апарат для розробки гомілково – ступневих  суглобів від',
                time: {
                    numbers: [1, 10],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки верхніх кінцівок від',
                time: {
                    numbers: [1, 5],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для променево зап’ясткового суглобу від',
                time: {
                    numbers: [1, 5],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Горбунок від',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Бігова доріжка «Рахівниця»',
                time: {
                    numbers: [5, 10],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Темп',
                time: {
                    numbers: [2, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки кисті рук від',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для ротаційних рухів в променево – зап’ястковому суглобі від',
                time: {
                    numbers: [1, 5],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Бігунок',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки нижніх кінцівок',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Штанга',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Бруси',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Вправи Шишоніна',
                time: {
                    numbers: [20],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Фітболи',
                time: {
                    numbers: [20],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Гімнастичні вправи',
                time: {
                    numbers: [20],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Серцево-судинна №1',
                time: {
                    numbers: [900, 1500],
                    unit_of_measure: {
                        shortName: 'м'
                    },
                    limitation_of_units: {
                        titles: ['від', 'до']
                    }
                }
            },
            {
                title: 'Опорно-рухова група №2',
                time: {
                    numbers: [1800, 2500],
                    unit_of_measure: {
                        shortName: 'м'
                    },
                    limitation_of_units: {
                        titles: ['від', 'до']
                    }
                }
            },
            {
                title: 'Антицелюлітна №3',
                time: {
                    numbers: [2700, 3500],
                    unit_of_measure: {
                        shortName: 'м'
                    },
                    limitation_of_units: {
                        titles: ['від', 'до']
                    }
                }
            },
            {
                title: 'Сферичний тапчан',
                counter: {
                    numbers: [3],
                    unit_of_measure: {
                        shortName: 'шт'
                    }
                },
                time: {
                    numbers: [15],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Гімнастичні кільця для розробки плечових суглобів.',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },


            {
                title: 'Апарат для пресу',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки кульшових суглобів і внутрішньої частини бедра ',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки ліктьових та плечових суглобів та укріплення широкого і ромбовидного м’язів спини',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки колінних суглобів та укріплення передніх частин бедра',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки плечових суглобів та укріплення грудних м’язів',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки розробки ліктьових та плечових суглобів і укріплення  широких м’язів спини',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки плечових та ліктьових суглобів і укріплення м’язів спини',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Апарат для розробки колінних суглобів та укріплення м’язів задньої частини бедра',
                time: {
                    numbers: [1, 3],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },


            {
                title: 'Розробки Ручна',
                time: {
                    numbers: [20],
                    unit_of_measure: {
                        shortName: 'хв'
                    }
                }
            },
            {
                title: 'Розробка «загальна» верхніх та нижніх кінцівок (щодня, почергово – через день)',
            },
            {
                title: 'Розробка нижніх кінцівок (щодня, почергово – через день)'
            },
            {
                title: 'Розробка гомілково – ступневих суглобів (правого - лівого)'
            },
            {
                title: 'Розробка колінних суглобів (правого - лівого)'
            },
            {
                title: 'Розробка верхніх кінцівок (щодня, почергово – через день)'
            },
            {
                title: 'Розробка променево – зап’ясткових суглобів суглобів (правого - лівого)'
            },
            {
                title: 'Розробка ліктьових суглобів (правого - лівого)'
            },
            {
                title: 'Розробка плечових суглобів (правого - лівого)'
            },

        ]
    );
});