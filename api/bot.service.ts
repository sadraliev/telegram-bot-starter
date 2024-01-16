export const getHeroPhrase = () => {
  const phrases = [
    'Не рой другому яму, пусть сам роет',
    'не убигайте, мы ваши друзья',
    'Свежее мясо',
    'Пивка для рывка!',
    'Мушкет и жену не отдам никому',
    'Все не так плохо как вы думаете... все намного хуже',
    'Нам нужен мииир... Желательно весь!',
    'Магия принадлежит мне!',
  ];

  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
};
