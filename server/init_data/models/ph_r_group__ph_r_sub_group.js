const Ph_R_Sub_Group = require('../../services/crud_services/ph_r_sub_group.service');
const Ph_R_Group = require('../../services/crud_services/ph_r_group.service');

module.exports = new Promise((resolve, reject) => {
    Promise.all([
        new Promise((resolve, reject) => {
            Ph_R_Sub_Group.create(
                [
                    {title: 'ТГ. Порушення мінеральної щільності кісткової тканини (МЩКТ), остеопороз'},
                    {title: 'ТГ. Перенесений гострий первинний або повторний інфаркт міокарда'},
                    {title: 'ТГ. Ішемічна хвороба серця'},
                    {title: 'ТГ. Артеріальна гіпертензія (гіпертонічна хвороба)'},
                    {title: 'ТГ. Пневмонії'},
                    {title: 'ТГ. Бронхіти'},
                    {title: 'ТГ. Бронхіальна астма'},
                    {title: 'ТГ. Хронічні неспецифічні захворювання легень'},
                    {title: 'ТГ. Захворювання шлунково-кишкового тракту у т.ч. виразкова хвороба шлунка, і 12 палої кишки'},
                    {title: 'ТГ. Професійні захворювання'},
                    {title: 'ТГ. Захворювання суглобів'}
                ],
                (err, res) => {
                    if (err) {
                        throw err;
                    } else {
                        Ph_R_Group.create(
                            {
                                title: 'ТГ-терапевтична група',
                                subGroup: res
                            },
                            (err, phRGroup) => {
                                if (err) {
                                    reject(err)
                                } else {
                                    resolve(phRGroup)
                                }
                            }
                        );
                    }
                }
            );
        }),
        new Promise((resolve, reject) => {
            Ph_R_Sub_Group.create(
                [
                    {title: 'НГ. Стан після перенесених черепно-мозкових травм'},
                    {title: 'НГ. Наслідки гострих порушень мозкового кровообігу, геморагічного інсульту'},
                    {title: 'НГ. Цереброваскулярні порушення разом з ішемічною хворобою серця'},
                    {title: 'НГ. Синдром вегетативної дистонії невротичного генезу'},
                    {title: 'НГ. Наслідки операцій  на периферійних нервах'},
                    {title: 'НГ. Периферичні невропатії'},
                    {title: 'НГ. Вертеброгенні радикулярні синдроми'},
                    {title: 'НГ. Вертеброгенні рефлекторні синдроми'},
                ],
                (err, res) => {
                    if (err) {
                        throw err;
                    } else {
                        Ph_R_Group.create(
                            {
                                title: 'НГ-неврологічна',
                                subGroup: res
                            },
                            (err, phRGroup) => {
                                if (err) {
                                    reject(err)
                                } else {
                                    resolve(phRGroup)
                                }
                            }
                        );
                    }
                }
            );
        }),
        new Promise((resolve, reject) => {
            Ph_R_Sub_Group.create(
                [
                    {title: 'ОТіЧГ Переломи хребта'},
                    {title: 'ОТіЧГ Переломи кісток тазу'},
                    {title: 'ОТіЧГ Переломи кісток верхніх та нижніх'},
                    {title: 'ОТіЧГ Ушкодження зв’язок та сухожиль'},
                    {title: 'ОТіЧГ Травми суглобів'},
                    {title: 'ОТіЧГ Наслідки ортопедичних оперативних втручань'},
                    {title: 'ОТіЧГ Множинні і сполучні травматичні пошкодження'},
                    {title: 'ОТіЧГ Наслідки запальних хвороб кишок'},
                    {title: 'ОТіЧГ Наслідки опіків і обморожень'},
                    {title: 'ОТіЧГ Хворі з дефектами кінцівок'},
                    {title: 'ОТіЧГ Хворі з наслідками синдрому здавлення тканин'},
                    {title: 'ОТіЧГ Облітеруючі захворювання артерій нижніх кінцівок'},
                    {title: 'ОТіЧГ Хворі у після операційному періоді'},
                    {title: 'ОТіЧГ Виражені рубцеві контрактури у суглобах нижніх і верхніх кінцівок'},
                    {title: 'ОТіЧГ Ревматоїдні артрити'},
                    {title: 'ОТіЧГ Остеоартроз колінних суглобів, контрактура після гіпсової імобілізації, посттравматичні остеоартроз'},
                    {title: 'ОТіЧГ  Коксартроз. Ревматоїдний артрит (нижні кінцівки)'},
                    {title: 'ОТіЧГ  Остеоартроз гомілково-ступневих суглобів'},
                    {title: 'ОТіЧГ  Остеоартроз дрібних суглобів кистей, Ревматоїдний артрит (верхні кінцівки)'},
                    {title: 'ОТіЧГ  Досопатія шийного відділу хребта'},
                    {title: 'ОТіЧГ  Досопатія грудного відділу хребта'},
                    {title: 'ОТіЧГ  Досопатія грудного відділу хребта'},
                ],
                (err, res) => {
                    if (err) {
                        throw err;
                    } else {
                        Ph_R_Group.create(
                            {
                                title: 'ОТіХГ-Ортопедо-травматологічна і хірургічна',
                                subGroup: res
                            },
                            (err, phRGroup) => {
                                if (err) {
                                    reject(err)
                                } else {
                                    resolve(phRGroup)
                                }
                            }
                        );
                    }
                }
            );
        })
    ]).then(values => {
        if (values.length === 0) {
            reject("Error create Ph_R_Group")
        } else {
            resolve(values)
        }
    })
});
