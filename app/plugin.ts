import { Context, Middleware } from 'grammy';

const welcomeGIF =
  'CgACAgIAAxkBAAMIZamBTcyLpdUiDDL-6UbV5xAb_kYAAn9DAALoiklJCcSPZJcb1Rs0BA';

export function greeting<C extends Context>(): Middleware<C> {
  return async (ctx, next) => {
    console.info(ctx);
    const { message } = ctx;
    console.info('message', message);
    if (!message) {
      await next();
      return;
    }
    const { chat } = message;
    if (!message?.new_chat_members) {
      await next();
      return;
    }
    if (message?.new_chat_members?.length) {
      console.info('new_chat_members', message?.new_chat_members);
      const members = message?.new_chat_members;
      for (const member of members) {
        const { first_name } = member;
        await ctx.api.sendAnimation(chat.id, welcomeGIF, {
          caption: `Добро пожаловать под наш шатер, ${first_name}!`,
        });
      }
      await next();
      return;
    }
    console.info('before exit', ctx);
    await next();
  };
}
