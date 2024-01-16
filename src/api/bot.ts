import { Bot } from 'grammy';
import { initializeBot } from '../config';
import { getHeroPhrase } from '../bot.service';

const token = process.env.BOT_TOKEN;

if (!token) throw new Error('BOT_TOKEN is unset');

const bot = new Bot(token);

// Handle the /start command.
bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'));
// Handle other messages.
bot.command('dota', (ctx) => ctx.reply(getHeroPhrase()));

export default initializeBot(bot);
