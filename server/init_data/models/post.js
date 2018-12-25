const Post = require('../../models/all/post');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Post,
    [
        {title: 'Лікар'},
        {title: 'Реабілітолог'},
        {title: 'Фізичний терапевт'},
        {title: 'Фізіотерапевт'},
        {title: 'Діетолог'},
        {title: 'Бальнео терапевт'},
        {title: 'Медсестра'},
    ]
);