import { Bot } from 'grammy';
import { getHeroPhrase, responseTime } from '../app/bot.service';
import { initializeBot } from '../app/config';
import { greeting } from '../app/plugin';

const token = process.env.BOT_TOKEN;

if (!token) throw new Error('BOT_TOKEN is unset');

const bot = new Bot(token);
bot.use(responseTime);
bot.use(greeting());
// Handle the /start command.
bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'));
// Handle other messages.
bot.command('dota', (ctx) => ctx.reply(getHeroPhrase()));

export default initializeBot(bot);
