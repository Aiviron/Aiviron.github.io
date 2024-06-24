from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo

bot = Bot('7352616110:AAHN9PfOV4Bub_0nK93H6f10TKTQ59tIFBQ')
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Открыть Web Сайт', web_app=WebAppInfo(url='https://aiviron.github.io/index.html')))
    await message.reply('Привет, Друг!', reply_markup=markup)

if __name__ == '__main__':
    executor.start_polling(dp)
