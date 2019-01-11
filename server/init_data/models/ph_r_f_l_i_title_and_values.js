const Ph_R_F_L_I_Title_And_Values = require('../../services/crud_services/ph_r_f_l_i_title_and_values.service');
const Ph_R_F_L_I_Value = require('../../services/crud_services/ph_r_f_l_i_value.service');
const Ph_R_F_L_I_Title = require('../../services/crud_services/ph_r_f_l_i_title.service');
const promiseHelper = require('../promise_helper');

module.exports = new Promise((resolve, reject) => {
    let oneToMany = function (valueOne, valuesMany) {
        Promise
            .all(
                promiseHelper.getManyPromiseFindModel(Ph_R_F_L_I_Value, valuesMany)
            )
            .then(results => {
                Ph_R_F_L_I_Title.find(valueOne, (err, res) => {
                    if (err) {
                        throw (err)
                    } else {
                        Ph_R_F_L_I_Title_And_Values.create({
                            title: res[0],
                            values: promiseHelper.joinAllArrayResults(results)
                        }, (err, phRFLITitleAndValues) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(phRFLITitleAndValues)
                            }
                        })
                    }
                })
            });
    };

    oneToMany(
        {title: 'Тривалість'},
        [
            {title: 'не показаний'},
            {title: '6-15 хв'},
            {title: 'до 30 хв'},
            {title: 'до 50 хв'},
            {title: 'до 2 год'},
            {title: 'до 15  хв'},
            {title: '15  хв'},
            {title: '20 хв'},
            {title: '20-30 хв, з 2-4 паузами по 3 хв'},
            {title: '30 - 40 хв'},
            {title: '1 година'}
        ]
    );
    oneToMany(
        {title: 'Темп'},
        [
            {title: 'не показаний'},
            {title: '2 м/сек (140 кр/хв)'},
            {title: 'повільний'},
            {title: 'помірний'},
            {title: 'без обмежень'},
            {title: 'середній'},
            {title: 'середній, швидкий'},
            {title: '70-80 кр/хв з 2-3 паузами по 5 хв'},
            {title: '80-90 кр/хв з 2-3 паузами по 5 хв'},
            {title: '5-6 км/год 100-110 кр/хв'},
            {title: '5-6 км/год до 120 кр/хв'},
        ]
    );
    oneToMany(
        {title: 'Режим'},
        [
            {title: 'не показаний'},
            {title: 'інтервальний'},
        ]
    );
    oneToMany(
        {title: 'Види'},
        [
            {title: 'Кегельбан, крокет, кільцекид'},
            {title: 'наст. теніс, волейбол, бадмінтон'},
            {title: 'будь які'},
        ]
    );
    oneToMany(
        {title: 'Температура'},
        [
            {title: '19-20͒° С'},
            {title: 'не нижче 20° С'},
            {title: 'без обмежень'},
        ]
    );
    oneToMany(
        {title: 'Холодове навантаження'},
        [
            {title: 'Слабка (20-25 ккал)'},
            {title: 'Середня (30-35 ккал)'},
            {title: 'Сильна (40-45 ккал)'},
            {title: 'Сильна (40-50 ккал)'},
            {title: 'Сильна ( до 50 ккал)'}
        ]
    );
    oneToMany(
        {title: 'Середня експозиція'},
        [
            {title: 'Від 15-20 до 30-80 хв'},
            {title: 'Від 20 хв до 1,5 години'},
            {title: 'Від 1 до 2 година'},
            {title: 'Від 1 до 2,5 година'},
            {title: '1-3 хв'},
            {title: '5-10 хв'},
            {title: '10 - 20 хв'},
        ]
    );

    oneToMany(
        {title: 'Температура води'},
        [
            {title: '>20͒° С'},
            {title: '>19° С'},
            {title: '16-17° С'},
            {title: '15-17° С'},
        ]
    );
    oneToMany(
        {title: 'Темп плавання'},
        [
            {title: 'повільний'},
            {title: 'Повільний і середній'},
            {title: 'середній'},
            {title: 'Середній і швидкий'},
        ]
    );
    oneToMany(
        {title: 'Інтенсивність'},
        [
            {title: 'РЭЭТ=18-29 С 5-20 кал 1/4-1 біодоза'},
            {title: 'РЭЭТ=18-29 С 10-40 кал 1/2-2,5 біодоза'},
            {title: 'РЭЭТ=18-29 С 10-70 кал 1/2-3 біодоза'},
            {title: 'РЭЭТ=18-29 С 20-100 кал 2-5 біодоза'},
            {title: '50-60 кал'},
            {title: '60-80 кал'},
            {title: 'до 80 кал'},
            {title: 'до 100 кал'},
        ]
    );
    oneToMany(
        {title: 'Час доби'},
        [
            {title: 'Ранок'},
            {title: 'Окрім 12-15 година'},
        ]
    );
    oneToMany(
        {title: 'Метод проведення'},
        [
            {title: 'Індивідуальний'},
            {title: 'Індивідуальний,  малогруповий'},
            {title: 'груповий'},
        ]
    );
    oneToMany(
        {title: 'Місце проведення'},
        [
            {title: 'Палата (на ліжку)'},
            {title: 'Палата'},
            {title: 'Коридор, Холл'},
        ]
    );
    oneToMany(
        {title: 'Час проведення'},
        [
            {title: 'Ранок'},
        ]
    );
    oneToMany(
        {title: 'Вихідне положення'},
        [
            {title: 'лежачи'},
            {title: 'лежачи, сидячи'},
            {title: 'лежачи, сидячи, стоячи'},
        ]
    );
    oneToMany(
        {title: 'Кількість вправ'},
        [
            {title: '4'},
            {title: '6'},
            {title: '8'},
            {title: '12'},
            {title: '16'},
            {title: '24'},
        ]
    );

    oneToMany(
        {title: 'Кількість повторень вправ'},
        [
            {title: '4-6'},
            {title: '6'},
            {title: '8'},
        ]
    );
    oneToMany(
        {title: 'Складність рухів'},
        [
            {title: 'В одній площині.Дрібні суглоби та м’язові групи'},
            {title: 'В одній площині послідовно.Дрібні та середні суглоби та м’язові групи'},
            {title: 'У всіх площинах послідовно. Усі суглоби та м’язові групи.Вправи на координацію рухів'},
            {title: 'В одній-двох площинах послідовно.Середні суглоби та м’язові групи'},
        ]
    );
    oneToMany(
        {title: 'Контроль'},
        [
            {title: 'Самоконтроль. Медична сестра'},
        ]
    );
    oneToMany(
        {title: 'Співвідношення загально-зміцнювальних та дихальних вправ'},
        [
            {title: '2:1'},
            {title: '1:1'},
        ]
    );
    oneToMany(
        {title: 'Ступінь силового зусилля'},
        [
            {title: 'М’язи розслаблені'},
            {title: 'Без силового зусилля'},
            {title: 'Без силового зусилля, у разі необхідності застосування засобів полегшення навантаження'},
            {title: 'Помірні силові зусилля. При захворюваннях ССС та дихальної системи натужування не показані'},

        ]
    );
    oneToMany(
        {title: 'Максимально допустиме зростання ЧСС'},
        [
            {title: 'до +24(до 30%)'},
            {title: 'до +4(до 5%)'},
            {title: 'до +8(до 10%)'},
            {title: 'до +12(до 15%)'},
            {title: 'до +16(до 20%)'},
            {title: 'до +24(до 30%)'},
        ]
    );
    oneToMany(
        {title: 'Амплітуда'},
        [
            {title: 'обмежена'},
            {title: 'середня'},
            {title: 'повна'},
        ]
    );
    oneToMany(
        {title: 'Моторна щільність'},
        [
            {title: '35 - 45 %'},
            {title: '45 - 50 %'},
            {title: '50 - 60 %'},
        ]
    );
    oneToMany(
        {title: 'Співвідношення загально-зміцнювальних до спеціальних вправ'},
        [
            {title: '3:1'},
            {title: '2:1'},
            {title: '1:1'},
        ]
    );
    oneToMany(
        {title: 'Види вправ'},
        [
            {title: 'Дихальні'},
            {title: 'Загальнофізичні до 16 вправ'},
            {title: 'Загальнофізичні більше 16 вправ'},
            {title: 'Загальнофізичні - індивідуальні'},
            {title: 'Дихальні та для дрібних м’язових груп'},
            {title: 'Загально фізичні, комплекс «Здоровя»'},
            {title: 'Будь-які, включаючи стрибки, біг, тренажери'},
        ]
    );
    oneToMany(
        {title: 'Відстань'},
        [
            {title: '2-3 км'},
            {title: '5 км'},
            {title: '12 км'},
            {title: '25км'},
            {title: 'до 3 км'},
            {title: 'до 5 км'},
            {title: 'до 12 км'},
            {title: 'до 25 км'},
            {title: 'не показаний'},
            {title: 'до 25 - 30 км'},
            {title: 'до 75 - 100 км'},
        ]
    );
    oneToMany(
        {title: 'Швидкість'},
        [
            {title: '3-5 км/год (80-90 кр/хв)'},
            {title: '4-5 км/год (80-90 кр/хв)'},
            {title: '5-6 км/год (100 - 110  кр/хв)'},
            {title: '5-6 км/год  до (120  кр/хв)'},
        ]
    );
    oneToMany(
        {title: 'Характер місцевості'},
        [
            {title: 'Рівна'},
            {title: 'Пересічна'},
        ]
    );
    oneToMany(
        {title: 'Кут підйому'},
        [
            {title: 'до 5'},
            {title: '5 - 10'},
            {title: 'до 15'},
            {title: 'більше 15'},
        ]
    );
    oneToMany(
        {title: 'Характер, навантаження'},
        [
            {title: 'Через кожні 4 дні збільшення'},
            {title: 'Поступовий'},
        ]
    );
    oneToMany(
        {title: 'Частота'},
        [
            {title: 'не показаний'},
            {title: '1-2 раз/тиждень'},
            {title: '1-3 денні походи'},
            {title: '3 денні походи'},
        ]
    );
    oneToMany(
        {title: 'Висота'},
        [
            {title: 'не показаний'},
            {title: 'до 600 - 800 м'},
            {title: 'до 2000 м'},
        ]
    );
    oneToMany(
        {title: 'Енерговитрати'},
        [
            {title: '100 ккал'},
            {title: '150 - 200 ккал'},
            {title: '260 - 300 ккал'},
            {title: '301 - 400 ккал'},
        ]
    );
    oneToMany(
        {title: 'Належне максимальне споживання O2'},
        [
            {title: '25%'},
            {title: '26 - 39 %'},
            {title: '40 - 59 %'},
            {title: '60 -75 %'},
        ]
    );
    oneToMany(
        {title: 'Енергетичний рівень'},
        [
            {title: '2,5 ккал/хв'},
            {title: '2,5 4 ккал/хв'},
            {title: '4,1 - 5,0 ккал/хв'},
            {title: '6,0 - 7,0 ккал/хв'},
        ]
    );
    oneToMany(
        {title: 'Граничний вік'},
        [
            {title: 'Чоловіки - 65р., Жінки - 60р'},
            {title: 'Чоловіки - 75 р., Жінки - 70р'},
            {title: 'Чоловіки - 55р., Жінки - 50р'},
            {title: 'Чоловіки - 50 р., Жінки - 45р'},
        ]
    );
});
