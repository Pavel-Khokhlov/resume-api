const createError = require('http-errors');

// module.exports.AccessDeniedError = () => createError(400, 'Доступ запрещен');

// module.exports.IncorrectUserIdError = () => createError(400, 'Incorrect user`s Id');

// module.exports.IncorrectCardIdError = () => createError(400, 'Incorrect card`s Id');

module.exports.IncorrectEmailPasswordError = () => createError(401, 'Неверный e-mail или пароль');

module.exports.ForbiddenError = () => createError(403, 'Forbidden');

module.exports.PageNotFoundError = () => createError(404, 'Страница по указанному адресу не существует');

module.exports.MovieNotFoundError = () => createError(404, 'Фильм не найден');

module.exports.EmailExistsError = (email) => createError(409, `Этот адрес ${email} уже зарегистрирован`);

module.exports.FileNotFoundError = () => createError(500, 'Файл не найден!');
