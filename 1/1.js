"use strict";

/*
Необходимо пользователя попросить ввести температуру в градусах Цельсия,
преобразовать введенное пользователем значение в соответствующую температуру
в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
"Цельсий: {C}, Фаренгейт: {F}"
Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Уточнение: пользователь всегда вводит корректное число.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

const temp = Number.parseFloat(prompt('Введите, пожалуйста, температуру в градусах по Цельсию'));
const far = (9 / 5) * temp + 32;
alert(`Цельсий: ${temp}, Фаренгейт: ${far}`);