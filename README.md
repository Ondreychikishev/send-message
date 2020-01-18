# send-message

Пример, как можно отправить сообщение в телеграм в определенное время

Нажмите на кнопку ниже, чтобы запустить свою копию этого приложения

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https://github.com/Ondreychikishev/send-message)

## Как запустить на Heroku

Установите [git](https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git) и [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). Запустите терминал (или консоль) на своем компьютере и введите:
```
heroku login
heroku git:clone -a <your Heroku application name>
cd <your Heroku application name>
git remote add origin https://github.com/Ondreychikishev/send-message
git pull origin master
```
  
Когда вы будете готовы выложить свои изменения в Heroku, введите:
```
git add .
git commit -am "some comments"
git push
```
## Что необходимо настроить

Устанавливаем правило когда отправлять сообщение
```
rule.hour = 15;
```
Возможные параметры:
```
second (0-59)
minute (0-59)
hour (0-23)
date (1-31)
month (0-11)
year
dayOfWeek (0-6) 
```
Прописываем id google таблицы из которой берем chatId пользователей:

```
var resUser = request('GET', 'http://tools.aimylogic.com/api/googlesheet2json?sheet=1&id=your_id');
```

Прописываем токен бота с которого будет происходить рассылка:

```
var res = request('POST', 'https://api.telegram.org/bot<token>/sendMessage', {
           json: {"chat_id": userList[i].userid, "text": "Hello world!"},
           headers: {"Content-Type": "application/json"}
        });
```
