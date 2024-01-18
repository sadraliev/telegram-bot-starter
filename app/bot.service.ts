import { Context, NextFunction } from 'grammy';

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

export async function responseTime(
  ctx: Context,
  next: NextFunction
): Promise<void> {
  const before = Date.now();
  await next();
  const after = Date.now();
  console.log(`Response time: ${after - before} ms`);
}
