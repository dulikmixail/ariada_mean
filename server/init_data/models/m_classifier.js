const M_Classifier = require('../../services/crud_services/m_classifier.service');
const M_Cl_Value = require('../../services/crud_services/m_cl_value.service');
const promiseHelper = require('../promise_helper');

module.exports = new Promise((resolve, reject) => {
    let oneToMany = function (valueOne, valuesMany, callback) {
        Promise.all(promiseHelper.getManyPromiseFindModel(
            M_Cl_Value,
            valuesMany
        )).then(values => {
            M_Classifier.create(
                {
                    title: valueOne.title,
                    values: promiseHelper.joinAllArrayResults(values),
                },
                callback
            );
        });
    };

    let createAll = function (arr) {
        let promisesArray = [];

        arr.forEach(item => {
            promisesArray.push(
                new Promise((resolve, reject) => {
                    oneToMany(
                        item[0],
                        item[1],
                        (err, res) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(res)
                            }
                        }
                    );
                })
            )
        });

        Promise.all(promisesArray).then(values => {
            if (values.length === 0) {
                reject("Error create M_Classifier")
            } else {
                resolve(values)
            }
        });
    };

    createAll(
        [
            [
                {
                    title: 'За призначенням'
                },
                [
                    {title: 'Лікувальний'},
                    {title: 'Гігієнічний'},
                    {title: 'Спортивний'},
                    {title: 'Косметичний'},
                ]
            ],
            [
                {
                    title: 'За засобами впливу'
                },
                [
                    {title: 'Мануальний масаж'},
                    {title: 'Апаратний масаж'},
                    {title: 'Гідромасаж'},
                    {title: 'Вібромасаж'},
                ]
            ],
            [
                {
                    title: 'Залежно від того, хто виконує масаж'
                },
                [
                    {title: 'Масажист'},
                    {title: 'Самомасаж'},
                ]
            ],
            [
                {
                    title: 'За видом'
                },
                [
                    {title: 'Класичний масаж'},
                    {title: 'Сегментарно-рефлекторний масаж'},
                ]
            ],
            [
                {
                    title: 'За впливом на організм'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Характер і форма захворювання'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Стан хворого'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Підвищується тонуу симпато-адреналової системи'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Понижується тонус симпато-адреналової системи'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Стать'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Вік'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Тілобудова, фізична сила'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Місце проживання'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Професія'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Характер'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Відношення до температури зовнішнього середовища'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Шкіра'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            // Шляхи досягнення збуджувального та заспокійливого впливу
            [
                {
                    title: 'Погладжування'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Розтирання'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Розминання'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Сила впливу'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Швидкість рухів'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Швидкість зміни сили впливу'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Амплітуда рухів'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Тривалість виконання окремих прийомів'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Частота рухів'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Ділянка впливу'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
            [
                {
                    title: 'Глибина впливу'
                },
                [
                    {title: 'Заспокійливий'},
                    {title: 'Збудлививий'},
                ]
            ],
        ]
    );
});

