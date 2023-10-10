module.exports = {
  extends: ['@commitlint/config-conventional'],
  messages: {
    'type-enum': 'Неверный тип коммита. Допустимые типы: feat, fix, docs, ...',
    'type-empty': 'Тип коммита не может быть пустым',
  },
};
