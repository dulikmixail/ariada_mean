const Ph_R_Allowed = require('../../models/all/ph_r_allowed');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Ph_R_Allowed,
    [
        {
            isAllowed: true,
            description: 'Протипоказання до призначення фізичної реабілітації  відсутні.'
        },
        {
            isAllowed: false,
            description: 'Полное отсутствие возможности общаться с медперсоналом.'
        },
        {
            isAllowed: false,
            description: 'Острые воспалительные заболевания, активная форма туберкулёза.'
        },
        {
            isAllowed: false,
            description: 'Некомпенсированные заболевания сердца, лёгких и других внутренних органов.'
        },
        {
            isAllowed: false,
            description: 'Ишемическая болезнь сердца с частыми приступами стенокардии покоя и отрицательной динамикой ЭКГ'
        },
        {
            isAllowed: false,
            description: 'Стойка артериальная гипертензия, которая не поддаётся медикаментозной коррекции.'
        },
        {
            isAllowed: false,
            description: 'Активная фаза ревматизма.'
        },
        {
            isAllowed: false,
            description: 'Некомпенсированный сахарным диабетом.'
        },
        {
            isAllowed: false,
            description: 'Проградиентного неврологические заболевания, если не остановленные процесс, который вызывает разрушение нервных структур.'
        },
        {
            isAllowed: false,
            description: 'Частые эпилептические припадки.'
        },
        {
            isAllowed: false,
            description: 'Выраженные психические нарушения.'
        },
        {
            isAllowed: false,
            description: 'Незаепителизовани ожоги.'
        },
        {
            isAllowed: false,
            description: 'Переломы, не срастаются.'
        },
        {
            isAllowed: false,
            description: 'Невправленные вывихи.'
        },
        {
            isAllowed: false,
            description: 'Нестабильный остеосинтез.'
        },
        {
            isAllowed: false,
            description: 'Резкое истощение, голодание.'
        },
    ]
);