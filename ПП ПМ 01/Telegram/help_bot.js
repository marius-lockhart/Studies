const TelegramBot = require('node-telegram-bot-api');
const token = '7050755395:AAHCzc0HOZo42GsqHLv_FFJtwZhcUlAWmk8';
const bot = new TelegramBot(token, {polling: true});

console.log('Bot has been started ...')

bot.onText(/\/start/, async (msg) => 
{
  console.log(msg);
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, `Приветствую, ${msg.from.first_name}! Узнать, что я умею можно по команде /menu`);
});

bot.onText(/\/menu/, async (msg) => 
{
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Список команд: \n/code - поиск товара по артиклу\n/name - поиск товара по наименованию\n/remainder - отчёт товаров по остаткам на складах');
});

bot.onText(/\/code/, async (msg) => 
{
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Скинь мне артикул товара');
});

bot.onText(/\/name/, async (msg) => 
{
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Скинь мне наименование товара');
});

bot.onText(/\/remainder/, async (msg) => 
{
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, 'Вот Excel файл с остатками на складе: ');
});

