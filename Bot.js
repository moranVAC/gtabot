const {VK, Keyboard} = require('vk-io');
const vk = new VK();
const {updates} = vk;
const fs = require("fs");
const admins = [1];
const vip = [1];
const acc = require("./base/acc.json");
const uid = require("./base/uid.json");
const log = require("./base/log.json");
const frac = require("./base/frac.json");
const config = require("./setting/config.json")  
const ferm = require("./base/ferm.json");
updates.use(async (context, next) => {
    if (context.is("message") && context.isOutbox)
        return;
 
    try {
        await next();
    } catch (err) { console.error(err) }
});
 
 
updates.hear("/ping", async (context) => {
    await context.send("pong!");
});

vk.setOptions({
    token: '24a2da6c06b6e226542b1859989fb7ad63ef520f2c50b7d51c8b59da729e584a32e50373fcc41cb1a0113', // токен группы
    apiMode: 'parallel',
	pollingGroupId: 178881475// 1 замени на id группы 







});


vk.updates.use(async (message, next) => {  


	

    if (message.is("message") && message.isOutbox)
        return; 
    message.user = message.senderId;
    message.text = message.payload.text;  




 
    if(!uid[message.user]){
	 	acc.number += 1;
		let numm = acc.number;
		uid[message.user] = {
			id: numm
		}


 		let id = user_id(message.user); 
 		if(message.text){
if(!id[message.chatId]){
id[message.chatId] = {
i: true
}
}
}
 		 
			message.send(`🎉 ➾ *id${message.user}, вы успешно зарегистрировались. \n📝 ➾ "Помощь" - список команд.\n 🆘 Если у вас возник вопрос задайте его администрации в "Репорт" \n 📝 ➾ Чтобы не пропустить обновление проекта вы должны быть подписаны на нашу группы: https://vk.me/join/AJQ1d8qQTQ3tzcXn1veG7oc8 ${config.group_url}`)
	 	   
		
		acc.users[numm] = {
			balance: 100000,
			level: 0, 
			adm_time: 0,
			bitcoin: 0, 
			bonus: false,
			
			bloks: { 
				cases: false,
				bonus: null,
				random_game: false,
				giverub: false,
				a_case: false,
				pay: false,
				frac: false,
				gun_case: false
			}, 
			ferm: {
				id: false,
				zp: 0
			},
			exs: 0,
			exsup: 50,
			lvl: 1,
			number: numm,
			id: message.user,
			nick: true,
			game: {
				binlose: 0,
				binwin: 0,
				binstop: false,
				kazlose: 0,
				kazwin: 0,
				rand_lose: 0,
				rand_win: 0,
				stavka_win: 0,
				stavka_lose: 0,
				win: 45,
				strela_loose: 0,
				strela_win: 0

			},
			msg: { 
				messages: 0, 
				last_msg: "" 
			},  


			bizs: {
				one_biz: false,
				one: {
					count: false,
					balance: 0,
					id: false,
					name: false,
					people: 0,
					uplvl: 0,
					zp: 0
					},
				two_biz: false,
				two: {
					count: false,
					balance: 0,
					id: false,
					name: false,
					people: 0,
					uplvl: 0,
					zp: 0
					},
			},
			cars: false,
			report: false,
			reys: false,
			pk: false,
			strim: false,
			aircraft: false,
			helicopter: false,
			house: false,
			housep: 0,
			pit: false,
			bank: 0,
			proc: 0,
			lodka: false,
			phone: false,
			tag: "Новичок", 
			brak: false,
			ref: false,
			ainfo: {
				all_ans: 0,
				ans: 0, 
				good_ans: 0,
				bad_ans: 0,
				vig: 0
			}, 
			safe: {
				status: false,
				key: false
			},
			admin: {
				block_pay: false,
				block_give: false,
				block_rep: false
			}, 
			rep: {
				status: false,
				id: false
			},
			ban: false, 
			mute: false,
			warn: 0,
			warn_p: [],
			credit: 0,
			procent: 0,
			job: { 
				name: false, 
				lvl: 0, 
				stop: false, 
				count: 0 
			}, 
			global_exs: 0,
			autozp: false,
			autobiz: false,
			frac_name: false,
			duel: false,
			duel_summ: false,
			nachal: false,
			uron: 0,
			gun_name: false,
			block_game: true,
			prefix: `Игрок #${numm}`,
			lvl_v: 1,
			rtime: `${time()} | ${data()}` 
			}
		////////////////////  
vk.api.call('users.get', {
				user_ids: message.user,
				fields: "photo_max,city,verified,status,domain,photo_id,sex,last_seen"
			}).then(res => {
				let user = res[0]; 
				acc.users[user_id(message.user)].prefix = `${user.first_name} ${user.last_name}`;
			}).catch((error) => {console.log('err[prefix]'); }); 
	}
	let id = user_id(message.user);

 


	if(message.text){ 
		acc.msg += 1;
		if(!acc.users[user_id(message.user)]) return;
		acc.users[id].msg.messages += 1;
		acc.users[id].msg.last_msg = `${time()} | ${data()}`; 
		if(acc.users[id].mute == true) return; 
	}
  	
	if(acc.users[id].ban != false) return;

    try {
        await next();
    } catch (err) { console.error(err) }
});





 

 	 vk.updates.hear(/^(?:правила)/i, (message) => { 
 		 return message.send(`
		🔥Актуальный список правил бота VINE🔥 

⚠» ЗАПРЕЩЕНО:
🔹» 1.1. Оскорбление любого пользователя.
🚫» Наказание: Блокировка аккаунта.
🔹» 1.2. Обман администрации любым способом.
🚫» Наказание: Блокировка аккаунта.
🔹» 1.3. Выпрашивание у РАЗРАБОТЧИКОВ валюту/донат/подписки.
🚫» Наказание: Временная блокировка.
🔹» 1.4. Бессмысленные сообщения в "репорт".
🚫» Наказание: Временная блокировка.
🔹» 1.5. Часто использовать однотипные команды с целью нагубить боту.
🚫» Наказание: Временная блокировка аккаунта.
🔹» 1.6. Выдавать себя за модератора/администратора.
🚫» Наказание: Блокировка аккаунта.
🔹» 1.7. Продажа игровой валюты.
🚫» Наказание: Блокировка аккаунта.
🔹» 1.8. Использовать баги не сообщая о них.
🔹➣ Разработчику
🚫» Наказание: Временная(вечная) блокировка.
🔹» 1.9. Использоват нецензурные выражения в никах/названиях фракций.
🚫» Наказание: в 1 раз - предупреждение. 2-й раз - бан.

🔹» 1.10. Контент 18+ запрещен (порно, эротика и т.д.) 
🔹» 1.12. Менять название беседы запрещено. 
🔹» 1.13. Добавлять других  ботов запрещено.
🔹» 1.14. Упоминание других ботов запрещено.
🔹» 1.15. Добавление человека которого только что кикнули запрещено. 
🔹» 1.16. Использование мульти-аккаунтов. 
🔹» 1.17. Оскорбление/обман администрации,проекта. 
🔹» 1.18. Накрутка валюты с других аккаунтов(фейков).
🚫» Наказание: Блокировка аккаунта.

🔹» 1.19. Реклама/пиар/выпрашивание лайков.
🚫» Наказание: Первый раз - кик из бесед, последующие разы - блокировка навсегда.
 

⚠» В ЛС группы ЗАПРЕЩЕНО: 
🔹» 2.1. Выпрашивание валюты/доната/подписки.
🔹» 2.2. Бессмысленные сообщения в "репорт".
🔹» 2.3. Использовать баги не сообщая о них разрабочикам.
🔹» 2.4. Использоват нецензурные выражения в никах/названиях клана.
🔹» 2.5. Часто использовать однотипные команды с целью нагубить боту.
🔹» 2.6. Контент 18+ запрещен (порно, эротика и т.д.) 
⚠» Наказание: Временная блокировка.

🔹» Администрация в праве не разглашать причину блокировки.

⛔» Незнание правил не освобождает от ответственности.

 		 	`);
 	});

 	vk.updates.hear(/^(?:аправила)/i,  (message) => { 
 		 return message.send(`
 		 	 🔻 ➾ Актуальный список правил '' бота « 🔻 
			📝 ➾ для АДМИНИСТРАТОРОВ И VIP « 📝 

			🔸 ➾ 1. Хамство в ответе на репорт. [Выговор] 
			🔸 ➾ 2. Неадекватные ответы на репорт. ['Молчанка' 120мин] 
			🔸 ➾ 3. Накрутка ответов на репорт. [Выговор] 
			🔸 ➾ 4. Блат/накрутка другим игрокам каких-любо игровых средств. [Бан] 
			🔸 ➾ 5. Обман спец.администрации. [Бан] 
			🔸 ➾ 6. Выдача наказания без определённой причины. [Выговор] 
			🔸 ➾ 7. Оскорбление игроков в любой беседе/чате. [Выговор] 
			🔸 ➾ 8. Слив какой-либо административной информации. [Бан] 
			🔸 ➾ 9. Разжигание любых конфликтов между игроками. ['Молчанка' 240мин]
			🔸 ➾ 10. Выдача/передача администраторами валюты. [Бан]

 		 	`);
 	});
 	vk.updates.hear(/^(?:Магазин)/i,  (message) => { 
 		return message.send(`
   💰Магазин💰 
🚘 ➾ Машины 
✈ ➾ Самолеты 
🚁 ➾ Вертолеты 
🏢 ➾ Бизнесы 
🚤 ➾ Лодка 
🎄 ➾ Дома 
&#128241;➾Телефоны
🐥 ➾ Питомцы`);
 	});





 
 	vk.updates.hear(/^(?:Панель)$/i, (message) => {
 		return message.send(`
 	- - Приватная Информация - -
			* Слив данной информации - наказуем *
			~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

			Настройки:
			x2 баланс: ${i.bonus_balance}
			х2 опыт: ${i.bonus_exs}
			(bonus [balance/exs] [0/1])

			Промокоды:
			Выдача: ${i.promo.balance}$
			Активаций: ${i.promo.activ}
			(promo [balance/activ] [count])

			Сообщения:
			Время обновления: ${i.antiflood_time}

			Full-Dostup:
 			`);
 	});

 	vk.updates.hear(/^(?:игры)$/i, (message) => {
 		return message.send(`
 	⛔ ➾ Лог - инфо о последних играх.

 	👑 ➾ Топ- топ по рейтингу.

 	👑 ➾ Рейтинг [count] - покупка👑
 	👑 ➾ Продать рейтинг [count] - продажа👑


    &#127808; ➾ Казино <ставка> - казино.
    &#128640; ➾ Азино <ставка> - казино.
    &#128163; ➾Бин <вверх/вниз> <ставка> - акции.
    &#128640; ➾ Баланс - ваш баланс.
    &#128163; ➾ Ставка <выше/ниже> <ставка> - ставки.
    &#128640; ➾ [Выше(500000-999999)/ниже(1-499999)]

    💻 ➾ Профиль - ваш профиль.
    🎰 ➾ Игропрофиль - ваш игровой профиль.

    &#128280; ➾ Лотерея - на деньги.
    
    🔫 ➾ Крутить - открыть оружейный кейс за 100к.
	🔫 ➾ Стрела [id] [ставка] - назначить стрелу.
	&#9745; ➾ Принять - принять вызов.
	&#10060; ➾ Сдаться - отказ от стрелы.
 			`);
 	});


	vk.updates.hear(/^(?:помощь|начать)$/i,  (message) => { 
	return message.send(`

	
   🔥 Команды бота» 🔥

♨ « Админка - Команды администратора.

🚸 » Репорт - Отправить вопрос/жалобу/предложение. 

   🎉Развлекательные:

ℹ» Инфа [фраза]
🔮 Шар [фраза]
❓» Кто [фраза]
&#129302; » Бот - общая информация. 
&#128100; » Профиль - ваш профиль.
💰» Передать [ID] [СУММА] - передача валюты.
🌐» Бпередать [ID] [СУММА] - передача биткоинов. 
🎡 » Nick <name> - сменить свой ник в чате.

🔥 Полезное:

🛍 » Магазин
📊 » Курс - курс обмена биткоинов.

🏦 » Кбанк (сумма) - положить деньги на конкурсный счет


🔱 » Рейтинг [count] - покупка🔱
🔱 » Продать рейтинг [count] - продажа🔱
&#9851; » Фермы -Майнинг фермы
📛 » Правила - актуальные правила Бота.
👑 » Донат - Донат магазин.

🕹 » Игры - список игр.
🏮 » бонус - бонус.

💡 Разное:

📜 » Фракции - список фракций
📜 » Фракция - информация

🏦 » Банк

🤵 » Свадьба [ID] - пожениться.
💔 » Развод - развестись.

🌋 » Работы 

🍪 » Беседы - ссылки на наши беседы.
🍘 » Состав - наши администраторы.
🍙 » СС - Укоротить ссылку
										

		`);
});
		



   







	/// бонусы дл админов 




	
 
 
vk.updates.hear(/^(?:админка)$/i,  (message) => { 
		let user = acc.users[user_id(message.user)];

		if(user.level < 1) return message.send(`
			👑 ➾ VIP-Команды « 👑
 			✅ ➾ аправила - важно знать!   
			✅ ➾ стата - Ваша статистика.
			✅ ➾ get [ID] - проверить игрока.

			✅ ➾ mute [ID] [TIME] - Выдать 'молчанку' игроку.
			✅ ➾ unmute [ID] - Снять 'Молчанку'.  

			✅ ➾ setmoney [COUNT] - выдать себе валюту.
 			⚠ ➾ [COUNT] - от 1 до 500000.

 			☑ ➾ - - Бонусы - - « ☑
 			💴 ➾ Лимит на передачу: 7.000.000$
			⛔⛔ Цена: 50 рублей ⛔⛔

			- - - - - - - - - - - -
			👑 ➾ MODER-Команды « 👑
			⛔ ➾ Все команды VIP'a 

			✅ ➾ warn [ID] - выдать предупреждение. 
			✅ ➾ setmoney [COUNT] - выдать себе валюту.
 			⚠ ➾ [COUNT] - от 1 до 3000000.

			☑ ➾ - - Бонусы - - « ☑
 			💴 ➾ Лимит на передачу: 10.000.000$

			⛔⛔ Цена: 200 рублей ⛔⛔

			- - - - - - - - - - - -
			👑 ➾ ADMIN-Команды « 👑
			⛔ ➾ Все команды MODER'a   

			✅ ➾ ban [ID] - заблокировать навсегда.
			✅ ➾ unban [ID] - разблокировать игрока.  
			✅ ➾ setnick [ID] [NAME] - изменить ник.
			✅ ➾ setmoney [COUNT] - выдать себе валюту.
 			⚠ ➾ [COUNT] - от 1 до 10000000.
 			✅ ➾ Кикнуть [ССЫЛКА_ВК] - кикнуть из беседы.
 			⚠ ➾ В не офф.беседах кикает, если статус группы: 'Администратор'

			☑ ➾ - - Бонусы - - « ☑
 			💴 ➾ Лимит на передачу: 20.000.000$
			⛔ ➾ Нет лимита на ставки в играх!

			⛔⛔ Цена: 400 рублей ⛔⛔

			- - - - - - - - - - - -
			👑 ➾ Спец-Администратор-Команды « 👑
			✅ ➾ Все команды ADMIN'a

			✅ ➾ setmoney [COUNT] - выдать себе валюту.
 			⚠ ➾ [COUNT] - от 1 до 80000000.
			✅ ➾ vig ID ПРИЧИНА - выдать админ-выговор
			✅ ➾ unvig ID - снять все выговоры.
 			💴 ➾ Лимит на передачу: 20.000.000.
			⛔ ➾ Нет лимита на ставки в играх!

 			⛔⛔ Цена: 600 рублей ⛔⛔
			`);
		if(user.level == 1){
			return message.send(`
				☑ ➾ VIP-Панель « ☑
				✅ ➾ аправила - важно знать!   
				✅ ➾ стата - Ваша статистика.
				✅ ➾ get [ID] - проверить игрока.

				✅ ➾ mute [ID] [TIME] - Выдать 'молчанку' игроку.
				✅ ➾ unmute [ID] - Снять 'Молчанку'.  

				✅ ➾ setmoney [COUNT] - выдать себе валюту.
 				⚠ ➾ [COUNT] - от 1 до 500000.

 				☑ ➾ - - Бонусы - - « ☑
 				💴 ➾ Лимит на передачу: 7.000.000$
				
  
				`);
		} 
		if(user.level == 2){

			return message.send(`
				☑ ➾ MODER-Панель « ☑
				✅ ➾ аправила - важно знать!   
				✅ ➾ warn [ID] - выдать предупреждение. 
				✅ ➾ mute [ID] [TIME] - Выдать 'молчанку' игроку.
				✅ ➾ unmute [ID] - Снять 'Молчанку'.  

				✅ ➾ ответ [ID] [TEXT] - ответить на репорт.
				✅ ➾ стата - Ваша статистика.  
				✅ ➾ get [ID] - проверить игрока.

				✅ ➾ setmoney [COUNT] - выдать себе валюту.
 				⚠ ➾ [COUNT] - от 1 до 3000000.

				☑ ➾ - - Бонусы - - « ☑
 				💴 ➾ Лимит на передачу: 10.000.000$
				
				`);
		}
		if(user.level == 3){

		return message.send(`
				☑ ➾ ADMIN-Панель « ☑
				✅ ➾ аправила - важно знать! 
				✅ ➾ ban [ID] - заблокировать навсегда.
				✅ ➾ unban [ID] - разблокировать игрока.
				✅ ➾ warn [ID] - выдать предупреждение. 
				✅ ➾ mute [ID] [TIME] - Выдать 'молчанку' игроку.
				✅ ➾ unmute [ID] - Снять 'Молчанку'.  
				✅ ➾ setnick [ID] [NAME] - изменить ник.

				✅ ➾ ответ [ID] [TEXT] - ответить на репорт.
				✅ ➾ стата - Ваша статистика.  
				✅ ➾ get [ID] - проверить игрока.

				✅ ➾ setmoney [COUNT] - выдать себе валюту.
 				⚠ ➾ [COUNT] - от 1 до 20000000.

 				✅ ➾ Кикнуть [ССЫЛКА_ВК] - кикнуть из беседы.
 				⚠ ➾ В не офф.беседах кикает, если статус группы: 'Администратор'

				☑ ➾ - - Бонусы - - « ☑
				⛔ ➾ Нет лимита на ставки в играх!
 				💴 ➾ Лимит на передачу: 10.000.000$
				
				`);
		}
		if(user.level > 3){

			return message.send(`
				☑ ➾ Админ-Панель « ☑
				✅ ➾ аправила - важно знать! 
				✅ ➾ ban [ID] - заблокировать навсегда.
				✅ ➾ unban [ID] - разблокировать игрока. 
				✅ ➾ warn [ID] - выдать предупреждение.
				✅ ➾ unwarn [ID] - снять все предупреждения.
				✅ ➾ mute [ID] [TIME] - Выдать 'молчанку' игроку.
				✅ ➾ unmute [ID] - Снять 'Молчанку'.  

				✅ ➾ setnick [ID] [NAME] - изменить ник.
				✅ ➾ ответ [ID] [TEXT] - ответить на репорт.
				✅ ➾ стата - Ваша статистика.

				✅ ➾ get [ID] - проверить игрока. 

				✅ ➾ setmoney [COUNT] - выдать себе валюту.
 				⚠ ➾ [COUNT] - от 1 до 80000000.
				- - - - - - - - - - - 

				✅ ➾ Кикнуть [ССЫЛКА_ВК] - кикнуть из беседы.
 				⚠ ➾ В не офф.беседах кикает, если статус группы: 'Администратор'

				✅ ➾ vig ID ПРИЧИНА - выдать админ-выговор
				✅ ➾ unvig ID - снять все выговоры.

				☑ ➾ - - Бонусы - - « ☑
				⛔ ➾ Нет лимита на ставки в играх!
				💴 ➾ Лимит на передачу: 20000000.
				
				`);
		}
	});
  
vk.updates.hear(/^(?:кикнуть)(\s?https\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	if(message.$from.type == 'user') return message.send(`⚠ ➾ Команда работает только в беседах!`);
 	if(user.level < 3) return message.send(`⚠ ➾ Вы не Администратор`);

	if(message.$match[4]) { 
		var domain = message.$match[4].split(" "); 
		vk.api.call("utils.resolveScreenName", { 
		screen_name: message.$match[4] 
	}).then((res) => { 
			if(res.object_id == 232357251) return message.reply('⚠ ➾ Отказ'); 

			if(acc.users[user_id(res.object_id)]){
				if(acc.users[user_id(res.object_id)].level > 2) return message.send(`⚠ ➾ Нельзя кикнуть этого игрока!`);
			} 

			vk.api.call("messages.removeChatUser", {chat_id: message.chatId, user_id: res.object_id })
			.catch((error) => {return message.send(`⚠ ➾ Ошибка. Возможные причины:\n⚠ ➾ В данной беседе группа не Администратор\n⚠ ➾ Такого игрока нет в беседе.`);
			});  
			return  
		})  
	}else{
		if(!message.$match[3]) return message.reply("⚠ ➾ ID не указан, либо указан неверно."); 
		if(message.$match[3] == 336041508) return message.reply('⚠ ➾ Отказ'); 

		if(acc.users[user_id(message.$match[3])]){
			if(acc.users[user_id(message.$match[3])].level > 2) return message.send(`⚠ ➾Нельзя кикнуть этого игрока!`);
		}

		vk.api.call("messages.removeChatUser", { chat_id: message.chatId, user_id: message.$match[3] }).
		catch((error) => {return message.send(`⚠ ➾ Ошибка. Возможные причины:\n⚠ ➾ В данной беседе группа не Администратор\n⚠ ➾ Такого игрока нет в беседе.`);}); 

		return  				
	} 
});

vk.updates.hear(/^(?:nick)\s?([^]+)?/i,  (message) => { 
	let user = acc.users[user_id(message.user)]; 
	let zaprets1 = message.$match[1].toLowerCase();
	var zapret = /(&#4448;|вк бо т |вкботру|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|порно|botvk|ботвк|vkbot|кбот|bot vk|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
	if (zapret.test(zaprets1) == true) { 
			return message.send(`📗 ➾ Придумайте адекватный ник`);
	}
	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(zaprets1)
	var lol1 = filter1.test(zaprets1)	
	if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true) { 
		return message.send(`📗 ➾ Придумайте адекватный ник`);
	}
	if(message.$match[1].length > 15) return message.send(`📗 ➾ Максимальная длина ника 15 символов.`);
	user.prefix = message.$match[1];
	return message.send(`📗 ➾ Вы сменили свой ник на: ${message.$match[1]}`);
});


vk.updates.hear(/^(?:поиск)(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?/i, message => { 

	if(message.$match[3]){
		var id = user_id(message.$match[3]);
		if (!acc.users[id]) return message.send(`Не верно указаны данные | Игрока нет`);  
		return message.send(`
			Игрок: ${acc.users[id].prefix}
			ID: ${id}
			Статус: ${acc.users[id].level.toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Модератор").replace(/3/gi, "Администратор").replace(/4/gi, "Спец-Администратор").replace(/5/gi, "Создатель")}
		`);
	}else{ 
		if(!message.$match[4]) return message.send(`Укажите данные`);
		var domain = message.$match[4].split(" ");
		vk.api.call("utils.resolveScreenName", {
			screen_name: message.$match[4]
		}).then((res) => { 
			var id = user_id(res.object_id);
			if (!acc.users[id]) return message.send(`Не верно указаны данные | Игрока нет`);  
			return message.send(`
				Игрок: ${acc.users[id].prefix}
				ID: ${id}
				Статус: ${acc.users[id].level.toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Модератор").replace(/3/gi, "Администратор").replace(/4/gi, "Спец-Администратор").replace(/5/gi, "Разработчик")}
				`);
		})
		return;
	}
 
});

vk.updates.hear(/^(?:передать)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {  
	if(!message.$match[1] || !message.$match[2]) return message.send(`👉 ➾ Пример команды: передать ID СУММА`)
	let user = acc.users[user_id(message.user)];
	if(user.admin.block_pay == true) return message.send(`🔸 ➾ У вас заблокированы переводы денег.`)   

	if(user.level < 1){
	if(user.bloks.pay == true) return message.send(`🔸 ➾ Передавать валюту можно раз в 10 минут.`)   
		if(message.$match[2] > 5000000) return message.send(`💴 ➾ Максимальная сумма передачи 5.000.000$\n👑 ➾ У VIP/MODER/ADMIN - Лимит передачи увеличен.`)  
	}
	if(user.level == 1){
	if(user.bloks.pay == true) return message.send(`🔸 ➾ Передавать валюту можно раз в 10 минут.`)   
		if(message.$match[2] > 7000000) return message.send(`💴 ➾ Максимальная сумма передачи 7.000.000$\n👑 ➾ У MODER/ADMIN - Лимит передачи увеличен.`)  
	}
	if(user.level == 2){
	if(user.bloks.pay == true) return message.send(`🔸 ➾ Передавать валюту можно раз в 10 минут.`)   
		if(message.$match[2] > 10000000) return message.send(`💴 ➾ Максимальная сумма передачи 10.000.000$\n👑 ➾ У ADMIN - Лимит передачи увеличен.`)  
	}
	if(user.level == 3){
	if(user.bloks.pay == true) return message.send(`🔸 ➾ Передавать валюту можно раз в 10 минут.`)   
		if(message.$match[2] > 20000000) return message.send(`💴 ➾ Максимальная сумма передачи 20.000.000$`)  
	}
	if(user.level > 3){}
 
	let id = user_id(message.user)
	let ids = message.$match[1] 
	if(!Number(message.$match[1]) || !Number(message.$match[2])) return message.send(`👉 ➾ ID и СУММА должны быть числового вида.`)
	if(!acc.users[message.$match[1]] || message.$match[2] < 0) return message.send(`👉 ➾ Некорректно введены данные`)
	if(message.$match[2] > user.balance) return message.send(`👉 ➾ У вас нет столько $`);
	user.balance -= Number(message.$match[2]);
	acc.users[message.$match[1]].balance += Number(message.$match[2]);
	logs(user_id(message.user), ids, message.$match[2], type = 1)
 	
 	user.bloks.pay = true; 
		setTimeout(() => {
			user.bloks.pay = false;
	}, 360000);

	vk.api.call("messages.send", {
		peer_id: acc.users[message.$match[1]].id,
		message: `💴 ➾ Игрок [ID: ${id}] ${user.prefix} перевел вам ${message.$match[2]}$ `
	}).then((res) => {}).catch((error) => {console.log('pay(peredacha) error'); });	
	return message.send(`💴 ➾ Вы успешно перевели ${acc.users[message.$match[1]].prefix} -> ${message.$match[2]}$.`);
});




vk.updates.hear(/^(?:бпередать)\s?([0-9]+)?\s?([0-9]+)?/i,  (message) => {  
	let user = acc.users[user_id(message.user)];
	if(user.admin.block_pay == true) return message.send(`🔸 ➾ У вас заблокированы переводы денег.`)  
	let id = user_id(message.user)
	let ids = message.$match[1]
	if(!message.$match[1] || !message.$match[2]) return message.send(`👉 ➾ Пример команды: бпередать ID СУММА`)
	if(!Number(message.$match[1]) || !Number(message.$match[2])) return message.send(`👉 ➾ ID и СУММА должны быть числового вида.`)
	if(!acc.users[message.$match[1]] || message.$match[2] < 0) return message.send(`👉 ➾ Некорректно введены данные`)
	if(message.$match[2] > user.bitcoin) return message.send(`👉 ➾ У вас нет столько Биткоинов`);
	user.bitcoin -= Number(message.$match[2]);
	acc.users[message.$match[1]].bitcoin += Number(message.$match[2]);
	logs(user_id(message.user), ids, message.$match[2], type = 1)
 
	vk.api.call("messages.send", {
		peer_id: acc.users[message.$match[1]].id,
		message: `💴 ➾ Игрок [ID: ${id}] ${user.prefix} перевел вам ${message.$match[2]} bitcoins | В ${time()}`
	}).then((res) => {}).catch((error) => {console.log('pay(peredacha) error'); });	
	return message.send(`💴 ➾ Вы успешно перевели ${acc.users[message.$match[1]].prefix} -> ${message.$match[2]} bitcoins.`);
});				 
 
////// Система машин
	vk.updates.hear(/^(?:машины)\s?([0-9]+)?/i, (message) => {  
 	let user = acc.users[user_id(message.user)];
 	let houses = ['Коробка', 'Подвал' , 'Палатка'] // car 
	for(z in houses){
		if(user.house == houses[z]){return message.send(`👉 ➾ Ваш дом слишком дешевый, чтобы иметь данный транспорт.`)}
	}
 	if(user.house == false) return message.send(`👉 ➾ Для покупки машины Вам нужен дом!`);  
		if(!message.$match[1]){
			return message.send(`
			🚓Машины:

🚐1. Mercedes S-Class - 
💲Цена:35.000.000$
🚐2. Volkswagen Phaeton - 
💲Цена:45.000.000$
🚐3. Lexus LS 430 - 
💲Цена:60.000.000$
🚐4. Skoda Rapid - 
💲Цена:75.000.000$
🚐5. Audi A8 - 
💲Цена: 95.000.000$
🚐6. Range Rover - 
💲Цена:119.000.000$
🚐7. BMW X6 - 
💲Цена:120.000.000$
🚐8. Porsche Cayenne - 
💲Цена:155.000.000$ 
🚐9. BMW 7 Series - 
💲Цена:164.000.000$
🚐10. Lexus Lx - 
💲Цена:190.000.000$

🚘 ➾ Для покупки напишите: Машины [номер] 
🚐 ➾ 'В путь' отправить машину в рейс.
🚗 ➾ Машина продать - для продажи.
🚗 ➾ При продаже вернется 75% от суммы.
			`)
		}
	let i = message.$match[1]; 
	let ids = [0,1,2,3,4,5,6,7,8,9,10]
 	let count = [0, 35000000,45000000, 60000000,75000000,95000000,119000000,120000000,155000000,164000000,190000000];
 	let names = [0, 'Mercedes S-Class','Volkswagen Phaeton','Lexus LS 430','Skoda Rapid','Audi A8','Range Rover','BMW X6','Porsche Cayenne','BMW 7 Series','Lexus LX']
 	if(i < 0 || i > 10) return;
 	if(user.cars != false) return message.send(`🛥 ➾ У вас уже куплена машина`);
 	if(i > 0 && i <= 10){
 		if(user.balance < count[i]) return message.send(`🛥 ➾ У вас не достаточно денег.`);
 		user.balance -= count[i]; 
 		user.cars = ids[i]; 
 		return message.send(`🚘 ➾ Вы купили машину (${names[i]}) за ${count[i]}$`)
 	} 
 }); 
 
	vk.updates.hear(/^(?:машина продать)/i, (message) => {
		let count = [0, 1000000,5000000, 10000000,15000000,25000000,39000000,49000000,55000000,64000000,70000000];
		let user = acc.users[user_id(message.user)];
		if(user.cars == false) return message.send(`🚘 ➾ У вас нет машины`)
		let sum = count[user.cars] / 100 * 75;
		user.balance += sum; 
		user.cars = false; 
		return message.send(`🚘 ➾ Вы продали свой автомобиль за ${sum}$`)
	});

	vk.updates.hear(/^(?:в путь)\s?([0-9]+)?/i, (message) => {  
 	let user = acc.users[user_id(message.user)];
	if(user.cars == false) return message.send(`🚘 ➾ У вас нет машины`)
		if(!message.$match[1]){
			return message.send(`
			🚘 ➾  Места для отправки машины в рейс:

			1&#8419;. За город | 1ч 
			2&#8419;. В Москву | 2ч
			3&#8419;. За границу | 3ч 
			4&#8419;. На Северный полюс | 4ч 
 
			🚘 ➾ Вернувшись из рейса вы получите трофеи.
			🚘 ➾ Чем ценнее машина, тем лучше трофеи.
			⚠ ➾ Также, случайно может сломаться машина и она пропадет.
			`)
		}
	let i = message.$match[1]; 
	let name = [0, 'за город','в Москву','за границу','на северный полюс']
	let ids = [0,1,2,3,4]
 	let time = [0,3600000,7200000,10800000,14400000]
 	let times = [0,1,2,3,4]
 	if(i < 0 || i > 4) return;
 	if(user.reys != false) return message.send(`🚘 ➾ У вас уже отправлена машина в рейс`);
 	if(i > 0 && i <= 4){   
 		user.reys = true;
 		message.send(`🚘 ➾ Вы отправили машину в рейс (${name[i]}) на ${times[i]} часов.`)
 		if(rand(1,100) < 80){

 			setTimeout(() => {
 				let a = 0;
 				if(i==1){a = rand(1500,5000)}
 				if(i==2){a = rand(5000,9000)}
 				if(i==3){a = rand(10000,15000)}
 				if(i==4){a = rand(20000,30000)}
 				let id_car = user.car;
				if(id_car < 3){a += rand(1000,3000)}
				if(id_car > 3 && id_car < 6){a += rand(5000,8000)}
				if(id_car > 6){a += rand(90000,12000)}
				user.reys = false;
				return message.send(`🚘 ➾ Ваша машина успешно вернулась с рейса. Вы получили: ${a}$`)
			}, time[message.$match[1]]);

 		}else{
 			setTimeout(() => {
	 			user.reys = false;
				user.cars = false;
				return message.send(`🚘 ➾ К несчастью ваша машина попала в аварию. Груз не был доставлен, машину унилизировали.`)
			}, time);
 		} 
 	 
 	} 
 }); 


vk.updates.hear(/^(?:компьютеры)\s?([0-9]+)?/i, (message) => {  
 	let user = acc.users[user_id(message.user)];
 	let houses = ['Коробка', 'Подвал' , 'Палатка'] // pk 
	for(z in houses){
		if(user.house == houses[z]){return message.send(`&#128421; ➾ Ваш дом слишком дешевый, чтобы иметь данный компьютер.`)}
	}
 	if(user.house == false) return message.send(`&#128421; ➾ Для покупки компьютера Вам нужен дом!`);  
		if(!message.$match[1]){
			return message.send(`
			👾Компьютеры👾 

           💽 1. Piz Daint (250.000) 
           💽 2. Tianhe-2 (2018 Epic Edition) (500.000) 
           💽 3. Sunway TaihuLight EXTREME (1.000.000) 

           💾Для покупки введите "Компьютеры [номер]"
			⚠ ➾ 'Стрим' начать стрим в ютубе.
			⚠ ➾ При продаже вернется 75% от суммы.
			`)
		}
	let i = message.$match[1]; 
	let ids = [0,1,2,3]
 	let count = [0, 250000,500000, 1000000];
 	let names = [0, 'Piz Daint','Tianhe-2 (2018 Epic Edition)','Sunway TaihuLight EXTREME']
 	if(i < 0 || i > 3) return;
 	if(user.pk != false) return message.send(`&#128421; ➾ У вас уже куплен компьютер`);
 	if(i > 0 && i <= 3){
 		if(user.balance < count[i]) return message.send(`&#128421; ➾ У вас не достаточно денег.`);
 		user.balance -= count[i]; 
 		user.pk = names[i]; 
 		return message.send(`&#128421; ➾ Вы купили компьютер (${names[i]}) за ${count[i]}$`)
 	} 
 }); 
 

	vk.updates.hear(/^(?:стрим)\s?([0-9]+)?/i, (message) => {  
 	let user = acc.users[user_id(message.user)];
	if(user.pk == false) return message.send(`&#128187; ➾ У вас нет компьютера`)
		if(!message.$match[1]){
			return message.send(`
			&#128187; ➾  Игры для отправки в стрим:

			1&#8419;. Minecraft | 1ч 
			2&#8419;. CS-Go | 2ч
			3&#8419;. Far-Cry 5 | 3ч 
			4&#8419;. GTA-5 | 4ч 
 
			&#128187; ➾ Вернувшись со стрима вы получите деньги.
			&#128187; ➾ Чем ценнее компьютер, тем больше денег.
			⚠ ➾ Также, случайно может сломаться компьютер и он пропадёт.
			`)
		}
	let i = message.$match[1]; 
	let name = [0, ' Minecraft','CS-Go','Far-Cry 5','Dota-2']
	let ids = [0,1,2,3,4]
 	let time = [0,3600000,7200000,10800000,14400000]
 	let times = [0,1,2,3,4]
 	if(i < 0 || i > 4) return;
 	if(user.strim != false) return message.send(`&#128187; ➾ Вы уже на стриме`);
 	if(i > 0 && i <= 4){   
 		user.strim = true;
 		message.send(`&#128187; ➾ Вы отправились в стрим в игру (${name[i]}) на ${times[i]} часов.`)
 		if(rand(1,100) < 80){

 			setTimeout(() => {
 				let a = 0;
 				if(i==1){a = rand(1500,5000)}
 				if(i==2){a = rand(5000,9000)}
 				if(i==3){a = rand(10000,15000)}
 				if(i==4){a = rand(20000,30000)}
 				let id_pk = user.pk;
				if(id_pk < 3){a += rand(1000,3000)}
				if(id_pk > 3 && id_pk < 6){a += rand(5000,8000)}
				if(id_pk > 6){a += rand(90000,12000)}
				user.strim = false;
				return message.send(`&#128187; ➾ Вы  успешно вернулась со стрима. Вы получили: ${a}$`)
			}, time[message.$match[1]]);

 		}else{
 			setTimeout(() => {
	 			user.strim = false;
				user.pk = false;
				return message.send(`&#128187; ➾ К несчастью ваш компьтер не выдержал и сгорел:(.`)
			}, time);
 		} 
 	 
 	} 
 }); 


/////// Система вертолетов/самолетов

	vk.updates.hear(/^(?:вертолеты|Ветолёты)\s?([0-9]+)?/i, (message) => {  
 	let user = acc.users[user_id(message.user)]; 
	let houses = ['Коробка', 'Подвал' , 'Палатка','Домик на дереве','Полуразрушенный Дом'] // car 
	for(z in houses){
		if(user.house == houses[z]){return message.send(`👉 ➾ Ваш дом слишком дешевый, чтобы иметь данный транспорт.`)}
	}
 	if(user.house == false) return message.send(`👉 ➾ Для покупки вертолета Вам нужен дом!`); /// ДОМ НЕ НИЖЕ 5
		if(!message.$match[1]){
			return message.send(`
			🚁Вертолеты:

🚁1. Agusta A129 
💲Цена:15.000.000$
🚁2. Ми-24 - 
💲Цена:25.000.000$
🚁3. AH-2 - 
💲Цена:35.000.000$
🚁4. CAIC WZ-10 
💲Цена:39.000.000$
🚁5. HAL LCH - 
💲Цена:43.000.000$
🚁6. Eurocopter Tiger - 
💲Цена:50.000.000$
🚁7. Ка-52 - 
💲Цена:65.000.000$
🚁 8. Apache - 
💲Цена:80.000.000$ 

🚁➾ Для покупки напишите: Вертолеты [номер] 
🚁➾ Вертолет продать - для продажи.
🚁➾ При продаже вернется 75% от суммы.
			`)
		}
	let i = message.$match[1]; 
	let ids = [0,1,2,3,4,5,6,7,8,9,10]
 	let count = [0, 150000000,25000000,35000000,39000000,43000000,50000000,6500000,80000000];
 	let names = [0, 'Agusta A129 Mangusta','Ми-24','AH-2','CAIC WZ-10','HAL LCH','Eurocopter Tiger','Ка-52','Apache']
 	if(i < 0 || i > 8) return;
 	if(user.helicopter != false) return message.send(`🚁 ➾ У вас уже куплен вертолет`);
 	if(i > 0 && i <= 8){
 		if(user.balance < count[i]) return message.send(`🚁 ➾ У вас не достаточно денег.`);
 		user.balance -= count[i];
 		user.helicopter = ids[i];
 		return message.send(`🚁 ➾ Вы купили ветолёт (${names[i]}) за ${count[i]}$`)
 	} 
 }); 

 	vk.updates.hear(/^(?:Самолёты|самолеты)\s?([0-9]+)?/i,(message) => {  

 	let user = acc.users[user_id(message.user)];  
	let houses = ['Коробка', 'Подвал' , 'Палатка','Домик на дереве','Полуразрушенный Дом','Дом в лесу'] // car
	for(z in houses){
		if(user.house == houses[z]){return message.send(`👉 ➾ Ваш дом слишком дешевый, чтобы иметь данный транспорт.`)}
	}
 	if(user.house == false) return message.send(`👉 ➾ Для покупки самолёта Вам нужен дом!`); /// ДОМ НЕ НИЖЕ 7
		if(!message.$match[1]){
			return message.send(`
			🛩Самолёты:

🛫 1.Fokker DR1 Triplane 
💲Цена:30.000.000$
🛫 2. Mitsubishi A6M Zero 
💲Цена:105.000.000$
🛫3. Су-35С 
💲Цена:280.000.000$ 

✈ ➾ Для покупки напишите: Самолеты [номер] 
✈ ➾ Самолет продать - для продажи.
✈ ➾ При продаже вернется 75% от суммы.
			`)
		}
	let i = message.$match[1]; 
	let ids = [0,1,2,3,4,5,6,7,8,9,10]
 	let count = [0, 30000000,85000000,90000000];
 	let names = [0, 'Fokker DR1 Triplane','Mitsubishi A6M Zero','Су-35С']
 	if(i < 0 || i > 3) return;
 	if(user.aircraft != false) return message.send(`✈ ➾ У вас уже куплен самолет`);
 	if(i > 0 && i <= 3){
 		if(user.balance < count[i]) return message.send(`✈ ➾ У вас не достаточно денег.`);
 		user.balance -= count[i];
 		user.aircraft = ids[i];
 		return message.send(`✈ ➾ Вы купили самолет (${names[i]}) за ${count[i]}$`)
 	} 
 }); 
 

	vk.updates.hear(/^(?:самолет продать)/i,  (message) => {
		let count = [0, 30000000,85000000,90000000];
		let user = acc.users[user_id(message.user)];
		if(user.aircraft == false) return message.send(`✈ ➾ У вас нет самолета`)
		let sum = count[user.aircraft] / 100 * 75;
		user.balance += sum;
		user.aircraft = false;
		return message.send(`✈ ➾ Вы продали свой самолет за ${sum}$`)
	});

	vk.updates.hear(/^(?:вертолет продать)/i,  (message) => {
		let count = [0, 50000000,15000000,35000000,39000000,43000000,50000000,6500000,80000000];
		let user = acc.users[user_id(message.user)];
		if(user.helicopter == false) return message.send(`🚁 ➾ У вас нет вертолета`)
		let sum = count[user.helicopter] / 100 * 75;
		user.balance += sum;
		user.helicopter = false;
		return message.send(`🚁 ➾ Вы продали свой вертолет за ${sum}$`)
	});
///// Бизнес система - - - - - - -
	vk.updates.hear(/^(?:статистика)\s?([0-9]+)?/i,  (message) => {  
		let user = acc.users[user_id(message.user)]; 
		let text = '🏢 ➾ Статистика бизнесов: \n';
		if(user.bizs.one_biz == true){ text +=  `🔸 ➾ Бизнес: ${user.bizs.one.name}\n🔸 ➾ Прибыль: ${user.bizs.one.zp}$\n🔸 ➾ Людей: ${user.bizs.one.people}\n🔸 ➾ Максимальное кол-во людей: ${user.bizs.one.max_peop}\n`}
		if(user.bizs.two_biz == true){ text +=  `🔸 ➾ Бизнес: ${user.bizs.two.name}\n🔸 ➾ Прибыль: ${user.bizs.two.zp}$\n🔸 ➾ Людей: ${user.bizs.two.people}\n🔸 ➾ Максимальное кол-во людей: ${user.bizs.two.max_peop}`}
		return message.send(text)
	});



 

 vk.updates.hear(/^(?:бизнесы)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){
 		return message.send(`
 			🕋1. Палатка 
💲Цена:1.000.000$ [15] 
🕋2. Ларек 
💲Цена:5.000.000$ [20] 
🕋3. Магазин 
💲Цена:20.000.000$ [25] 
🕋4. Гипермаркет 
💲Цена:30.000.000$ [30] 
🕋5. Универмаг 
💲Цена:50.000.000$ [35] 
🕋6. АЗС 
💲Цена:70.000.000$ [40] 
🕋7. Атомная станция
💲Цена:90.000.000$ [45] 
🕋8. Интернет провайдер 
💲Цена:110.000.000$ [50] 
🕋9. Банк 
💲Цена:130.000.000$ [55] 
🕋10. Наркопритон | 
💲Цена:210.000.000$ [100] 

🏢 ➾ В скобочках: кол-во доступных к найму рабочих
⚠ ➾ Нанять рабочего: нанять [кол-во] [номер 1-2] | +5k/ч
🏢 ➾ Цена найма 1 рабочего - 50.000$

🏢 ➾ Для покупки напишите: Бизнесы [номер]
🏢 ➾ Данные о бизнесе: статистика 

⚠ ➾ 'Прибыль' - получить ежечасную прибыль

⚠ ➾ Для продажи: 'Бизнес продать [номер]'
👉 ➾ При продаже вернется 75% от суммы.
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)];
 	let count = [0, 1000000, 5000000,20000000,30000000,50000000,70000000,90000000,110000000,130000000,210000000];
	let max_peop = [0,15,20,25,30,35,40,45,50,55,100]
 	let names = [0, 'Палатка','Ларек','Магазин','Гипермаркет','Универмаг','АЗС','Атомная станция','Интернет провайдер','Банк','Наркопритон'] 
 	if(i < 0 || i > 10) return message.send(`🏢 ➾ Неверный номер бизнеса.`)
 	if(!Number(message.$match[1])) return message.send(`🏢 ➾ Укажите номер бизнеса`)

 	if(user.bizs.one_biz == false){
 		if(user.balance < count[i]) return message.send(`🏢 ➾ У вас нет такой суммы.`);
 		user.balance -= count[i];
		user.bizs.one_biz = true;
		user.bizs.one.count = Number(count[i])
		user.bizs.one.id = Number(i) 
		 user.bizs.one.name =  names[i];
		user.bizs.one.max_peop = max_peop[i];
		return message.send(`🏢 ➾ Вы купили бизнес '${names[i]}' за ${count[i]}$`) 
	}
	if(Number(i) == user.bizs.one.id) return message.send(`🏢 ➾ У вас уже куплен такой вид бизнеса.`)
	if(Number(i) == user.bizs.two.id) return message.send(`🏢 ➾ У вас уже куплен такой вид бизнеса.`)	
	if(user.bizs.two_biz == false){
 		if(user.balance < count[i]) return message.send(`🏢 ➾ У вас нет такой суммы.`);
		if(Number(i) == user.bizs.one.id) return message.send(`🏢 ➾ У вас уже куплен такой вид бизнеса.`)
		user.balance -= count[i];
		user.bizs.two_biz = true;
		user.bizs.two.count = Number(count[i])
		user.bizs.two.id = Number(i) 
		 user.bizs.two.name =  names[i];
		user.bizs.two.max_peop = max_peop[i];
		return message.send(`🏢 ➾ Вы купили бизнес '${names[i]}' за ${count[i]}$`) 
	}
	return message.send(`🏢 ➾ У вас уже куплено 2 бизнеса.`) 
 
 });



updates.hear(/(?:info|инфа) (.*)/i, async (context) => {
    // Самая простая команда, просто рандомим число в промежутке 1-110
    await context.send(`Вероятность -- ${getRandomInt(110)}%`);
});


 updates.hear("/мем", async (context) => {
    // Получаем стену рандомного паблика
    let { items } = await vk.api.wall.get({
        domain: getRandomElement(["mudakoff", "chan4", "rzeki4"]),
        offset: 1,
        count: 200
    });
    // Выбираем случайный пост
    let item = getRandomElement(items);
    // Выбираем именно первое изображение из поста
    item = item.attachments[0].photo;
    // Отправляем результат
    await context.send({
        attachment: "photo" + item.owner_id + "_" + item.id
    });
});
 

	vk.updates.hear(/^(?:бизнес продать)\s?([0-9]+)?/i,  (message) => { 
		let user = acc.users[user_id(message.user)];
		if(user.bizs.one_biz == false && user.bizs.two_biz == false) return message.send(`🏢 ➾ У вас нет бизнесов.`)
		if(message.$match[1] < 0 || message.$match[1] > 2) return message.send(`🏢 ➾ Укажите верный номер бизнеса.`);
		if(message.$match[1] == 1){
			let sum = user.bizs.one.count / 100 * 75
			user.balance += sum;
			user.bizs.one_biz = false;
			user.bizs.one.count = false;
			user.bizs.one.id = false;
			user.bizs.one.name = false;
			user.bizs.one.people = 0; 
			user.bizs.one.zp = 0;
			user.bizs.one.max_peop = 0;
			return message.send(`🏢 ➾ Вы продали свой бизнес за ${sum}$`);
		}
		if(message.$match[1] == 2){
			let sum = user.bizs.two.count / 100 * 75
			user.balance += sum;
			user.bizs.two_biz = false;
			user.bizs.two.count = false;
			user.bizs.two.id = false;
			user.bizs.two.name = false;
			user.bizs.two.people = 0; 
			user.bizs.two.zp = 0;
			user.bizs.two.max_peop = 0;
			return message.send(`🏢 ➾ Вы продали свой бизнес за ${sum}$`);
		}		  
	 
	});

	vk.updates.hear(/^(?:нанять)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {  
		if(!message.$match[1]) return message.send(`🏢 ➾ Укажите количество рабочих | нанять <кол-во> <номер>`)
		if(!message.$match[2]) return message.send(`🏢 ➾ Укажите номер бизнеса | нанять <кол-во> <номер>`)
		if(!Number(message.$match[1]) || message.$match[1] < 0 || message.$match[1] > 100 || !Number(message.$match[2]) || message.$match[2] < 1 || message.$match[2] > 2) return message.send(`🏢 Неверно указаны данные | нанять <кол-во> <номер>`)
		let id = user_id(message.user)
		let num = message.$match[2]; 
		if(message.$match[1] * 50000 > acc.users[id].balance) return message.send(`🏢 ➾ Для покупки [${message.$match[1]}] рабочих нужно [${message.$match[1] * 50000}$]`);
	    if(message.$match[2] == 1){ 
	    	if(acc.users[id].bizs.one_biz == false) return message.send(`🏢 ➾ У вас не куплен бизнес.`)
	    	if(acc.users[id].bizs.one.max_peop - acc.users[id].bizs.one.people < message.$match[1]) return message.send(`🏢 ➾ Максимальное количество работников: ${acc.users[id].bizs.one.max_peop}`)
	    	acc.users[id].bizs.one.people += Number(message.$match[1])
	    	acc.users[id].balance -= Number(message.$match[1]) * 50000;
	    	acc.users[id].bizs.one.zp += 5000 * Number(message.$match[1]);
	    	return message.send(`🏢 ➾ Вы купили ${message.$match[1]} рабочих. Ваша прибыль увеличилась на: ${message.$match[1] * 5000}$`)
	    }
	    if(message.$match[2] == 2){
	    	if(acc.users[id].bizs.two_biz == false) return message.send(`🏢 ➾ У вас не куплен бизнес.`)
	    	if(acc.users[id].bizs.two.max_peop - acc.users[id].bizs.two.people < message.$match[1]) return message.send(`🏢 ➾ Максимальное количество работников: ${acc.users[id].bizs.two.max_peop}`)
	    	acc.users[id].bizs.two.people += Number(message.$match[1])
	    	acc.users[id].balance -= Number(message.$match[1]) * 50000;
	    	acc.users[id].bizs.two.zp += 5000 * Number(message.$match[1]);
	    	return message.send(`🏢 ➾ Вы купили ${message.$match[1]} рабочих. Ваша прибыль увеличилась на: ${message.$match[1] * 5000}$`)
	    } 
		 
	});


function downloadPhoto(url, folder, next) {
    var request = https.get(url, function(response) {
        response.pipe(fs.createWriteStream(folder)).on('finish', function() {
            fs.readFile(folder, function (err, squid) {
                next(err, folder)
            })
        });
    });
}

	vk.updates.hear(/^(?:прибыль)/i, message => {
 	let user = acc.users[user_id(message.user)]; 
 	let text = '';
 	if(user.bizs.one_biz == false && user.bizs.two_biz == false) return message.send(`🏢️ ➾ У вас нет бизнесов.`); 
 	if(user.bizs.one.stop == true || user.bizs.two.stop == true) return message.send(`🏢️ ➾ Прибыль можно брать раз в час.`)
 	
 	if(user.bizs.one_biz == true){
 		text += `📝 ➾ Прибыль с бизнеса <${user.bizs.one.name}> составила: ${user.bizs.one.zp}$\n`;
 		user.balance += Number(user.bizs.one.zp)
 	}
 	if(user.bizs.one_biz == true){
 		text += `📝 ➾ Прибыль с бизнеса <${user.bizs.two.name}> составила: ${user.bizs.two.zp}$\n`;
 		user.balance += Number(user.bizs.two.zp)
 	}

 	user.bizs.one.stop = true;
 	user.bizs.two.stop = true;
 
	setTimeout(() => {
			user.bizs.one.stop = false;
			user.bizs.two.stop = false;
	}, 3600000);


 	return message.send(`
 		${text} 
 		`);
 });
  

 async function run(bot) {
    let gifs = await getGif(bot);

    return bot.reply({ attachment: gifs });
}

function getGif({api, utils}) {
    return api.call('docs.search', {q: utils.pick(['Аниме']) + '.gif', count: 5})
        .then(response => {;
            let item = utils.pick(response.items);
            return `doc${item.owner_id}_${item.id}`;
        })
}

module.exports = {
    pattern: /^(анигиф)/i,
    run
}

///// АДМИН КОМАНДЫ - - - -- - - 
 
 

 	vk.updates.hear(/^(?:12412412)/i,(message) => { 
 		let user = acc.users[user_id(message.user)];
 		if(user.level < 1) return;
 		let warns = ''; 
 		return message.send(`
 			111

 			3123213 ${user.level}
 			51144 ${user.adm_time}

 			142: [${user.ainfo.all_ans}]
			124124 [${user.ainfo.good_ans}/${user.ainfo.bad_ans}] 124124
			124124 [${user.ainfo.vig}]   
 			`);

 	});

 	vk.updates.hear(/^(?:apanel)/i,(message) => { 
 		let user = acc.users[user_id(message.user)];
 		if(user.level < 4) return;
 		let warns = ''; 
 		return message.send(`
 			- - Приватная Информация - -
			* Слив данной информации - наказуем *
			~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

			Настройки:
			x2 баланс: ${i.bonus_balance}
			х2 опыт: ${i.bonus_exs}
			(bonus [balance/exs] [0/1])

			

			Сообщения:
			Время обновления: ${i.antiflood_time}
			Лимит смс: ${i.antiflood_limit}

			

 			`);

 	});


 	vk.updates.hear(/^(?:банлист)/i, message => {
		if(user.level < 3) return message.send(`🔸 ➾ Вы не администратор`); 	
		let devs, admins, moders, vips, chat; 
		let devels = ``;
		devs = '"⛔ Банлист:>>>"\n'; 
		gl = '""\n'; 

		admins = '"Бан"\n'
		moders = '"\n'; 
		vips = '\n"\n'; 
		for (let id in acc.users) {
			if(acc.users[id]){
			let user = acc.users[id];
 
			if (user.ban == true) devs += `✳ ➾ @id${acc.users[id].id}(${acc.users[id].prefix})\n`; 
			}
		}
		let text = `\n`;
		if (devs.length != 100) text += devs;
		if (gl.length != 24) text += gl;
		if (admins.length != 24) text += admins;  
		if (moders.length != 24) text += moders;  
		if (vips.length != 24) text += vips; 
		return message.send(`${text}`);
	});



	vk.updates.hear(/^(?:репорт|report|rep|жалоба|вопрос)\s?([^]+)?/i, (message) => { 
 		if(message.$from.type != 'user') return message.send(`Обращаться в репорт можно только в ЛС ${config.group_url}`);
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`🔸 ➾ вы не написали жалобу | репорт [текст]`);
			if(user.report == true) return message.send(`🔸 ➾ Вам запрещенно писать в репорт.`)
		let a = zapret(message.$match[1]);
		if(a != 0) return message.send(a);

		for(i=0;i<200000;i++){
			if(acc.users[i]){
			if(acc.users[i].level >= 2){ 
				vk.api.call("messages.send", {
					peer_id: acc.users[i].id,
					message: `👉 ➾ [REPORT]\n👉 ➾ ID игрока: ${user_id(message.user)}\n👉 ➾ Жалоба: ${message.$match[1]}\n👉 ➾ [Для ответа: ответ [ID] [TEXT]`
				}).then((res) => {}).catch((error) => {console.log('report error'); });	
			}
		}
		}
		return message.send(`🔸 ➾ Вы успешно отправили жалобу.`);
	});

	vk.updates.hear(/^(?:ответ)\s?([0-9]+)?\s([^]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(user.admin.block_rep == true) return message.send(`🔸 ➾ У вас заблокированы ответы на репорт.`)
		if(user.level < 2) return
		if(!Number(message.$match[1]) || !message.$match[1] || !message.$match[2] || !acc.users[message.$match[1]]) return message.send(`🔸 ➾ Проверьте вводимые данные.`);
		let a = zapret(message.$match[2]);
		if(a != 0) return message.send(a); 
		vk.api.call("messages.send", {
			peer_id: acc.users[message.$match[1]].id,
			message: `👉 ➾ Администратор ответил Вам:\n👉 ${message.$match[2]}\n\n👉 Оцените ответ: респект +/- [хорошо/плохо]`
		}).then((res) => {}).catch((error) => {console.log('ans error'); });	
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		user.ainfo.all_ans += 1;
		user.ainfo.ans += 1;
		acc.users[message.$match[1]].rep.status = true;
		acc.users[message.$match[1]].rep.id = Number(user_id(message.user));
		return message.send(`👉 ➾ Ответ отправлен.`)
	});


	vk.updates.hear(/^(?:setnick)\s?([0-9]+)?\s([^]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(user.level < 3) return message.send(`🔸 ➾ Вы не администратор`); 
		if(!message.$match[1] || !message.$match[2]) return message.send(`🔸 ➾ Пример команды: setnick [ID] [ИМЯ]`);
		let zaprets1 = message.$match[2].toLowerCase();
		var zapret = /(вк бо т |сова не спит|сова никогда не спит|с о в а н е с п и т|сованикогданеспит|@|cyka|сyka|cyка|сова не спит никогда|вкботру|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|порно|botvk|ботвк|vkbot|кбот|bot vk|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
		if (zapret.test(zaprets1) == true) { 
				return message.send(`📗 ➾ Придумайте адекватный ник`);
		}
		var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
		var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
		var lol = filter0.test(zaprets1)
		var lol1 = filter1.test(zaprets1)	
		if (filter0.test(zaprets1) == true || filter1.test(zaprets1) == true) { 
			return message.send(`📗 ➾ Придумайте адекватный ник`);
		}
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		acc.users[message.$match[1]].prefix = message.$match[2];
		user.ainfo.nicks += 1;
		return message.send(`📗 ➾ Вы сменили ник игрока на: ${message.$match[2]}`);
	});

vk.updates.hear(/^(?:чс)/i, message => { 
let devs, admins, moders, vips, chat; 
let devels = ``; 
devs = '"⛔ У этих челов стоит мут:»>"\n'; 
gl = '""\n'; 

admins = '"Мут"\n' 
moders = '"\n'; 
vips = '\n"\n'; 
for (let id in acc.users) { 
if(acc.users[id]){ 
let user = acc.users[id]; 

if (user.mute == 1) devs += `✳ ➾ @id${acc.users[id].id}(${acc.users[id].prefix})\n`; 
} 
} 
let text = `\n`; 
return message.send(`${text}`); 
});

vk.updates.hear(/^(?:Шар)\s?([^]+)\s?([^]+)?/i,  (message) => {
        return message.reply(`🔮${[`Я думаю да`,`скорее всего`,`пока не ясно, попробуй снова`,`сейчас нельзя предсказать`,`весьма сомнительно`,`по моему - ДА`,`знаки говорят да`].random()}`);
    });



vk.updates.hear(/^(?:банлист)/i, message => { 
let devs, admins, moders, vips, chat; 
let devels = ``; 
devs = '"⛔ У этих людей бан:»>"\n'; 
gl = '""\n'; 

admins = '"Бан"\n' 
moders = '"\n'; 
vips = '\n"\n'; 
for (let id in acc.users) { 
if(acc.users[id]){ 
let user = acc.users[id]; 

if (user.ban == true) devs += `✳ ➾ @id${acc.users[id].id}(${acc.users[id].prefix})\n`; 
} 
} 
let text = `\n`; 
if (devs.length != 100) text += devs; 
if (gl.length != 24) text += gl; 
if (admins.length != 24) text += admins; 
if (moders.length != 24) text += moders; 
if (vips.length != 24) text += vips; 
return message.send(`${text}`); 
});


 
 

vk.updates.hear(/^(?:setmoney)\s?([0-9]+)?/i, message => {
	let user = acc.users[user_id(message.user)];
	if(user.admin.block_give == true) return message.send(`🔸 ➾ У вас заблокирована выдача валюты.`)
	if(user.level < 1) return message.send(`🔸 ➾ Вы не администратор`);
	if(user.bloks.giverub == true) return message.send(`💰 ➾ Выдавать валюту можно раз в час`);
	if(user.level == 1){
		if(!message.$match[1] || message.$match[1] < 0 || message.$match[1] > 500000) return message.send(`💰 ➾ Пример: 'setmoney [1-500000]'`);
		user.balance += Number(message.$match[1]);
	}
	if(user.level == 2){
		if(!message.$match[1] || message.$match[1] < 0 || message.$match[1] > 3000000) return message.send(`💰 ➾ Пример: 'setmoney [1-3000000]'`);
		user.balance += Number(message.$match[1]);
	}
	if(user.level == 3){
		if(!message.$match[1] || message.$match[1] < 0 || message.$match[1] > 10000000) return message.send(`💰 ➾ Пример: 'setmoney [1-10000000]'`);
		user.balance += Number(message.$match[1]);
	}
	if(user.level > 3){
		if(!message.$match[1] || message.$match[1] < 0 || message.$match[1] > 80000000) return message.send(`💰 ➾ Пример: 'setmoney [1-80000000]'`);
		user.balance += Number(message.$match[1]);
	}
	user.bloks.giverub = true;
		setTimeout(() => {
			user.bloks.giverub = false;
	}, 3600000);

	return message.send(`💰 ➾ Вы выдали себе ${spaces(message.$match[1])}$`);
});




vk.updates.hear(/^(?:giverub)\s?([0-9]+)?\s?([0-9]+)?/i,  message => {
	let user = acc.users[user_id(message.user)];
	let id = user_id(message.user)
	let i = config;
	if(acc.users[id].level < 4) return;
			if(!message.$match[1] || !acc.users[message.$match[1]] || !message.$match[2] || message.$match[2] < 0) return message.send(`💰 ➾ Пример: 'giverub [ID] [COUNT]'`); 
			acc.users[message.$match[1]].balance += Number(message.$match[2]);
		 	
			logs(user_id(message.user), message.$match[1], message.$match[2], type = 2)
			var is = [user_id(message.user), message.text] 
			adm_log(is)
			return message.send(`💰 ➾ Вы выдали [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] ${spaces(message.$match[2])}$`);
 
	 
});


vk.updates.hear(/^(?:removerub)\s?([0-9]+)?/i, message => {
	let user = acc.users[user_id(message.user)];
	let id = user_id(message.user)
	let i = config;
	if(acc.users[id].level < 5) return; 
			if(!message.$match[1] || !acc.users[message.$match[1]]) return message.send(`💰 ➾ Пример: 'removerub [ID]'`); 
			acc.users[message.$match[1]].balance = 0;
				logs(user_id(message.user), message.$match[1], message.$match[2], type = 3)
			return message.send(`💰 ➾ Вы забрали все $ у [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})]`);
	 
});







 


vk.updates.hear(/^(?:спец)$/i, message => {
	let id = user_id(message.user)
	if(acc.users[id].level < 5) return;
			return message.send(`
				Команды спец.администратора
				giverub [id] [count] - выдать валюту.
				removerub [id] - аннулировать валюту.
				delluser [id] - обнулить аккаунт игроку.

				oon id - выставить ограничение на ставки
				oof id - снять ограничение
				boostzp ID LVL(1-24)
				boostbiz ID LVL(1-24)

				givevip id time
				givemoder id time
				giveadm id time 

				`);
 
});


vk.updates.hear(/^(?:delluser)\s?([0-9]+)?/i,  message => {
	let id = user_id(message.user)

	let i = config;
	if(acc.users[id].level < 5) return;

			let user = acc.users[user_id(message.user)];
			if(user.level < 3) return message.send(`🔸 ➾ Вы не администратор`);
			if(!message.$match[1] || !acc.users[message.$match[1]]) return message.send(`💰 ➾ Пример: 'delluser [ID]'`); 

			acc.users[message.$match[1]].balance = 0;
		 	acc.users[message.$match[1]].bitcoin =0
		 	acc.users[message.$match[1]].exs =0
		 	acc.users[message.$match[1]].exsup = 50
		 	acc.users[message.$match[1]].lvl  =0
		 	acc.users[message.$match[1]].game.binlose =0
		 	acc.users[message.$match[1]].game.binwin =0
		 	acc.users[message.$match[1]].game.binstop = false
		 	acc.users[message.$match[1]].game.kazlose =0
		 	acc.users[message.$match[1]].game.kazwin =0
		 	acc.users[message.$match[1]].game.rand_lose =0
		 	acc.users[message.$match[1]].game.rand_win =0
		 	acc.users[message.$match[1]].game.stavka_win =0
		 	acc.users[message.$match[1]].game.stavka_lose =0
		 	acc.users[message.$match[1]].game.win = 50
		 	acc.users[message.$match[1]].msg.messages = 0
		 	acc.users[message.$match[1]].msg.last_msg = ''
		 	acc.users[message.$match[1]].prefix = `Удален | ${time()} | ${data()}`
		 	acc.users[message.$match[1]].cars = false
		 	acc.users[message.$match[1]].house = false
		 	acc.users[message.$match[1]].lodka = false
		 	acc.users[message.$match[1]].rep.status = false
		 	acc.users[message.$match[1]].rep.id = false 
		 	acc.users[message.$match[1]].warn = 0 
		 	acc.users[message.$match[1]].warn_p = []
		 	acc.users[message.$match[1]].aircraft = false
		 	acc.users[message.$match[1]].helicopter = false 
		 	acc.users[message.$match[1]].level = 0
		 	acc.users[message.$match[1]].bizs.one_biz = false
		 	acc.users[message.$match[1]].bizs.two_biz =  false
		 	acc.users[message.$match[1]].bizs.one.count = false
		 	acc.users[message.$match[1]].bizs.one.balance = 0
		 	acc.users[message.$match[1]].bizs.one.id = false
		 	acc.users[message.$match[1]].bizs.one.name = false
		 	acc.users[message.$match[1]].bizs.one.people = 0
		 	acc.users[message.$match[1]].bizs.one.uplvl = 0
		 	acc.users[message.$match[1]].bizs.one.zp = 0 
		 	acc.users[message.$match[1]].bizs.two.count = false
		 	acc.users[message.$match[1]].bizs.two.balance = 0
		 	acc.users[message.$match[1]].bizs.two.id = false
		 	acc.users[message.$match[1]].bizs.two.name = false
		 	acc.users[message.$match[1]].bizs.two.people = 0
		 	acc.users[message.$match[1]].bizs.two.uplvl = 0
		 	acc.users[message.$match[1]].bizs.two.zp = 0 
		 	acc.users[message.$match[1]].bizs.two.max_peop = 0 
		 	acc.users[message.$match[1]].bizs.one.max_peop = 0 
		 	acc.users[message.$match[1]].job.name = false;
		 	acc.users[message.$match[1]].job.count = 0;
		 	acc.users[message.$match[1]].job.stop = false;
		 	acc.users[message.$match[1]].job.lvl = 0;
		 	acc.users[message.$match[1]].mute = false;
		 	acc.users[message.$match[1]].ferm.id = false;
		 	acc.users[message.$match[1]].ferm.zp = 0;
		 	acc.users[message.$match[1]].reys = false;
		 	acc.users[message.$match[1]].housep = 0;
		 	acc.users[message.$match[1]].pit = false;
		 	acc.users[message.$match[1]].bank = 0;
		 	acc.users[acc.users[message.$match[1]].brak].brak = false;
		 	acc.users[message.$match[1]].brak = false;
		 	acc.users[message.$match[1]].safe.status = false;
		 	acc.users[message.$match[1]].safe.key = false;
		 	acc.users[message.$match[1]].credit = 0;
		 	acc.users[message.$match[1]].procent = 0;
		 	acc.users[message.$match[1]].global_exs = 0;
		 	acc.users[message.$match[1]].autozp = false;
		 	acc.users[message.$match[1]].autobiz = false;
		 	acc.users[message.$match[1]].frac_name = false;
		 	acc.users[message.$match[1]].duel = false;
		 	acc.users[message.$match[1]].duel_summ = false;
		 	acc.users[message.$match[1]].uron = 0;
		 	acc.users[message.$match[1]].gun_name = false;
		 	acc.users[message.$match[1]].block_game = true;
		 	acc.users[message.$match[1]].nachal = false;
					 
			return message.send(`💰 ➾ Вы удалил аккаунт игрока [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})]`);
	
});
 
 
//////////////// mute /////////
vk.updates.hear(/^(?:mute)?\s([0-9]+)?\s?([0-9]+)?/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	if(user.level < 1) return message.send(`🔸 ➾ Вы не VIP`);
	if(acc.users[user_id(message.user)].level > acc.users[1].level) return
	if(acc.users[user_id(message.user)].level < acc.users[1].level) return
	if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !acc.users[message.$match[1]] || message.$match[2] > 1000 || message.$match[2] < 1) return message.send(`⏺ ➾ Проверьте вводимые данные:\n⏺ ➾ mute [ID] [TIME(1-999)]`);
	let time = message.$match[2] * 60000;
	let id = Number(message.$match[1])
	acc.users[id].mute = true;

	var is = [user_id(message.user), message.text] 
	adm_log(is)

	setTimeout(() => {
			acc.users[id].mute = false;
			vk.api.call('messages.send', {
				peer_id: acc.users[id].id,
				message: `⏺ ➾ Временная блокировка была снята. :)`
			});
	}, time);

	vk.api.call('messages.send', {
		peer_id: acc.users[id].id,
		message: `⏺ ➾ ${user.prefix} временно заблокировал доступ к боту на [${message.$match[2]}] минут(ы).\n\n⏺ ➾ Через [${message.$match[2]}] минут блокировка пропадет.`
	});
	return message.send(`💰 ➾ Вы заблокировали временно доступ к боту игроку  [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] на ${time/60000} минут`); 
});

////////////////////////////// 
vk.updates.hear(/^(?:oon)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: oon ID`);
		if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
		if(user.level < 5) return message.send(`🔸 ➾ Вы не администратор`);
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);
		acc.users[message.$match[1]].block_game = true 

		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`✅ ➾ Вы поставили ограничение на ставки игроку [${acc.users[message.$match[1]].prefix}]`);
	}); 

	vk.updates.hear(/^(?:ooff)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: ooff ID`);
		if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
		if(user.level < 5) return message.send(`🔸 ➾ Вы не администратор`);
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);
		acc.users[message.$match[1]].block_game = false; 

		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`✅ ➾ Вы сняли ограничение на ставки игроку [${acc.users[message.$match[1]].prefix}]`);
	}); 

	vk.updates.hear(/^(?:unban)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: unban ID`);
		if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
		if(user.level < 3) return message.send(`🔸 ➾ Вы не администратор`);
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);
		acc.users[message.$match[1]].ban = false 
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `✅ ➾ ${user.prefix} разблокировал Вас.`
		});
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`✅ ➾ Вы разблокировали игрока [${acc.users[message.$match[1]].prefix}]`);
	}); 

	vk.updates.hear(/^(?:unwarn)\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: unwarn ID`);
		if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
		if(user.level < 4) return message.send(`🔸 ➾ Вы не Спец-Администратор`);
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);

		acc.users[message.$match[1]].warn = 0; 
		acc.users[message.$match[1]].warn_p = []

		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `✅ ➾ Администратор снял Вам все предупреждения`
		});
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`✅ ➾ Вы сняли все предупреждения игроку [${acc.users[message.$match[1]].prefix}].`);
	}); 

 


vk.updates.hear(/^(?:vig)\s?([0-9]+)?/i, (message) => { 
		if(user_id(message.user) != 1) return;
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: vig [ID] `);
		if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
		if(user.level < 4) return message.send(`🔸 ➾ Вы не Спец-Администратор`);
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);

		acc.users[message.$match[1]].ainfo.vig += 1; 

		var is = [user_id(message.user), message.text] 
		adm_log(is)

		let text = `✅ ➾ ${user.prefix} выдал вам админ-выговор.\n✅ ➾ После 3 вас снимет с админ-поста.`
		if(acc.users[message.$match[1]].ainfo.vig == 3){
			acc.users[message.$match[1]].ainfo.vig = 0;  
			acc.users[message.$match[1]].level = 0;
			text += `\n🔸 ➾ У вас 3 предупреждения.\n🔸 ➾ Вы лишились админ-прав.`
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: text
		}); 
		return message.send(`✅ ➾ Вы выдали выговор игроку [${acc.users[message.$match[1]].prefix}].`);
	}); 

	vk.updates.hear(/^(?:unvig)\s?([0-9]+)?/i, (message) => { 
		if(user_id(message.user) != 1) return;
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: unwarn ID`);
		if(!Number(message.$match[1])) return message.send(`🔸 ➾ Число должно быть цифрового вида.`);
		if(user.level < 4) return message.send(`🔸 ➾ Вы не Спец-Администратор`);
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);

		acc.users[message.$match[1]].ainfo.vig = 0; 

		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `✅ ➾ Администратор снял Вам все выговоры`
		});
		var is = [user_id(message.user), message.text] 
		adm_log(is)
		return message.send(`✅ ➾ Вы сняли все выговоры игроку [${acc.users[message.$match[1]].prefix}].`);
	}); 

/////
vk.updates.hear(/^(?:баланс)/i,  (message) => { 
	let user = acc.users[user_id(message.user)];
	return message.send(`
		📕 ➾ 🆔: ${user_id(message.user)} 
		💲 ➾ Баланс ${spaces(user.balance)}$ 
		💳 ➾ Банк ${spaces(user.bank)}$
		👑 ➾ Рейтинг: ${spaces(user.global_exs)}
		🌐 ➾ Биткоинов: ${spaces(user.bitcoin)}$ 
	
`)
});

vk.updates.hear(/^(?:ungiverub)\s?([0-9]+)?\s?([0-9]+)?/i,  message => {
	let user = acc.users[user_id(message.user)];
	let id = user_id(message.user)
	let i = config;
	if(acc.users[id].level < 5) return;
			if(!message.$match[1] || !acc.users[message.$match[1]] || !message.$match[2] || message.$match[2] < 0) return message.send(`💰 ➾ Пример: 'ungiverub [ID] [COUNT]'`); 
			acc.users[message.$match[1]].balance -= Number(message.$match[2]);
		 	
			logs(user_id(message.user), message.$match[1], message.$match[2], type = 2)
			var is = [user_id(message.user), message.text] 
			adm_log(is)
			return message.send(`💰 ➾ Вы отняли у [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] ${spaces(message.$match[2])}&#128176;`);
 
	 
});

vk.updates.hear(/^(?:reit)\s?([0-9]+)?\s?([0-9]+)?/i,  message => {
	let user = acc.users[user_id(message.user)];
	let id = user_id(message.user)
	let i = config;
	if(acc.users[id].level < 5) return;
			if(!message.$match[1] || !acc.users[message.$match[1]] || !message.$match[2] || message.$match[2] < 0) return message.send(`💰 ➾ Пример: 'reit [ID] [COUNT]'`); 
			acc.users[message.$match[1]].global_exs -= Number(message.$match[2]);
		 	
			logs(user_id(message.user), message.$match[1], message.$match[2], type = 2)
			var is = [user_id(message.user), message.text] 
			adm_log(is)
			return message.send(`&#128081; ➾ Вы отняли у [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] ${spaces(message.$match[2])}&#128081;`);
 
	 
});

vk.updates.hear(/^(?:get)\s?([0-9]+)?/i, (message) => {  
	let user = acc.users[user_id(message.user)]; 
	let warns = '';
	if(!message.$match[1] || !Number(message.$match[1]) || !acc.users[message.$match[1]]) return message.send(`🔸 ➾ Проверьте вводимые данные.`);
	for(i=0;i<acc.users[message.$match[1]].warn_p.length;i++){warns += `⛔ ➾ ${acc.users[message.$match[1]].warn_p[i]}\n`}
	if(user.level < 1) return; 
	let id = acc.users[message.$match[1]]
	return message.send(`
		📋 Информация об игроке [${id.prefix}] 📋
		🔸 ➾ Имя: ${id.prefix}
		🔹 ➾ ID: ${message.$match[1]}
		🔹 ➾ Цифровой: ${id.id}
		🔹 ➾ VK: @id${id.id}(${id.prefix})
		🔹 ➾ Баланс: ${id.balance}
		🔹 ➾ Биткоинов: ${id.bitcoin}
		
		🔹 ➾ Привилегия: ${id.level.toString().replace(/0/gi, "Игрок").replace(/1/gi, "Вип").replace(/2/gi, "Модератор").replace(/3/gi, "Администратор").replace(/4/gi, "Спец-Администратор").replace(/5/gi, "Разработчик")}
		🔹 ➾ Дата регистрации: ${id.rtime}

		Имущество:\n` +
		(user.level >= 3 ? `✈ ➾ Самолет:  ${id.aircraft.name}\n` : ``)+
		(user.level >= 3 ? `🚁 ➾ Вертолет: ${id.helicopter.name}\n` : ``)+
		(user.level >= 3 ? `🚘 ➾ Автомобиль: ${id.cars.name}\n` : ``)+  
		(user.level >= 3 ? `🚤 ➾ Лодка: ${id.lodka}\n` : ``)+ 
		(user.level >= 3 ? `🏡 ➾ Дом: ${id.house}\n` : ``)+   
		(user.pit== false ? `🐼 ➾ Питомец:  отсутствует\n` : `🐼 ➾ Питомец:  ${user.pit}\n`)+
		(user.gun_name == false ? `🔫 ➾ Отсутствует\n` : `🔫 ➾ Название: ${user.gun_name}\n`)+  
		` 
		🏨 ➾ Бизнесы: 
		`+(user.level >= 3 ? `1&#8419; ➾ ${id.bizs.one.name} || ${spaces(id.bizs.one.zp)}$/час\n` : ``)+  
		(user.level >= 3 ? `2&#8419; ➾ ${id.bizs.two.name} || ${spaces(id.bizs.two.zp)}$/час\n` : ``)+  
		`
		`+
		(user.level >= 3 ? `🔸 ➾ Последнее смс боту: ${id.msg.last_msg}\n` : ``)+  
		(user.level >= 3 ? `🔸 ➾ Сообщений боту: ${id.msg.messages}\n` : ``)+ 
		(user.level >= 2 ? `🔸 ➾ Уровень: ${id.lvl}\n` : ``)+ 
		(user.level >= 2 ? `🔸 ➾ Опыт: ${id.exs}\n` : ``)+  

		(user.level >= 2 ? `\n⚠ ➾ Предупреждений: ${id.warn}\n` : ``)+ 
		(user.level >= 2 ? `⚠ ➾ Причины: [${id.warn}]\n${warns}\n` : ``)+ 
		(user.level >= 4 ? `⛔ ➾ Админ-выговоров: ${user.ainfo.vig}\n` : ``)+  
		(id.ban == false ? `⚠ ➾ Аккаунт не заблокирован\n` : `⚠ ➾ Аккаунт заблокирован [${id.ban}]`)
		);
	});

 vk.updates.hear(/^(?:реф)\s?([0-9]+)?/i, (message) => {  
 	let id = acc.users[message.$match[1]]
	let user = acc.users[user_id(message.user)]; 
	let sum = rand(1000000,1000000)
	user.balance += Number(sum);
	acc.users[message.$match[1]].balance += Number(500000);			
	if(user.ref != true) return message.send(`🙅 ➾ Вы уже вводили реф.`);
	if(!acc.users[message.$match[1]]) return message.send(`🚶 ➾ Такого игрока нет.`);
	acc.users[message.$match[1]].ref = false;
	return message.send(`Вы Ввели реферал игрока ${acc.users[message.$match[1]].prefix} и получили 1.000.000 \n➖➖➖➖➖`)
	

    });
					
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
vk.updates.hear(/^(?:игропрофиль)/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	return message.send(`
		📕 >> Ваш Игро-Профиль « 📕
		🔸 ➾ Имя: ${user.prefix}
		🔸 ➾ &#127380;: ${user_id(message.user)}
		🔸 ➾ Баланс: ${spaces(user.balance)}$
	
		🎲 ➾ Игры « 🎲	 
		🎰 ➾ Азино: [Побед: ${user.game.kazwin}/ Поражений: ${user.game.kazlose}]
		📊 ➾ Акции: [Побед: ${user.game.binwin}/ Поражений: ${user.game.binlose}]
		🎲 ➾ Бин: [Побед: ${user.game.stavka_win}/ Поражений: ${user.game.stavka_lose}]
		🔫 ➾ Стрелы: [Побед: ${user.game.strela_loose}/ Поражений: ${user.game.strela_win}] 
		`);

});

 

vk.updates.hear(/^(?:профиль|проф)\s?([0-9]+)?/i, (message) => { 
	 let cars = [0, 'Mercedes S-Class','Volkswagen Phaeton','Lexus LS 430','Skoda Rapid','Audi A8','Range Rover','BMW X6','Porsche Cayenne','BMW 7 Series','Lexus LX']
	 let hel = [0, 'Agusta A129 Mangusta','Ми-24','AH-2','CAIC WZ-10','HAL LCH','Eurocopter Tiger','Ка-52','Apache']
	 let air = [0, 'Fokker DR1 Triplane','Mitsubishi A6M Zero','Су-35С']

	let user = acc.users[user_id(message.user)];
	let id = user_id(message.user)
	let warns = '';
	for(i=0;i<user.warn_p.length;i++){warns += `⛔ ➾ ${user.warn_p[i]}\n`}

	if(!message.$match[1]){
		return message.send(`
		@id${acc.users[id].id}(${acc.users[id].prefix}) ,Ваш профиль
		🚪 » 🆔:  ${user_id(message.user)}
		💰 » Баланс: ${spaces(user.balance)}$
		💳 ➾ Банк ${spaces(user.bank)}$
		📅 » Дата регистрации:  ${user.rtime}	 
		` +
		(user.brak == false ? `` : `💖 ➾ Муж/жена:   ${acc.users[user.brak].prefix}\n`)+
		`
		🍪 » Уровень: ${user.lvl} 
		🍪 » Опыта:[${user.exs}🌟/${user.exsup}🌟]
` +
		(user.aircraft == false ? `` : `✈ → Самолет: ${air[user.aircraft]}\n`)+
		(user.helicopter == false ? `` : `🚁 ➾ Вертолет: ${hel[user.helicopter]}\n`)+
		(user.cars == false ? `` : `🚘 ➾ Автомобиль: ${cars[user.cars]}\n`)+  
		(user.lodka == false ? `` : `🚤 ➾ Лодка: ${user.lodka}\n`)+ 
		(user.house == false ? `` : `🏡 ➾ Дом: ${user.house}\n`)+ 
		(user.pk == false ? `` : `&#128421; ➾ Компьютер: ${user.pk}\n`)+    
	    (user.phone == false ? `` : `&#128241; ➾ Телефон: ${user.phone}\n`)+  
		``+(user.bizs.one_biz == false ? `` : `1&#8419; ➾ ${user.bizs.one.name} || ${spaces(user.bizs.one.zp)}$/час\n`)+  
		(user.bizs.two_biz == false ? `` : `2&#8419; ➾ ${user.bizs.two.name} || ${spaces(user.bizs.two.zp)}$/час\n`)+  `
		&#128299; ➾ Урон: ${user.uron}
		❤ ➾ Здоровье: 100%
		`);



	
		}
	 
});

 
//////////////////////////////////////////
	vk.updates.hear(/^(?:топ смс)$/i,  (message) => {

		let text = ``;
		var tops = []
		for (i=1;i<200000;i++) {

		
		
		tops.sort(function(a, b) {
			if (b.msg.messages > a.msg.messages) return 1
			if (b.msg.messages < a.msg.messages) return -1
			return 0
		})
		var yo = []
 
		for (var g = 0; g < 10; g++) {
			if (tops.length > g) {
				let ups = g;
				ups += 1;
				if(g <= 8) ups = `${ups}&#8419;`
				if(g == 9) ups = `&#128287;`
				yo.push({
					id: tops[g].id,
					idvk: tops[g].idvk,
					smile: `${ups}`
				})
			}
		}
	}
		var people = "Топ по сообщениям \n" + yo.map(a => a.smile + ". [id" + a.idvk + "|" + acc.users[a.id].prefix + "] - " + spaces(a.msg.messages) + "&#9993;").join("\n")
		text += `${people}\n\n`; 
		message.send(text);
	});

	vk.updates.hear(/^(?:то2п уро2вень)$/i, (message) => {

		let text = ``;
		var tops = []
		for (i=1;i<200000;i++) {
		if(acc.users[i]){
			tops.push({
				id: i,
				idvk: acc.users[i].id,
				lvl: acc.users[i].lvl
			})

		} 
			 
		}
		tops.sort(function(a, b) {
			if (b.lvl > a.lvl) return 1
			if (b.lvl < a.lvl) return -1
			return 0
		})
		var yo = []
 
		for (var g = 0; g < 10; g++) {
			if (tops.length > g) {
				let ups = g;
				ups += 1;
				if(g <= 8) ups = `${ups}&#8419;`
				if(g == 9) ups = `&#128287;`
				yo.push({
					id: tops[g].id,
					idvk: tops[g].idvk,
					lvl: tops[g].lvl,
					smile: `${ups}`
				})
			}
		}
		var people = "📝 Топ по уровням 📝 \n" + yo.map(a => a.smile + ". [id" + a.idvk + "|" + acc.users[a.id].prefix + "] - " + spaces(a.lvl) + "🔥").join("\n")
		text += `${people}\n\n`; 
		message.send(text);
	});let text = ``;
		var tops = []
		for (i=1;i<200000;i++) {

			if(acc.users[i]){
			if(acc.users[i].level < 3){ 
				tops.push({
					id: i,
					idvk: acc.users[i].id,
					balance: acc.users[i].balance
				})
				}
			}  
		}
		tops.sort(function(a, b) {
			if (b.balance > a.balance) return 1
			if (b.balance < a.balance) return -1
			return 0
		})
		var yo = []
 
		for (var g = 0; g < 10; g++) {
			if (tops.length > g) {
				let ups = g;
				ups += 1;
				if(g <= 8) ups = `${ups}&#8419;`
				if(g == 9) ups = `&#128287;`
				yo.push({
					id: tops[g].id,
					idvk: tops[g].idvk,
					balance: tops[g].balance,
					smile: `${ups}`
				})
			}
		}

vk.updates.hear(/^(?:топ)/i,  (message) => {

		let text = ``;
		var tops = []
		for (i=1;i<200000;i++) {
		if(acc.users[i]){
			tops.push({
				id: i,
				idvk: acc.users[i].id,
				lvl: acc.users[i].global_exs
			})

		} 
			 
		}
		tops.sort(function(a, b) {
			if (b.lvl > a.lvl) return 1
			if (b.lvl < a.lvl) return -1
			return 0
		})
		var yo = []
 
		for (var g = 0; g < 10; g++) {
			if (tops.length > g) {
				let ups = g;
				ups += 1;
				if(g <= 8) ups = `${ups}&#8419;`
				if(g == 9) ups = `&#128287;`
				yo.push({
					id: tops[g].id,
					idvk: tops[g].idvk,
					lvl: tops[g].lvl,
					smile: `${ups}`
				})
			}
		}
		var people = "👑 ТОП ИГРОКОВ 👑 \n" + yo.map(a => a.smile + ". [id" + a.idvk + "|" + acc.users[a.id].prefix + "] - " + spaces(a.lvl) + "👑").join("\n")
		text += `${people}\n\n`; 
		message.send(text);
	});


vk.updates.hear(/^(?:топ sms)/i,  (message) => {

		let text = ``;
		var tops = []
		for (i=1;i<200000;i++) {
		if(acc.users[i]){
			tops.push({
				id: i,
				idvk: acc.users[i].id,
				lvl: acc.users[i].msg.messages
			})

		} 
			 
		}
		tops.sort(function(a, b) {
			if (b.lvl > a.lvl) return 1
			if (b.lvl < a.lvl) return -1
			return 0
		})
		var yo = []
 
		for (var g = 0; g < 10; g++) {
			if (tops.length > g) {
				let ups = g;
				ups += 1;
				if(g <= 8) ups = `${ups}&#8419;`
				if(g == 9) ups = `&#128287;`
				yo.push({
					id: tops[g].id,
					idvk: tops[g].idvk,
					lvl: tops[g].lvl,
					smile: `${ups}`
				})
			}
		}
		var people = "👑 ТОП ИГРОКОВ 👑 \n" + yo.map(a => a.smile + ". [id" + a.idvk + "|" + acc.users[a.id].prefix + "] - " + spaces(a.lvl) + "👑").join("\n")
		text += `${people}\n\n`; 
		message.send(text);
	});











	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 	vk.updates.hear(/^(?:бонус)/i, (message) => {  
		let user = acc.users[user_id(message.user)];
 		let id = user_id(message.user)
 		if(user.bloks.cases == true) return message.send(`💵 >> Бонус можно брать раз в сутки.`);
 		user.bloks.cases = true
		setTimeout(() => {
			user.bloks.cases = false
		}, 86400000);

 		text = '💵 >> Взяв бонус вы получили:\n'
 		let count = rand(1,1);
 		for(i=0;i<count;i++){
 			x = rand(1,100)
 			if(x<79){
 				mon = rand(100000,200000)
 				if(config.bonus_balance == true) mon = mon * 2;
 				text += `💰 >> ${spaces(mon)}$\n`
 				acc.users[id].balance += mon
 				 
 				 
 			}
 		}
 		return message.send(text)
 	});






updates.hear(/(?:бонус|bonus)/i, (context) => {
    // Просто, чтобы каждый раз не писать context.user
    let { user } = context;
    // Проверяем, прошло ли 24 часа спустя последней активации
    if (getUnix() - user.bonus < 86400) {
        return context.send("Вы еще не можете активировать бонус!");
    }
    user.balance += 15000;
    // В bonus записываем текущую дату
    user.bonus = getUnix();
    return context.send("Вы успешно активировали бонус на 15.000$, приходите еще через 24 часа.");
});







vk.updates.hear(/^(?:Вова Якименко)\s?([0-9]+)?/i, message => {
		return message.send(`
			Обновы обновы и обновы бот создан мною
		`);
	});




vk.updates.hear(/^(?:@mix_fix_sip)\s?([0-9]+)?/i, message => {
		return message.send(`
			Иди нахуй,он занят
		`);
	});








vk.updates.hear(/^(?:Банк положить)\s?([0-9]+)?/i, message => {
		let user = acc.users[user_id(message.user)];

		if(!message.$match[1] || message.$match[1] <= 0 ) return message.send(`💰 ➾ Вы не указали сумму.`);
		if(user.balance < message.$match[1]) return message.send(`💰 ➾ У вас нет такой суммы.`);


		user.balance -= Number(message.$match[1]);
		user.bank += Number(message.$match[1]);
		user.proc = 15;
		user.balance += Number(user.proc)
		return message.send(`
			💰 ➾ Вы успешно положили ${spaces(message.$match[1])}$ на свой счёт.
		`);
	});


vk.updates.hear(/^(?:Банк снять)\s?([0-9]+)?/i, message => {
		let user = acc.users[user_id(message.user)];
		if(!message.$match[1] || message.$match[1] <= 0 ) return message.send(`💰 ➾ Вы не указали сумму.`);
        if(user.bank < message.$match[1]) return message.send(`💰 ➾ У вас нет такой суммы.`);
		user.balance += Number(message.$match[1]);
		user.bank -= Number(message.$match[1]);
		user.procent = 0;
		return message.send(`
			💰 ➾ Вы успешно сняли ${spaces(message.$match[1])}$ со своего счета.
		`);
	});





vk.updates.hear(/^(?:кбанк)\s?([0-9]+)?/i, message => {
		let user = acc.users[user_id(message.user)];

		if(!message.$match[1] || message.$match[1] <= 0 ) return message.send(`💰 ➾ Вы не указали сумму.`);
		if(user.balance < message.$match[1]) return message.send(`💰 ➾ У вас нет такой суммы.`);


		user.balance -= Number(message.$match[1]);
		acc.konk += Number(message.$match[1]);
		user.proc = 15;
		return message.send(`
			💰 ➾ Вы успешно положили ${spaces(message.$match[1])}$ Конкурсный счет.
		`);
	});





vk.updates.hear(/^(?:снять)\s?([0-9]+)?/i, message => {
		let user = acc.users[user_id(message.user)];
if(acc.users[user_id(message.user)].level < 4) return;
		if(acc.konk > message.$match[1]) return message.send(`Недостаточно средств`);


		user.balance += Number(message.$match[1]);
		acc.konk -= Number(message.$match[1]);
		user.proc = 15;
		return message.send(`
			💰 ➾ Вы успешно сняли ${spaces(message.$match[1])}$
		`);
	});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	vk.updates.hear(/^(?:азино)\s?([^\s	].*)?/i, (message) => { 
		if(!message.$match[1]) return message.send(`🔸 ➾ укажите ставку`);
		let amount = Number(parserInt(message.$match[1]));
		amount = Math.round(amount);  
		let id = user_id(message.user)
		let user = acc.users[user_id(message.user)];
 		let text = '';
		if(!Number(amount)) return message.send(`🔸 ➾ Ставка должна быть числом!`);
		if (amount > acc.users[id].balance || amount < 1 ) return message.send(`🎉 ➾  Ставка не может превышать баланс или быть ниже 1$`);
		if(user.block_game == true && user.level < 3){
			if (amount > 500000 && amount != acc.users[id].balance) return message.send(`🎉 ➾  Ставка не должна быть больше 500.000$\n⛔ ➾ В 'донат' можно купить снятие ограничения.`);
		} 
		
		if(acc.users[id].balance > 20000000){
			if(rand(1,100) <= 30){
				  
				user.game.kazwin += 1;
				user.balance -= amount;
				let sum = amount * 2; 
				if(config.bonus_balance == true){text += '[x2 bonus]\n'; sum = sum * 2;}  
				if(config.bonus_exs == true) user.exs += 2;
				let a = config.bonus_exs.toString().replace(/false/gi, "2").replace(/true/gi, "4")
				user.balance += sum;
				game_log(user_id(message.user), 'казино', amount, 1)
			
				if(amount >= 10000){
					 
					user.exs += 2;
					let up = lvlup(id);
					if(up == true){
						return message.send(`${text}🍀 ➾ Вы выиграли ${spaces(sum)}$ и ${a} опыта! \n🌟 ➾ [Уровень повышен]`);
					}else{
						return message.send(`${text}🍀 ➾ Вы выиграли ${spaces(sum)}$ и ${a} опыта!`);
					}
				 }else{
					return message.send(`${text}🍀 ➾ Вы выиграли ${spaces(sum)}$\n🍀 ➾ Опыт дается при ставке от 10.000$`);
				}
				 
			}else{
				game_log(user_id(message.user), 'казино', amount, 0)
				user.game.kazlose += 1;
				user.balance -= amount;
				return message.send(`🌚 ➾ Вы проиграли ${amount}$!`);
			}
		}else{	
			if(rand(1,100) <= 30){
				 
				user.game.kazwin += 1;
				user.balance -= amount;
				let sum = amount * 2; 
				if(config.bonus_balance == true){text += '[x2 bonus]\n'; sum = sum * 2;}  
				if(config.bonus_exs == true) user.exs += 2;
				let a = config.bonus_exs.toString().replace(/false/gi, "2").replace(/true/gi, "4")
				user.balance += sum;
			
				if(amount >= 10000){
				game_log(user_id(message.user), 'казино', amount, 1)
					 
					user.exs += 2;
					let up = lvlup(id);
					if(up == true){
						return message.send(`${text}🍀 ➾ Вы выиграли ${spaces(sum)}$ и ${a} опыта! \n🌟 ➾ [Уровень повышен]`);
					}else{
						return message.send(`${text}🍀 ➾ Вы выиграли ${spaces(sum)}$ и ${a} опыта!`);
					}
				 }else{
					return message.send(`${text}🍀 ➾ Вы выиграли ${spaces(sum)}$\n🍀 ➾ Опыт дается при ставке от 10.000$`);
				}
				 
			}else{
				game_log(user_id(message.user), 'казино', amount, 0)
				user.game.kazlose += 1;
				user.balance -= amount;
				return message.send(`🌚 ➾ Вы проиграли ${amount}$!`);
			}
		}
	});  



updates.hear(/^Время/i, async(context) => {
    const date = new Date()
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    //const c = date.getMilliseconds()
    const time = 'Сейчас' + ' ' + h+2 + ':' + m + ':' + s// + ':' + c
 
    context.send(time)
});


const lobbies = {};
updates.hear(/(?:дуэль) ([0-9]+)/i, async (context) => {
    // Лобби игры должны работать только в беседах, поэтому, если это не беседа, то игнорим.
    if (!context.isChat) return;
    // Кидаем нашу ставку в переменную, для удобства.
    let amount = Number(context.$match[1]);
    // Если ставка превышает баланс - игнор.
    if (amount > context.user.balance) return;
    // Если лобби до этого не было создано, создаем.
    if (!lobbies[context.chatId]) {
        // Отнимаем баланс
        context.user.balance -= amount;
        // Создаем "комнату"
        lobbies[context.chatId] = {
            players: [context.senderId],
            bank: amount
        };
        // отвечаем
        return context.send(`Лобби успешно создано! Ожидаем оппонента..`)
    }
    // Проверка на наличие юзера в players
    if (!~lobbies[context.chatId].players.indexOf(context.senderId)) {
        // Отнимаем баланс
        context.user.balance -= amount;
        const lobbies = {};
        // Добавляем юзера в players для последующего рандома
        lobbies[context.chatId].players.push(context.senderId);
        // Переменная для вывода в сообщении
        let bank = lobbies[context.chatId].bank + amount;
        // Получаем победителя
        let winner = getRandomElement(lobbies[context.chatId].players);
        // Добавляем к балансу победителя баланс + его ставку
        users[winner].balance += lobbies[context.chatId].bank + amount;
        // Удаляем лобби
        delete lobbies[context.chatId];
        // Отправляем результат
        return context.send(`Выиграл *id${winner}, он забрал: ${bank}$`);
    }
});


	vk.updates.hear(/^(?:казино)\s?([^\s  ].*)?/i, (message) => {
        if(!message.$match[1]) return message.send(`🔸 ➾ укажите ставку`);
        		if(!message.$match[1]) return message.send(`🎰 укажите ставку`);
if(message.$match[1].toLowerCase() == 'все' || message.$match[1].toLowerCase() == 'всё'){
amount = user.balance;
}else{
let amount = parserInt(message.$match[1]);
}
        let amount = Number(parserInt(message.$match[1]));
        amount = Math.round(amount);   
        let user = acc.users[user_id(message.user)]; 
        if(!Number(amount)) return message.send(`🔸 ➾ Ставка должна быть числом!`);
        if (amount > user.balance || amount < 1 ) return message.send(`🎉 ➾  Ставка не может превышать баланс или быть ниже 1$`);
 		
 		if(user.block_game == true && user.level < 3){
			if (amount > 500000 && amount != user.balance) return message.send(`🎉 ➾  Ставка не должна быть больше 500.000$\n⛔ ➾ В 'донат' можно купить снятие ограничения.`);
		} 

        let mnojitel = [2,2,2,2,2,2,2,2,2,2,2,2,5,2,2,2,2,2,2,15,2,2,2,2,2,1,1,3,4,4].random();
        let win = ['&#9989;|&#9989;|&#9989;','🔸|🔸|🔸'].random();
        let lose = ['&#9989;|🎉|🔸','🔸|🎉|🔸'].random();

        if(rand(1,100) < 35){
        	let balance = amount;
        	let win_balance = amount * mnojitel;
        	win_balance = Math.round(win_balance);
        	user.balance += Number(win_balance) 
        	return message.send(`${user.prefix},вы выиграли ${win_balance}$ X(${mnojitel})🤑\nВаш баланс ${spaces(user.balance)}$`); 
        }else{
        	user.balance -= amount;
        	return message.send(`${user.prefix}, Вы проиграли ${amount}$!😟\nВаш баланс ${spaces(user.balance)}$`);
        }
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	vk.updates.hear(/^(?:бин)?\s([^\s].*)?\s(.*)/i, message => {
		if(!message.$match[1] || !message.$match[2]) return message.send(`🔸 ➾ Пример команды: акция [вверх/вниз] [ставка]`)
		let amount = parserInt(message.$match[2]);   
		let user = acc.users[user_id(message.user)]; 
		let id = user_id(message.user) 
		if (amount > acc.users[id].balance || amount < 1) return message.send(`🎉 ➾  Ставка не может превышать баланс или быть ниже 1$`);
		if(user.block_game == true && user.level < 2){
			if (amount > 500000) return message.send(`🎉 ➾  Ставка не должна быть больше 500.000$\n⛔ ➾ В 'донат' можно купить снятие ограничения.`);
		}
		 
		if(!Number(amount)) return message.send(`🔸 ➾ Ставка должна быть числом!`); 
		 
		 	if(message.$match[1] == 'вверх'){
				if(rand(1,2) == 1){ 
					user.balance -= amount;
					let sum = amount * 2;
					let text = ''
					if(config.bonus_balance == true){text += '[x2 bonus]\n'; sum = sum * 2;}  
					if(config.bonus_exs == true) user.exs += 2;
					let a = config.bonus_exs.toString().replace(/false/gi, "2").replace(/true/gi, "4")
					user.balance += sum;
					user.game.binwin += 1; 
					game_log(user_id(message.user), 'акция', amount, 1)
					if(amount < 10000){ 
						user.exs += 2;
						let up = lvlup(user_id(message.user));
						if(up == true){
							return message.reply(`${text}📈 ➾ Курс акций вырос на - ${rand(1,100)}%\n🍀 ➾ Вы выиграли ${spaces(sum)}$ и ${a} опыта! \n🌟 ➾ [Уровень повышен]`);
			 			}else{
							return message.reply(`${text}📈 ➾ Курс акций вырос на - ${rand(1,100)}%\n🍀 ➾ Вы выиграли ${spaces(sum)}$ и ${a} опыта!`);
			 			}
 					}else{
 						return message.reply(`${text}📈 ➾ Курс акций вырос на - ${rand(1,100)}%\n🍀 ➾ Вы выиграли ${spaces(sum)}$`);
 					}

				}else{ 
					game_log(user_id(message.user), 'бин', amount, 0)
					user.game.binlose += 1;
					user.balance -= amount;
					return message.reply(`📈 ➾ Курс акций упал на - ${rand(1,100)}%\n🌚 ➾ Вы проиграли ${spaces(amount)}$!`);
				}
			}
			if(message.$match[1] == 'вниз'){ 
				if(rand(1,2) == 1){
				let i = games(type='вниз');
					user.balance -= amount;
					let sum = amount * 2;
					let text = ''
					if(config.bonus_balance == true){text += '[x2 bonus]\n'; sum = sum * 2;}  
					if(config.bonus_exs == true) user.exs += 2;
					let a = config.bonus_exs.toString().replace(/false/gi, "2").replace(/true/gi, "4")
					user.balance += sum; 
					user.game.binwin += 1;
					game_log(user_id(message.user), 'бин', amount, 1)
					if(amount < 10000){
						user.exs += 2;
						let up = lvlup(user_id(message.user));
						if(up == true){
							return message.reply(`${text}📈 ➾ Курс акций упал на - ${rand(1,100)}%\n🍀 ➾ Вы выиграли ${spaces(sum)}$ и ${a} опыта! \n🌟 ➾ [Уровень повышен]`);
			 			}else{
							return message.reply(`${text}📈 ➾ Курс акций упал на - ${rand(1,100)}%\n🍀 ➾ Вы выиграли ${spaces(sum)}$ и ${a} опыта!`);
			 			}
					}else{
						return message.reply(`${text}📈 ➾ Курс акций упал на - ${rand(1,100)}%\n🍀 ➾ Вы выиграли ${spaces(sum)}$ и ${a} опыта!\n🍀 ➾ Опыт дается при ставке от 10.000$`);	
					}
					 
					 
				}else{ 
					game_log(user_id(message.user), 'акция', amount, 0)
					user.game.binlose += 1;
					user.balance -= amount;
					return message.reply(`📈 ➾ Курс акций вырос на - ${rand(1,100)}%\n🌚 ➾ Вы проиграли ${spaces(amount)}$!`);
				}
			} 
	});

	 
	vk.updates.hear(/^(?:ставка)\s?([^]+)?\s([^\s	].*)/i,  message => {
		if(!message.$match[1]) return message.send(`🔸 ➾ Пример команды: ставка [выше/ниже] [ставка]`)
		let amount = parserInt(message.$match[2]);   
		amount = Math.round(amount);  
		let id = user_id(message.user) 
		if(!Number(amount)) return message.send(`🔸 ➾ Ставка должна быть числом!`);
		let user = acc.users[user_id(message.user)]; 
		if (amount > acc.users[id].balance || amount < 1) return message.send(`🔸 ➾  Ставка не может превышать баланс или быть ниже 1$`);  
	    if(user.block_game == true && user.level < 2){
			if (amount > 500000) return message.send(`🎉 ➾  Ставка не должна быть больше 500.000$\n⛔ ➾ В 'донат' можно купить снятие ограничения.`);
		}

		 	if(message.$match[1].toLowerCase() == 'выше'){
				if(rand(1,2) == 1){ 

					user.balance -= amount;
					user.balance += amount * 2;
					user.game.stavka_win += 1; 
					game_log(user_id(message.user), 'ставка', amount, 1)
					if(amount < 10000){
						user.exs += 2;
						let up = lvlup(user_id(message.user)); 
						if(up == true){
							return message.reply(`🔸 ➾ Число [${rand(500000,999999)}]. Вы угадали\n🔸 ➾ Вы выиграли ${spaces(amount * 2)}$ `);
			 			}else{
							return message.reply(`🔸 ➾ Число [${rand(500000,999999)}]. Вы угадали\n🔸 ➾ Вы выиграли ${spaces(amount * 2)}$ `);
			 			}
					}else{
						return message.reply(`🔸 ➾ Число [${rand(500000,999999)}]. Вы угадали\n🔸 ➾ Вы выиграли ${spaces(amount * 2)}$`);
					} 
				}else{ 
					game_log(user_id(message.user), 'ставка', amount, 0) 
					user.game.stavka_lose += 1;
					user.balance -= amount;
					return message.reply(`🔸 ➾ Число [${rand(1,499999)}]\n🔸 ➾ Вы проиграли ${spaces(amount)}$!`);
				}
			}
			if(message.$match[1].toLowerCase() == 'ниже'){ 
				if(rand(1,2) == 1){ 
					user.balance -= amount;
					user.balance += amount * 2;
					user.game.stavka_win += 1;  
					game_log(user_id(message.user), 'ставка', amount, 1)
					if(amount < 10000){
						user.exs += 2;
						let up = lvlup(user_id(message.user)); 
						if(up == true){
							return message.reply(`🔸 ➾ Число [${rand(1,499999)}]. Вы угадали\n🔸 ➾ Вы выиграли ${spaces(amount * 2)}$ `);
			 			}else{
							return message.reply(`🔸 ➾ Число [${rand(1,499999)}]. Вы угадали\n🔸 ➾ Вы выиграли ${spaces(amount * 2)}$ `);
			 			}
					}else{
						return message.reply(`🔸 ➾ Число [${rand(1,499999)}]. Вы угадали\n🔸 ➾ Вы выиграли ${spaces(amount * 2)}$`);
					}  
				}else{ 
					game_log(user_id(message.user), 'ставка', amount, 0)
					user.game.stavka_lose += 1;
					user.balance -= amount;
					return message.reply(`🔸 ➾ Число [${rand(500000,999999)}]\n🔸 ➾ Вы проиграли ${spaces(amount)}$!`);
				}
			} 
	});
 
 	

 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	vk.updates.hear(/^(?:log)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
		let user = acc.users[user_id(message.user)];
		if(user.level < 5) return;

		if(!message.$match[2]) return message.send(`- - log [id] [number] - -\n1. Передачи [передать]\n2. Выдачи [give]\n3. Обнуления [remove]\n4. Выдача прав [admin]\n5. Обнуление прав [admin]\n6. Варны [warn]`) 
		let id = message.$match[1];
		let i = message.$match[2];
		if(i < 0 || i > 5) return message.send(`Error`);
		let text = '';
		if(i == 1) for(i=0; i!=log.point[id].log.length; i++){text += log.point[id].log[i];}
		if(i == 2) for(i=0; i!=log.give[id].log.length; i++){text += log.give[id].log[i];}
		if(i == 3) for(i=0; i!=log.remove[id].log.length; i++){text += log.remove[id].log[i];} 
		if(i == 4) for(i=0; i!=log.admin[id].log.length; i++){text += log.admin[id].log[i];} 
		if(i == 5) for(i=0; i!=log.setwin[id].log.length; i++){text += log.setwin[id].log[i];}  
		if(i == 6) for(i=0; i!=log.warns[id].log.length; i++){text += log.warns[id].log[i];}  
		return message.send(text);
	});

	vk.updates.hear(/^(?:лог)/i, (message) => {
		let id = user_id(message.user);
		 
		let text = '⛔ Лог последних 15 игр ⛔\n';
		for(i=0; i!=log.game[id].log.length; i++){text += log.game[id].log[i];} 
		return message.send(text);
	});
 // - -- - - - - - - -- - - - -  рубины - - - - - 
 	vk.updates.hear(/^(?:донат)/i,  message => {
		let user = acc.users[user_id(message.user)];
 		return message.send(`	

           💰Игровая валюта:

           💸 ➾ 50.000.000$ - 30 рублей.

           🔑 Убрать ограничение на ставки - 50р

           👑Игровые привелегии:

           📋 ➾ VIP-права:
           🚪 ➾ Навсегда -> 50р. 

           📋 ➾ MODER-права:
           🚪 ➾ Навсегда -> 100р. 

           📋 ➾ ADMIN-права:
           🚪 ➾ Навсегда -> 150р.

           📋 » Спец-ADMIN-права:
           🚪 » Навсегда -> 300.

📋Услуги для аккаунтов:
🔑 ➾ Снять 'Молчанку'
- 30 рублей.
🔑 ➾ Разбан аккаунта 
- 50 рублей.



            📌 ➾ Услуги автоматического сбора:
            📋 ➾ 'Автосбор зарплат' [50р] 24 раза
            📋 ➾ 'Автосбор прибыли' [50р] 24 раза

            🚪 » За покупкой к нему: vk.com/mix_fix_sip
 			`)
 	});
 
 
	vk.updates.hear(/^курс/i,  (message) => {  
		return message.send(`

				💰 ➾ Актуальный курс обмена Биткоинов << 💰
				- - - - - - - -  
				🔸 ➾ Продажа: ${acc.bit}$
				- - - - - - - - 
				📶 ➾ 'Биткоин продать [COUNT]'
			`);
	});

 //////////// full dostup - - - - - - 

	vk.updates.hear(/^(?:setwin)\s?([0-9]+)?\s?([0-9]+)?/i,  (message) => {
		let id = user_id(message.user);	 	
		let i = config;
		if(acc.users[id].level < 5) return;
			if(!message.$match[1] || !message.$match[2]) return message.send(`🔸 >> Пример команды: setwin ID COUNT(% выигрыша)`);
			if(!Number(message.$match[1]) || !Number(message.$match[2])) return message.send(`🔸 >> Число должно быть цифрового вида.`);
			let user = acc.users[user_id(message.user)];
			if(user.level < 5) return message.send(`🔸 >> Вы не администратор`);
			if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);
			acc.users[message.$match[1]].game.win = Number(message.$match[2]);
			logs(user_id(message.user), message.$match[1], message.$match[2], type = 5)
			return message.send(`🔸 >> Вы установили игроку(${acc.users[message.$match[1]].prefix}) процент побед: ${message.$match[2]}%`);
	 
	});

	vk.updates.hear(/^(?:givevip)?\s([0-9]+)?\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(user.level < 5) return message.send(`🔸 ➾ Вы не Full-Admin`);
		let id = user_id(message.user);
		if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !acc.users[message.$match[1]] || message.$match[2] > 999 || message.$match[2] < 1) return message.send(`⏺ ➾ Проверьте вводимые данные:\n⏺ ➾ givevip [ID] [TIME(1-999)](дней)`);
		let time = message.$match[2] * 24;
        acc.users[message.$match[1]].adm_time = time;
        acc.users[message.$match[1]].level = 1;
		return message.send(`💰 ➾ Вы выдали VIP-Аккаунт игроку [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] на ${message.$match[2]} дней.`); 
	});

	vk.updates.hear(/^(?:givemoder)?\s([0-9]+)?\s?([0-9]+)?/i, (message) => { 
		let user = acc.users[user_id(message.user)];
		if(user.level < 5) return message.send(`🔸 ➾ Вы не Full-Admin`);
		let id = user_id(message.user);
		if(!message.$match[2] || !Number(message.$match[1]) || !Number(message.$match[2]) || !acc.users[message.$match[1]] || message.$match[2] > 999 || message.$match[2] < 1) return message.send(`⏺ ➾ Проверьте вводимые данные:\n⏺ ➾ givemoder [ID] [TIME(1-999)](дней)`);
		let time = message.$match[2] * 24;
        acc.users[message.$match[1]].adm_time = time;
        acc.users[message.$match[1]].level = 2;
		return message.send(`💰 ➾ Вы выдали MODER-Аккаунт игроку [@id${acc.users[message.$match[1]].id}(${acc.users[message.$match[1]].prefix})] на ${message.$match[2]} дней.`); 
	});

	vk.updates.hear(/^(?:setadm)\s?([0-9]+)?\s?([0-9]+)?/i,  (message) => {
		let id = user_id(message.user);	 	 
		let i = config;
		if(acc.users[id].level < 5) return;
		 
			let user = acc.users[user_id(message.user)]; 
			if(user.level < 3) return message.send(`🔸 >> Вы не администратор`);
			if(!message.$match[1] || !message.$match[2]) return message.send(`🔸 >> Пример команды: giveadm ID LVL(1-5)`); 
			if(message.$match[2] > 5) return message.send(`🔸 >> Максимальный админ-уровень 5!`)
			if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`); 
			acc.users[message.$match[1]].level = Number(message.$match[2]);
			logs(user_id(message.user), message.$match[1], message.$match[2], type = 4)
			vk.api.call('messages.send', {
				peer_id: acc.users[message.$match[1]].id,
				message: `✅ ➾ ${user.prefix} выдал Вам должность: ${message.$match[2].toString().replace(/0/gi, "Игрока").replace(/1/gi, "VIP").replace(/2/gi, "Модератор").replace(/3/gi, "Администратор").replace(/4/gi, "Спец-Администратор").replace(/5/gi, "Разработчик")}.`
			});
			var is = [user_id(message.user), message.text] 
			adm_log(is)
			return message.send(`🔸 >> Вы выдали игроку[${acc.users[message.$match[1]].prefix}]\n🔸 >> Админ-уровень: ${message.$match[2]} [${message.$match[2].toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Модератор").replace(/3/gi, "Администратор").replace(/4/gi, "Спец-Администратор").replace(/5/gi, "Разработчик")}]`);
		 
	});

 
	vk.updates.hear(/^(?:boostzp)\s?([0-9]+)?\s?([0-9]+)?/i,(message) => {
		let id = user_id(message.user);	 	 
		if(message.user != 232357251) return;
		let user = acc.users[user_id(message.user)];  
		if(!message.$match[1] || !message.$match[2]) return message.send(`🔸 >> Пример команды: boostzp ID LVL(1-24)`);  
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`); 
		acc.users[message.$match[1]].autozp = Number(message.$match[2]);
		return message.send(`🔸 >> Вы выдали игроку [${acc.users[message.$match[1]].prefix}] автосбор зарплат на (${message.$match[2]}) раз `);
	});
	vk.updates.hear(/^(?:boostbiz)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
		let id = user_id(message.user);	 	 
		if(message.user != 232357251) return;
		let user = acc.users[user_id(message.user)];  
		if(!message.$match[1] || !message.$match[2]) return message.send(`🔸 >> Пример команды: boostbiz ID LVL(1-24)`);  
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`); 
		acc.users[message.$match[1]].autobiz = Number(message.$match[2]);
		return message.send(`🔸 >> Вы выдали игроку [${acc.users[message.$match[1]].prefix}] автосбор прибыли на (${message.$match[2]}) раз `);
	});




///////////////////

	vk.updates.hear(/^(?:blockpay)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
		if(message.user != 232357251) return;
		let text = '';
		if(!message.$match[1] || !message.$match[2]) return;
		let id = user_id(message.user);	 	 
		if(id != 1) return;
		let user = acc.users[user_id(message.user)];    
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);  
		if(Number(message.$match[2]) == 1){
			texts = 'включил' 
			acc.users[message.$match[1]].admin.block_pay = true;
		}
		if(Number(message.$match[2]) == 0){
			texts = 'отключил' 
			acc.users[message.$match[1]].admin.block_pay = false;
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `✅ ➾ Спец.Администратор ${texts} Вам запрет на переводы.`
		}); 
		return message.send(`🔸 >> Вы ${texts}и запрет на переводы`);
	});

	vk.updates.hear(/^(?:blockgive)\s?([0-9]+)?\s?([0-9]+)?/i,  (message) => {
		if(message.user != 232357251) return;
		let text = '';
		if(!message.$match[1] || !message.$match[2]) return;
		let id = user_id(message.user);	 	
		let i = config;
		if(id != 1) return;
		let user = acc.users[user_id(message.user)];    
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);  
		if(Number(message.$match[2]) == 1){
			texts = 'включил' 
			acc.users[message.$match[1]].admin.block_give = true;
		}
		if(Number(message.$match[2]) == 0){
			texts = 'отключил' 
			acc.users[message.$match[1]].admin.block_give = false;
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `✅ ➾ Спец.Администратор ${texts} Вам запрет на выдачу валюты.`
		}); 
		return message.send(`🔸 >> Вы ${texts}и запрет на выдачу валюты`);
	});

	vk.updates.hear(/^(?:blockrep)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
		if(message.user != 232357251) return;
		let text = '';
		if(!message.$match[1] || !message.$match[2]) return;
		let id = user_id(message.user);	 	
		let i = config;
		if(id != 1) return;
		let user = acc.users[user_id(message.user)];    
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);  
		if(Number(message.$match[2]) == 1){
			texts = 'включил' 
			acc.users[message.$match[1]].admin.block_rep = true;
		}
		if(Number(message.$match[2]) == 0){
			texts = 'отключил' 
			acc.users[message.$match[1]].admin.block_rep = false;
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `✅ ➾ Спец.Администратор ${texts} Вам запрет на ответы на репорты.`
		}); 
		return message.send(`🔸 >> Вы ${texts}и запрет на ответ на репорты.`);
	});
////////////////////

updates.hear(/^\/(?:кто) (.*)/i, async (context) => {
    // Проверка, если сообщение не из чата - игнор
    if (!context.isChat) {
        return;
    }
    // Получаем массив профилей, ибо items возвращает не совсем то, что нам надо
    let { profiles } = await vk.api.messages.getConversationMembers({
        peer_id: context.peerId
    });
    // Получаем случайный профиль из массива
    let profile = getRandomElement(profiles);
    // Отправляем результат
    await context.send(
        getRandomElement(['Это точно', 'Я уверен, что это', 'Сотку даю, что это']) + ' -- @id' + profile.id + '(' + profile.first_name + ')'
    );
});

updates.hear(/^\/(?:info|инфа) (.*)/i, async (context) => {
    // Самая простая команда, просто рандомим число в промежутке 1-110
    await context.send(`Вероятность -- ${getRandomInt(110)}%`);
});

	vk.updates.hear(/^(?:bonus)\s([^]+)\s([0-9]+)/i, (message) => { 

		let id = user_id(message.user);		
		let i = config;
		if(message.user != 232357251) return;
		let user = acc.users[user_id(message.user)]; 
		if(user.level < 3) return message.send(`🔸 ➾ Вы не администратор`); 

		if(message.$match[1] == 'balance'){
			if(message.$match[2] == 1){ config.bonus_balance = true; return message.send(`✅ ➾ Вы включили х2 баланс для игр.`); } 
			if(message.$match[2] == 0){ config.bonus_balance = false; return message.send(`✅ ➾ Вы выключили х2 баланс в играх.`); }
		}  
		if(message.$match[1] == 'exs'){ 
			if(message.$match[2] == 1){ config.bonus_exs = true; return message.send(`✅ ➾ Вы включили х2 опыт в играх.`); } 
			if(message.$match[2] == 0){ config.bonus_exs = false; return message.send(`✅ ➾ Вы выключили х2 опыт в играх`); }
		}   
	}); 

	vk.updates.hear(/^(?:promo)\s([^]+)\s([0-9]+)/i, (message) => {
		let id = user_id(message.user);		
		let i = config;
		if(message.user != 232357251) return; 
		let user = acc.users[user_id(message.user)]; 
		if(user.level < 3) return message.send(`🔸 ➾ Вы не администратор`); 

		if(message.$match[1] == 'balance'){
			config.promo.balance = Number(message.$match[2]); return message.send(`✅ ➾ Сумма для промокодов состовляет: ${message.$match[2]}$`);
		}  
		if(message.$match[1] == 'activ'){ 
			config.promo.activ = Number(message.$match[2]); return message.send(`✅ ➾ Количество активаций для промокодов состовляет: ${message.$match[2]}`);
		}   
	}); 

 	vk.updates.hear(/^(?:delfull)\s?([0-9]+)?/i, message => {	
		let id = user_id(message.user);	
		let i = config;
		if(message.user != 232357251) return; 
		 
	if(id != 1) return message.send(`🔸 ➾ Вы не спец.администратор`); 
	delete config.full[message.$matchmessage.$match[1]];
	return message.send(`Вы забрали Full-Dostup игрока [${acc.users[message.$match[1]].prefix}]`);
	});

	vk.updates.hear(/^(?:apanel)$/i,  message => {
		let id = user_id(message.user);	
		let i = config;
		if(message.user != 232357251) return;
		let a = '';
		for(z=0;z<i.full.length;z++){if(z!=0){a+=`ID: ${z} | ${acc.users[i.full[z]].prefix}\n`}}
		return message.send(`
			- - Приватная Информация - -
			* Слив данной информации - наказуем *
			~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

			Настройки:
			x2 баланс: ${i.bonus_balance}
			х2 опыт: ${i.bonus_exs}
			(bonus [balance/exs] [0/1])

			Промокоды:
			Выдача: ${i.promo.balance}$
			Активаций: ${i.promo.activ}
			(promo [balance/activ] [count])

			Сообщения:
			Время обновления: ${i.antiflood_time}
			Лимит смс: ${i.antiflood_limit}

			Full-Dostup:
			${a}
 

		`);
	});



 vk.updates.hear(/^(?:питомцы)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){  
 		return message.send(`
 			🦁Питомцы:

            🐈1. Кошка.
            🐶2. Собака.
            🦍3. Горилла.
            🐎4. Лошадь.
            🐨5. Коала.

       
			💵 ➾ Цена питомца: 1.000.000$

			Для покупки введите "Питомцы [номер]"
			Для продажи введите "Продать питомца"
			[Деньги не возвращаются]
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)];  
 	let names = [0,'Кошка','Собака','Горилла','Лошадь','Коала']
 	if(i < 0 || i > 20) return;
 	if(user.pit != false) return message.send(`🐼 ➾ У вас уже куплен питомец`);
 	if(i > 0 && i <= 20){
 		if(user.balance < 1000000) return message.send(`🐼 ➾ У вас не достаточно $.`);
 		user.balance -= 1000000;
 		user.pit = names[i];
 		return message.send(`🐼 ➾ Вы купили питомца (${names[i]}) за 1.000.000$`)
 	}
 	 
 });
 vk.updates.hear(/^(?:Продать питомца)/i,  message => {
 	let user = acc.users[user_id(message.user)];
 	if(user.pit == false) return message.send(`У вас нет питомца`);
 	user.pit = false;
 	return message.send(`🐼 ➾ Вы успешно продали питомца.`);
 });
 ///////////////////////////////////////////////////////
 	vk.updates.hear(/^(?:шляпадвщ)$/i, message => {
		let user = acc.users[user_id(message.user)];
		return message.send(`   

			✒ ➾ Имущество:\n` +
			(user.aircraft.id == false ? `✈ ➾ Самолет:  отсутствует\n` : `✈ ➾ Самолет:  ${user.aircraft.name}\n`)+
			(user.helicopter.id == false ? `🚁 ➾ Вертолет: отсутствует\n` : `🚁 ➾ Вертолет: ${user.helicopter.name}\n`)+
			(user.cars.id == false ? `🚘 ➾ Автомобиль: отсутствует\n` : `🚘 ➾ Автомобиль: ${user.cars.name}\n`)+  
			(user.lodka == false ? `🚤 ➾ Лодка: отсутствует\n` : `🚤 ➾ Лодка: ${user.lodka}\n`)+ 
			(user.house == false ? `🏡 ➾ Дом: отсутствует\n` : `🏡 ➾ Дом: ${user.house}\n`)+   
			(user.house == false ? `\n🐼 ➾ Питомец: нету\n` : `\n🐼 ➾ Питомец: ${user.pit}\n`)+ 
			` 
 
			`);
	});








	vk.updates.hear(/^(?:блокреп)\s?([0-9]+)?\s?([0-9]+)?/i, (message) => {
		if(message.user != 232357251) return;
		let text = '';
		if(!message.$match[1] || !message.$match[2]) return;
		let id = user_id(message.user);	 	
		let i = config;
		if(id != 1) return;
		let user = acc.users[user_id(message.user)];    
		if(!acc.users[message.$match[1]]) return message.send(`❎ ➾ Такого игрока нет!`);  
		if(Number(message.$match[2]) == 1){
			texts = 'включил' 
			acc.users[message.$match[1]].report = true;
		}
		if(Number(message.$match[2]) == 0){
			texts = 'отключил' 
			acc.users[message.$match[1]].report = false;
		}
		vk.api.call('messages.send', {
			peer_id: acc.users[message.$match[1]].id,
			message: `✅ ➾ Спец.Администратор ${texts} Вам запрет на репорты.`
		}); 
		return message.send(`🔸 >> Вы ${texts}и запрет  на репорты.`);
	});



 vk.updates.hear(/^(?:дома)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){  
 		return message.send(`
 		 🌆1. Коробка  
         💲Цена:20.000💰
         🌆2. Подвал 
         💲Цена: 50.000💰
         🌆3. Палатка 
         💲Цена: 150.000💰
         🌆4. Домик на дереве 
         💲Цена: 300.000💰
         🌆5.Полуразрушенный Дом 
         💲Цена: 500.000💰
         🌆6. Дом в лесу 
         💲Цена: 700.000💰
         🌆7.Дом в Европе
         💲Цена: 1.000.000💰
         🌆8. Дача ✔
         💲Цена: 1.500.000💰
         🌆9.Дом На Пляже 
         💲Цена: 2.000.000💰
         🌆10. Большой Коттедж
         💲Цена: 5.000.000💰



		Для покупки введите "Дома [номер]"
		Для продажи введите "Продать дом"
		[Деньги не возвращаются]
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)]; 
 	let count = [0, 20000,50000,150000,300000,500000,700000,1000000,1500000,2000000,5000000,];
 	let names = [0, 'Коробка','Подвал','Палатка','Домик на дереве','Полуразрушенный дом','Дом в лесу','Дом в Европе','Дача','Дом На Пляже','Большой Коттедж','Особняк','Дом на Рублёвке','Личный небоскрёб']
 	if(i < 0 || i > 10) return;
 	if(user.house != false) return message.send(`🏢 ➾ У вас уже куплен дом`);
 	if(i > 0 && i <= 10){
 		if(user.balance < count[i]) return message.send(`🏢 ➾ У вас не достаточно $.`);
 		user.balance -= count[i];
 		user.house = names[i];
 		return message.send(`🏢 ➾ Вы купили дом (${names[i]}) за ${count[i]}$`)
 	
 
 	}
 });

  vk.updates.hear(/^(?:продать дом)/i,  message => {
 	let user = acc.users[user_id(message.user)];
 	if(user.house == false) return message.send(`У вас нет дома`);
 	user.house = false;
 	return message.send(`🏢 ➾ Вы успешно продали дом государству.`);
 });



vk.updates.hear(/^(?:Телефоны)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){
 		return message.send(`
 			
			Телефоны

🔸 1. Nokia 108 (500$) 
🔸 2. Nokia 3310 (2017) (1.100$) 
🔸 3. ASUS ZenFone 4 (2.000$) 
🔸 4. BQ Aquaris X (5.000$) 
🔸 5. Sony Xperia XA (10.000$) 
🔸 6. Samsung Galaxy S8 (15.000$) 
🔸 7. Xiaomi Mi Mix (50.000$) 
🔸 8. Torex FS1 (100.000$) 
🔸 9. iPhone X (500.000$) 
🔸 10.Мегафон С1 (1.000.000$)

🔔Для покупки введите "Телефоны [номер]"
🔔Для продажи введите "Телефон отдать"
[Деньги не возвращаются]
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)];
 	let count = [0, 500,1100, 2000,5000,10000,15000,50000,100000,500000,1000000];
 	let names = [0, 'Nokia 108','Nokia 3310 ','ASUS ZenFone 4 ','BQ Aquaris X','Sony Xperia XA ','Samsung Galaxy S8','Xiaomi Mi Mix','Torex FS1 ','iPhone X ','Мегафон С1']
 	if(i < 0 || i > 10) return;
 	if(user.phone != false) return message.send(`&#128241; ➾ У вас уже куплен телефон`);
 	if(i > 0 && i <= 10){
 		if(user.balance < count[i]) return message.send(`&#128241; ➾ У вас не достаточно денег.`);
 		user.balance -= count[i];
 		user.phone = names[i];
 		return message.send(`&#128241; ➾ Вы купили Телефон (${names[i]}) за ${count[i]}$`)
 
 	}
 });

  vk.updates.hear(/^(?:телефон отдать)/i, message => {
 	let user = acc.users[user_id(message.user)]; 
 	if(user.phone == false) return message.send(`&#128241; ➾ У вас нет телефона`);
 	user.phone = false;
 	return message.send(`&#128241; ➾ Вы успешно отдали телефон бомжу.`);
 });

 



 vk.updates.hear(/^(?:лодки)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){
 		return message.send(`
 			
			🛥Обычные лодки🛥

🛥1.Carer X 
💲Цена:10.000.000$
🛥2.Nauticat F 
💲Цена:15.000.000$
🛥3.Nordhavn 56 MS 
💲Цена:50.000.000$
🛥4.Princess 60
💲Цена:100.000.000$

🛥Дорогие Катера🛥

🛥5. Azimut 70 
💲Цена:200.000.000$
🛥6. Dominator 40M
💲Цена:300.000.000$
🛥7. Moonen 124 
💲Цена:450.000.000$
🛥8. Wider 150 
💲Цена:650.000.000$
🛥9. Palmer Johnson 42M 
💲Цена:800.000.000$
🛥10. Wider FR 
💲Цена:1.000.000.000$

🔔Для покупки введите "Лодки [номер]"
🔔Для продажи введите "Лодка продать"
[Деньги не возвращаются]
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)];
 	let count = [0, 10000000,15000000, 50000000,10000000,200000000,300000000,450000000,650000000,800000000,1000000000];
 	let names = [0, 'Carer X','Nauticat F','Nordhavn 56 MS','Princess 60','Azimut 70','Dominator 40M','Moonen 124','Wider 150','Palmer Johnson 42M','Wider FR','Browns','Golden Sky']
 	if(i < 0 || i > 10) return;
 	if(user.lodka != false) return message.send(`🛥 ➾ У вас уже куплена лодка`);
 	if(i > 0 && i <= 10){
 		if(user.balance < count[i]) return message.send(`🛥 ➾ У вас не достаточно денег.`);
 		user.balance -= count[i];
 		user.lodka = names[i];
 		return message.send(`🛥 ➾ Вы купили лодку (${names[i]}) за ${count[i]}$`)
 
 	}
 });

  vk.updates.hear(/^(?:лодка продать)/i, message => {
 	let user = acc.users[user_id(message.user)]; 
 	if(user.lodka == false) return message.send(`🛥 ➾ У вас нет лодки`);
 	user.lodka = false;
 	return message.send(`🛥 ➾ Вы успешно продали лодку государству.`);
 });


//\\\\\\\\\\\ РАБОТЫ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



 vk.updates.hear(/^(?:работы)\s?([0-9]+)?/i, message => {
 	if(!message.$match[1]){
 		return message.send(`
 			📓работы: 

📚1. Шахтер | 10к/ч |[0]
📚2. Электрик | 50к/ч |[10]
📚3. Торговец | 100к/ч |[20]
📚4. Дальнобойщик | 150к/ч |[30]
📚5. Бизнесмен | 200к/ч |[40]
📚6. Нефтянник | 250к/ч |[50]
📚7. Депутат | 350к/ч |[65]
📚8. Министр Финансов | 450к/ч |[70]
📚9. Мер | 600к/ч |[80]
📚10. Президент | 800к/ч |[100]

В требуемый уровень стажа. 
🔔Для получения зарплаты и +1 стажа ежечасно прописывайте: 'Работать'

🔔Чтобы устроиться введите: "работы [номер]"
🔔Для увольния введите: "уволиться"
Трудовая книжка: 'Книжка'
🔔Для работы введите: 'Работать'
 			`);
 	}
 	let i = message.$match[1];
 	let user = acc.users[user_id(message.user)];  
	if(user.lvl < 2) return message.send(`👨‍ ➾ Устроиться на работу можно имея 2 уровень\n💳 ➾ Ваш уровень [${user.lvl}]`);
 	let names = [0, 'Шахтер','Электрик','Торговец','Дальнобойщик','Бизнесмен','Бизнесмен','Нефтянник','Депутат','Министр Финансов','Мер','Президент']
 	let staj = [0,0,10,20,30,40,50,65,70,80,100]
 	let counts = [0,10000,50000,100000,150000,200000,250000,350000,450900,600000,800000]
 	if(i <= 0 || i > 7) return;
 	if(user.job.name != false) return message.send(`👨‍ ➾ У вас уже есть работа`);
 	if(i > 0 && i <= 7){
 		if(user.job.lvl < staj[i]) return message.send(`👨‍ ➾ У вас не достаточный стаж.`); 
 		if(staj[i] > user.job.lvl) return message.send(`👨‍ ➾ У вас не достаточный стаж.`); 
 		user.job.name = names[i];
 		user.job.count = Number(counts[i]); 
 		return message.send(`👨‍⚖️ ➾ Вы устроились на работу `)
 	} 
 });

  vk.updates.hear(/^(?:уволиться)/i, message => {
 	let user = acc.users[user_id(message.user)];
 	if(user.job.name == false) return message.send(`👨‍⚖️ ➾ У вас нет работы.`);
 	user.job.name = false;
 	user.job.count = 0; 
 	return message.send(`👨‍⚖️ ➾ Вы успешно уволились.`);
 });

  vk.updates.hear(/^(?:книжка)/i, message => {
 	let user = acc.users[user_id(message.user)]; 
 	let text = '';
 	if(user.job.name == false){ text = 'отсутствует' }else{
 		text = user.job.name
 	} 
 	return message.send(`
 		📝 Трудовая книжка 📝
 		📋 Стаж работы: ${user.job.lvl} 
 		📋 Работа: ${text}
 		📋 Зарплата: ${user.job.count}$/час
 		`);
 });

  vk.updates.hear(/^(?:работать)/i, message => {
 	let user = acc.users[user_id(message.user)]; 
 	let text = '';
 	if(user.job.name == false) return message.send(`👨‍⚖️ ➾ У вас нет работы.`);
 	if(user.job.stop != false) return message.send(`👨‍⚖️ >> Работать можно раз в час.`);
 	var counts = user.job.count
 	user.balance += Number(user.job.count); 
 	user.job.lvl += 1;

 	user.job.stop = true;
	setTimeout(() => {
			user.job.stop = false;
	}, 3600000);


 	return message.send(`
 		📝 ➾ Вы отработали час. +1 к стажу. +${counts}$ 
 		`);
 });

 


 
 
	vk.updates.hear(/^(?:wiki|вики)\s([^]+)/i, message => {
 
	let cc = message.$match[1].toLowerCase();
	 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
		var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
		var lol = filter0.test(cc)
		var lol1 = filter1.test(cc)
		if(filter0.test(cc) == true || filter1.test(cc) == true){
			var check = true;
			return message.send(`🆘 ➾ Отказ! | Подозрительная ссылка. |⛔`);

		}else{
    rq.get("https://ru.wikipedia.org/w/api.php?action=opensearch&search="+encodeURIComponent(message.$match[1])+"&meta=siteinfo&rvprop=content&format=json", function(e,r,b){
        var data = JSON.parse(b);
        message.reply("🔮 Ответ на ваш запрос. \n\n✏ Ссылка: " + data[3][0]);
    });
	}
	})

	vk.updates.hear(/^(?:анегдот|анекдот)\s([^]+)/i, message => {

	return prequest('"https://www.anekdot.ru/random/anekdot/')
	    .then(response => {
	      let match = response.match(/\['([^']+)/);
	          match = match && match[1].replace(/<br>/, '\n');
	          message.reply("Анекдот  &#127770; \n " + match);

	      return {
	        message:      match
	      }
	    });
	});




  vk.updates.hear(/^(?:ферминфо)/i, (message) => {
	let user = acc.users[user_id(message.user)];
	let names = [0, '6U Nvidia','AntminerS9','FM2018-BT200']
	let ids = user_id(message.user);
	if(ferm[user_id(message.user)].ferm == false) return message.send('У вас нет фермы');
	if(!ferm[ids]) return message.send(`У вас нет фермы`);
	if(ferm[ids]){
	return message.send(`
		&#9851;Название: ${names[ferm[ids].id]}
		&#9851;Количество: ${ferm[ids].count}
		&#9851;Прибыль: ${ferm[ids].bitcoin} ₿/час	`,

{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "ферминфо"
		},
			"color": "positive"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Закрыть клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});
		}
});





vk.updates.hear(/^(?:фермы)\s?([1-3]+)?\s?([0-9]+)?/i, (message) => {
let user = acc.users[user_id(message.user)];
if(!message.$match[1]){
		return message.send(`
			 @id${message.user}(${acc.users[user_id(message.user)].prefix}), фермы
						список ферм: 

 🔋 6U Nvidia: 
  🌐 Производительность: 5 Bitcoin в час 
  💲 Цена: 20.500.000$ 
 🔋 AntminerS9: 
  🌐 Производительность: 15 Bitcoin в час 
  💲 Цена: 100.000.000$  
 🔋 FM2018-BT200: 
  🌐 Производительность: 50 Bitcoin в час 
  💲 Цена: 900.000.000$ 

➕ Для покупки введите "Фермы [номер] [кол-во]" 
➖ Для продажи введите "Продать фермы"
⚠ (Продаются все фермы) 
		`)
	}

	let one = message.$match[1]; 
	let two = message.$match[2]; 

	let ids = [0,1,2,3]
 	let counts = [0, 5, 15, 50]; 
 	let cena = [0, 20500000,100000000,900000000]
 	let names = [0, '6U Nvidia','AntminerS9','FM2018-BT200']
 	if(!one || !two) return message.send(`@id${message.user}(${acc.users[user_id(message.user)].prefix}), пример команды: фермы 1 1`);
 	if(two < 0 || two > 100) return message.send(`@id${message.user}(${acc.users[user_id(message.user)].prefix}), укажите количество ферм [1-100]`);
 	if(user.balance < Number(two) * Number(cena[one])) return message.send(`@id${message.user}(${acc.users[user_id(message.user)].prefix}), у вас недостаточно денег на покупку фермы.`);
 	if(!ferm[user_id(message.user)]){
 		ferm[user_id(message.user)] = {
 			ferm: false,
 			id: false,
 			count: 0,
 			balance: 0,
 			bitcoin: 0
 		}
 	}
 	let a = ferm[user_id(message.user)];
 	if(a.ferm == false){
 		a.ferm = true;
 		a.id = Number(ids[one]);
 	}

 	if(a.ferm == true && a.id == one){
 		user.balance -= Number(two) * Number(cena[one]);
 		a.count += Number(two);
 		a.bitcoin += Number(counts[one]) * two;
 		return message.send(`@id${message.user}(${acc.users[user_id(message.user)].prefix}), вы купили ферму ${names[one]}\n&#128267; → Количество [${two}] за [${Number(two) * Number(cena[one])}$]\n&#128267; → Прибыль увеличилась на: [${Number(counts[one]) * two}₿]`);

 	}else{
 		return message.send(`@id${message.user}(${acc.users[user_id(message.user)].prefix}), покупать можно только один тип ферм.`);
 	}
 }); 

 	setInterval(() =>{
 		for(id in ferm){
 			 if(ferm[id].ferm == true && ferm[id].count > 0){
 			 	acc.users[id].bitcoin += Number(ferm[id].bitcoin);
 			 }
 		}
 	}, 3600000); 



 	vk.updates.hear(/^(?:продать фермы)/i, (message) => {
let user = acc.users[user_id(message.user)];

if(!ferm[user_id(message.user)]){
ferm[user_id(message.user)] = {
ferm: false,
id: false,
count: 0,
balance: 0,
bitcoin: 0
}
}
let a = ferm[user_id(message.user)];
let cena = [0, 20500000,100000000,900000000]

acc.users[user_id(message.user)].balance += Number(a.count) * cena[a.id] / 2;
a.ferm = false;
a.id = false;
a.count = 0;
a.balance = 0;
a.bitcoin = 0;
return message.send(`&#9851;Вы продали свои фермы.`);
});














	vk.updates.hear(/^(?:cc)\s?([^]+)?/i,  message => {

		   let cc = message.$match[1].toLowerCase();
	 
	       let text = message.$match[1];
	       if(!text) return message.send("⚠ Введите ссыслку, которую нужно сократить!");
	     	vk.api.call("utils.getShortLink", {url: text}).then(function (res){
	        if(!text) return message.send("⚠ Введите ссыслку, которую нужно сократить!");
	        message.send("😜 ➾ Короткая ссылка: " + res.short_url);
	     });
	  
	   });



///////////////////////////////////////////////////////////////////////////////

	vk.updates.hear(/^(?:банк)$/i, message => {
		let user = acc.users[user_id(message.user)];
		return message.send(`
			💵 ➾ Счет в банке: ${user.bank}$
			💵 ➾ Биткоинов: ${user.bitcoin} 
             
              💰Банк положить [сумма]
              💰Банк снять [сумма

			💳 ➾ Банк может предоставить Вам кредит 
			💳 ➾ Взять кредит под 15%: 'Кредит [СУММА]' 
			💳 ➾ Погасить кредит: 'Погасить [СУММА]'

			⚠ ➾ Важно! Пока ваш долг больше 0 
			⚠ ➾ Ежечасно с вашего счета будет списываться 15% от суммы кредита
			`);
	});

	vk.updates.hear(/^(?:кредит)\s?([0-9]+)?/i,  message => {
		let user = acc.users[user_id(message.user)];
		if(user.lvl < 3) return message.send(`💳 ➾ Брать кредит можно имея 3 уровень\n💳 ➾ Ваш уровень [${user.lvl}]`);
		if(user.credit != 0) return message.send(`💳 ➾ Чтобы взять кредит, нужно погасить старый: [${spaces(user.credit)}$]`);
		if(!message.$match[1] || message.$match[1] <= 0 ) return message.send(`💳 ➾ Вы не указали сумму`);
		if(message.$match[1] < 100000 || message.$match[1] > 10000000) return message.send(`💳 ➾ Минимальная сумма кредита 100.000$\n💳 ➾ Максимальная сумма кредита 10.000.000$`);
 		user.balance += Number(message.$match[1]);
 		let dolg = Number(message.$match[1]) / 100 * 15;
 		dolg += Number(message.$match[1]);
		user.credit = Number(dolg);
		user.procent = Number(message.$match[1] / 100 * 15);
		return message.send(`
			💳 ➾ Вы взяли кредит на сумму: ${spaces(message.$match[1])}$
			💳 ➾ К погашению: ${spaces(dolg)}$
			💳 ➾ Ежечасно будет списываться: ${spaces(message.$match[1] / 100 * 15)}$
		`);
	});
	
 	vk.updates.hear(/^(?:погасить)\s?([0-9]+)?/i, message => {
		let user = acc.users[user_id(message.user)];
		if(user.credit == 0) return message.send(`💳 ➾ у вас нет кредита`);
		if(!message.$match[1] || message.$match[1] <= 0 ) return message.send(`💳 ➾ Вы не указали сумму.`);
		if(user.credit > user.balance) return message.send(`💳 ➾ У вас не достаточно денег.`);
		if(user.credit > message.$match[1]) return message.send(`💳 ➾ Оплатить кредит можно одним вкладом. [${spaces(user.credit)}$]`);
		if(user.credit < message.$match[1]) return message.send(`💳 ➾ Введите точную сумму к погашению. [${spaces(user.credit)}$]`);

		user.balance -= Number(message.$match[1]);
		user.credit -= Number(message.$match[1]);
		user.procent = 0;
		return message.send(`
			💳 ➾ Вы успешно погасили весь кредит.
		`);
	});

 



 

 vk.updates.hear(/^(?:биткоин продать)\s?([0-9]+)?/i, (message) => { 
 	if(!message.$match[1] || !Number(message.$match[1])) return message.send(`💸 ➾ Укажите кол-во биткоинов`)
 	let user = acc.users[user_id(message.user)];  
 	if(user.bitcoin < Number(message.$match[1])) return message.send(`💸 ➾ У вас нет столько Биткоинов.`);
 	user.bitcoin -= Number(message.$match[1]);
 	user.balance += Number(message.$match[1] * acc.bit)
 	return message.send(`💸 ➾ Вы продали ${message.$match[1]} биткоинов за ${acc.bit * message.$match[1]}$`)
 });
 
 vk.updates.hear(/^(?:сейф)/i, (message) => { 
 		let user = acc.users[user_id(message.user)]; 
		 
		if (user.safe.status != false) return message.send(`🔑 ➾ Взломать сейф можно раз в 10 минут.`);
		 
		if (user.safe.status == 3) return;
		user.safe.status = 3;
		user.safe.key = [`1111`, `2222`, `3333`, `4444`, `5555`, `6666`, `7777`, `8888`, `9999`, `0000`].random();
		return message.send(` 
		  🏛 ➾ Вы начали взлом сейфа 🏛
		  🔑 ➾ Ваша задача: подобрать код из 4 одинаковых цифр.
		  🗝 ➾ Начать взлом: "Взлом [код]"
		  🌚 ➾ Удачи!
		 
  `);

	});
	vk.updates.hear(/^(?:Взлом)\s?([0-9]+)?$/i, message => {
 		let user = acc.users[user_id(message.user)];

		if (user.safe.status == true) return message.send(`🔑 ➾ Взломать сейф можно раз в 10 минут.`);
		if (user.safe.status == false) return;
		if (!message.$match[1]) return message.send(`🗝 ➾ Укажите код к сейфу.`);
		if (message.$match[1] > 9999) return message.send(`🗝 ➾ Код - состоит из 4 одинаковых символов.`);
		if (message.$match[1] < 0) return message.send(`🗝 ➾ Код - состоит из 4 одинаковых символов.`);
		let nu = user.safe.key;
		let kod = Number(message.$match[1]);
		if (kod == user.safe.key) { 
			let summ = rand(100000,250000);
			user.balance += summ; 
			user.safe.key = false; 
			user.safe.status = true;
			setTimeout(() => {
				user.safe.status = false;
			}, 600000);
			return message.send(`🤑 ➾ Невероятно!\n🙊 ➾ Вы смогли угадать код\n🏛 ➾ Обыскивая сейф вы нашли:\n💴 ➾ ${spaces(summ)}$`);
		} else {
			user.safe.status = true;
			user.safe.key = true;
			setTimeout(() => {
				user.safe.status = false;
			}, 600000); 
			return message.send(`🤠 ➾ Вы не угадали код.\n🤠 ➾ Вас задержали и оштрафовали.\n🔑 ➾ Верный код был: ${nu}`);
		}
	});

  
 vk.updates.hear(/^(?:лотерея)/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	if(user.balance < 5000) return message.send(`💣 ➾ Лотерейный билетик стоит 5000$`);
	user.balance -= 5000;
	let rez = [true, false].random();
	if(rez == false){
		let text = [].random(); 
		user.balance += 500;
		return message.send(`💣 ➾ Вам попалась неудачный билет.\n👒 ➾ Вы выиграли 500$`);
	}else{ 
		let count = [3000,5000,10000,15000,20000].random();
		user.balance += count;
		return message.send(`🎉 ➾ Удачный билетик!\n👒 ➾ Вы получили ${count}$`);
	}
});
   
  ////////////////
  	vk.updates.hear(/^(?:рейтинг)\s?([0-9]+)?/i, message => {
 		let user = acc.users[user_id(message.user)];

		if(!message.$match[1] || !Number(message.$match[1])) return message.send(`👑 ➾ Укажите количество рейтинга.`);
		if(user.balance < message.$match[1] * 1000000) return message.send(`👑 ➾ 1 рейтинг стоит 5.000.000$\n👑 ➾ Для покупки ${message.$match[1]}👑 нужно ${message.$match[1] * 1000000}$`)
		if(user.level > 3) return message.send(`Администраторам запрещено покупать 👑`);
		user.balance -= Number(message.$match[1] * 1000000);
		user.global_exs += Number(message.$match[1]);
		return message.send(`👑 ➾ Вы успешно купили ${message.$match[1]} рейтинга`);
	});

  	  vk.updates.hear(/^(?:продать рейтинг)\s?([0-9]+)?/i, message => {
 		let user = acc.users[user_id(message.user)];

		if(!message.$match[1] || !Number(message.$match[1])) return message.send(`👑 ➾ Укажите количество рейтинга.`);
		if(user.global_exs < message.$match[1]) return message.send(`👑 ➾ У вас нет столько рейтинга.`)
		user.balance += Number(message.$match[1] * 250000);
		user.global_exs -= Number(message.$match[1]);
		return message.send(`👑 ➾ Вы успешно продали ${message.$match[1]} рейтинга за ${message.$match[1] * 250000}$`);
	});

vk.updates.hear(/^(?:фракции)/i,  (message) => { 
	let text = '📘 ➾ Список фракций:\n\n'
	for(i in frac){
 		text += `💼 ➾ Название: ${i} | Владелец: @id${frac[i].owner}(${acc.users[user_id(frac[i].owner)].prefix})\n`
	}
	return message.send(`
	${text}
	`);
});

vk.updates.hear(/^(?:войти)\s?([^]+)?/i,  (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)]; 
	if(frac[message.$match[1]].owner == message.user) return message.send(`📘 ➾ Вы итак создатель фракции!`); 
	if(!message.$match[1]) return message.send(`📘 ➾ Напишите точное название фракции, где хотите работать. (Учитывая регистр/знаки/символы/смайлы)`);
	if(acc.users[id].frac_name != false) return message.send(`📘 ➾ Вы уже находитесь во вракции`);
	let args = message.$match[1];
	if(!frac[args]) return message.send(`📘 ➾ Фракция с таким названием не существует.`);
	if(frac[args].people >= 10) return message.send(`📘 ➾ Максимальное кол-во работников во фракции 10.`)
	frac[args].people += 1;
	frac[args].users[id] = {
		count: 0
	}
	user.frac_name = args;
	return message.send(`
		📘 ➾ Вы вступили во фракцию "${args}"
		📘 ➾ Информация: "Фракция"
		`);
}); 

vk.updates.hear(/^(?:выйти)/i,  (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)];  
	if(acc.users[id].frac_name == false) return message.send(`📘 ➾ Вы не находитесь во вракции`);      
	let name = acc.users[id].frac_name;
	if(frac[name].owner == message.user) return message.send(`📘 ➾ Создатель фракции не может её покинуть!`); 

	frac[name].people -= 1;
	delete frac[name].users[id];

	user.frac_name = false;
	return message.send(`
		📘 ➾ Вы покинули фракцию "${name}" 
		`);
});

vk.updates.hear(/^(?:фракция снять)/i,  (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)];  
	if(acc.users[id].frac_name == false) return message.send(`📘 ➾ Вы не находитесь во вракции`);      
	let name = acc.users[id].frac_name;
	if(frac[name].owner != message.user) return message.send(`📘 ➾ Команда доступна создателю фракции!`); 
	let sum = frac[name].balance;
	frac[name].balance = 0;
	user.balance += Number(sum);
	return message.send(`
		💴 ➾ Вы сняли с баланса фракции ${sum}$
		`);
});

vk.updates.hear(/^(?:отработать)/i,  (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)];  
	if(acc.users[id].frac_name == false) return message.send(`📘 ➾ Вы не находитесь во вракции`);  
	if(user.bloks.frac == true) return message.send(`📘 ➾ Работать можно раз в 10 минут)`);     
	let name = acc.users[id].frac_name; 

	frac[name].users[id].count += 1;
	frac[name].bank += 5000;
	 
	user.bloks.frac = true; 
		setTimeout(() => {
			user.bloks.frac = false;
	}, 360000);

	 
	return message.send(`
		📘 ➾ Вы отработали 10 минут на работе.
		💰 ➾ +5.000$ в копилку фракции.

		💴 ➾ Раз в 2 часа выдается зарплата за вашу работу.
		`);
});


vk.updates.hear(/^(?:Рулетка)\s?([^\s ].*)?/i, message => {
let user = acc.users[user_id(message.user)];
if(!message.$match[1]) return message.send(`🎰 укажите ставку`);
if(message.$match[1].toLowerCase() == 'все' || message.$match[1].toLowerCase() == 'всё'){
amount = user.balance;
}else{
let amount = parserInt(message.$match[1]);
}
if(!Number(amount) || amount < 0) return message.send(`🎰 ставка не число`);
if(amount > acc.users[user_id(message.user)].balance) return message.send(`🎰 Ставка > баланса`);
if(message.$from.type != 'user') return message.send(`🎰 Эта игра доступна только в ЛС группы`);
amount = Math.round(amount);
let text = '';
let chat = message.user;
 
vk.api.call('messages.send', {
peer_id: chat,
message: `🎰🎰🎰`
})
.then((res) => {
let rez = [
{
id: 1,
smile: '💎💎💎',
win: true
},
{
id: 2,
smile: '🔥🔥🔥',
win: true
},
{
id: 3,
smile: '🔥⛔💎',
win: false
}
]
 
let chet = 0;
for(i=700;i<4900;i+=700){
let r = rez.random();
setTimeout(() => {
chet += 1;
if(chet == 6){
if(r.win == true){
acc.users[user_id(message.user)].balance += Number(amount);
vk.api.call('messages.edit', {
peer_id: chat,
message: r.smile+`\n🎰 Вы победили!\n💎 Вы выиграли: ${amount} balance`,
message_id: res
})
return;
}else{
acc.users[user_id(message.user)].balance -= Number(amount);
vk.api.call('messages.edit', {
peer_id: chat,
message: r.smile+`\n🎰 Вы проиграли!\n💎 Вы проиграли: ${amount} balance`,
message_id: res
})
return;
}
}
vk.api.call('messages.edit', {
peer_id: chat,
message: r.smile,
message_id: res
})
}, i);
}
})
.catch((error) => {console.log('err');
});
});


vk.updates.hear(/^(?:создать фракцию)\s?([^]+)?/i,  (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)];
	if(user.balance < 25000000) return message.send(`📘 ➾ Создание фракции стоит 25.000.000$`);
	if(!message.$match[1]) return message.send(`📘 ➾ Напишите название для фракции.`);
	if(acc.users[id].frac_name != false) return message.send(`📘 ➾ Вы уже находитесь во вракции`);
	let args =  message.$match[1];
	if(frac[args]) return message.send(`📘 ➾ Фракция с таким названием уже существует.`);
	frac[args] = {
		users: {},
		balance: 0,
		bank: 0,
		people: 1, 
		counts: 0,
		owner: message.user
	}
	frac[args].users[id] = {
		count: 0
	}
	user.frac_name = args;
	return message.send(`
		📘 ➾ Вы создали фракцию "${args}"
		📘 ➾ Информация: "Фракция"
		`);
}); 


vk.updates.hear(/^(?:фракция)$/i, (message) => { 
	let id = user_id(message.user)
	let user = acc.users[user_id(message.user)];
	
	if(acc.users[id].frac_name == false){
		return message.send(`
		💼 ➾ Информация о фракции:

		🔸 ➾ Вступить во фракцию: 'Войти <название фракции>'
		🔸 ➾ Покинуть фракцию: 'Выйти'
		🔸 ➾ Фракция снять - снять все деньги(для создателя)

		🔸 ➾ Чтобы фракция приносила прибыль, нужны рабочие.
		🔸 ➾ Рабочие добровольно могут устроиться во фракцию.
		🔸 ➾ Для устройства им нужно прописать: 'Войти <название фракции>'
		🔸 ➾ Максимальное количество рабочих - 10.
		🔸 ➾ Каждые 10 минут рабочие должны писать команду 'Отработать'.
		🔸 ➾ За каждое написание в копилку фракции идет 5000$.
		🔸 ➾ Каждые 2 часа сумма из копилки переходит на счет фракции и делится автоматически между создателем фракции(10% от прибыли) и работниками(90% от прибыли).

		`);
	}
	let text = '';
	for(i in frac[user.frac_name].users){
		text += `🔻 ➾ @id${acc.users[i].id}(${acc.users[i].prefix}) | [${frac[user.frac_name].users[i].count}] раз за 2 часа\n`
	}
		 return message.send(`
		📘 ➾ Название фракции "${user.frac_name}"
		📑 ➾ Работников: ${frac[user.frac_name].people}
		💴 ➾ В копилке: ${frac[user.frac_name].bank}$
		💰 ➾ На счету: ${frac[user.frac_name].balance}$

		👑 ➾ Создатель: @id${frac[user.frac_name].owner}(${acc.users[user_id(frac[user.frac_name].owner)].prefix})

		💼 ➾ Статистика отработки:
		${text}

		💼 ➾ Информация о фракции:

		🔸 ➾ Чтобы фракция приносила прибыль, нужны рабочие.
		🔸 ➾ Рабочие добровольно могут устроиться во фракцию.
		🔸 ➾ Для устройства им нужно прописать: 'Войти <название фракции>'
		🔸 ➾ Максимальное количество рабочих - 10.
		🔸 ➾ Каждые 10 минут рабочие должны писать команду 'Отработать'.
		🔸 ➾ За каждое написание в копилку фракции идет 5000$.
		🔸 ➾ Каждые 2 часа сумма из копилки переходит на счет фракции и делится автоматически между создателем фракции(10% от прибыли) и работниками(90% от прибыли).

		`);
}); 

vk.updates.hear(/^(?:крутить)$/i, (message) => { 
	let a = cases.random(); 
	let user = acc.users[user_id(message.user)];

	if(user.balance < 100000) return message.send(`💸 ➾ Оружейный кейс стоит 100.000$`);
	if(user.bloks.gun_case == true) return message.send(`🔫 ➾ Крутить оружейный кейс можно раз в 10 минут.`);
	user.balance -= 10000;
	user.bloks.gun_case = true; 
		setTimeout(() => {
			user.bloks.gun_case = false;
	}, 360000);

	user.uron = a.uron;
	user.gun_name = a.name;
	return message.send(`
		💸 ➾ Вы открыли оружейный кейс за 10.000$
		💸 ➾ Вам выпало оружие:
		🔫 ➾ ${a.name} с уроном ${a.uron} единиц
		
		⚠ ➾ При следующем открытии кейса, данное оружие будет заменено выпавшим.
	`);
});

vk.updates.hear(/^(?:сдаюсь)/i, message => {
 
	let user = acc.users[user_id(message.user)];     
	if(user.duel == false) return message.send(`🔫 ➾ Вам никто не бросал вызов/Вы не вызывали на стрелу никого.`);
	
	vk.api.call("messages.send", {
		peer_id: acc.users[user.duel].id,
		message: `
		🔫 ➾ Игрок не согласился на стрелу.
		`
	}).then((res) => {}).catch((error) => {console.log('duel error'); });	

	user.duel_summ = false;
	acc.users[user.duel].duel_summ = false;
	acc.users[user.duel].duel = false;
	acc.users[user.duel].nachal = false;
	user.duel = false;
	user.nachal = false; 

 

	return message.send(`
		🔫 ➾ Вы отменили стрелу.
	`);
});


vk.updates.hear(/^(?:стрела)\s?([0-9]+)?\s?([0-9]+)?/i, message => {

	let args = message.$match[1];
	let user = acc.users[user_id(message.user)];
	if(acc.users[args].gun_name == false) return message.send(`🔫 ➾ У игрока нет оружия. ('Крутить')`)
	if(user.gun_name == false)	 return message.send(`🔫 ➾ У вас нет оружия. ('Крутить')`)

	if(args == user_id(message.user)) return message.send(`🔫 ➾ Вы указали свой ID`)
	if(!message.$match[2] || !args || message.$match[2] < 1) return message.send(`💸 ➾ Пример команды: 'Стрела ID СТАВКА'`)
	if(user.balance < message.$match[2]) return message.send(`💸 ➾ Ваша ставка больше вашего баланса`)
	if(!acc.users[args]) return message.send(`🔫 ➾ Такого игрока нет!`)
	if(acc.users[args].balance < message.$match[2]) return message.send(`💸 ➾ У игрока баланс меньше вашей ставки`)
	if(user.duel != false) return message.send(`🔫 ➾ Вы уже назначали стрелу игроку ${acc.users[user.duel].prefix}\n🎌 ➾ Для отмены напишите: 'Сдаюсь'`);
	if(acc.users[args].duel != false) return message.send(`🔫 ➾ Вы уже назначали стрелу игроку ${acc.users[user.duel].prefix}\n&#127987; ➾ Для отмены напишите: 'Сдаюсь'`);
	user.duel_summ = Number(message.$match[2]);
	acc.users[args].duel_summ = Number(message.$match[2]);
	user.duel = Number(args);
	acc.users[args].duel = Number(user_id(message.user));
	user.nachal = user_id(message.user);
	acc.users[args].nachal =  user_id(message.user);

	vk.api.call("messages.send", {
		peer_id: acc.users[message.$match[1]].id,
		message: `
		🔫 ➾ Игрок @id${user.id}(${user.prefix}) назначил вам стрелу
		💸 ➾ Ставка ${message.$match[2]}$

		🔫 ➾ Для принятия напишите: 'Принять'
		🎌 ➾ Для отмены напишите: 'Сдаюсь'
		`
	}).then((res) => {}).catch((error) => {console.log('duel error'); });	

	return message.send(`
		🔫 ➾ Вы назначили стрелу игроку @id${acc.users[args].id}(${acc.users[args].prefix})
		💸 ➾ Ставка ${message.$match[2]}$
		🔫 ➾ Ожидайте принятия боя игроком.
		
		&#127987; ➾ Для отмены напишите: 'Сдаюсь'
	`);
});

vk.updates.hear(/^(?:принять)/i, message => {

	let args = message.$match[1];
	let user = acc.users[user_id(message.user)];
	if(user.duel == false) return message.send(`🔫 ➾ Вам не назначали стрелу!`); 
	if(user.balance < user.summ) return message.send(`💸 ➾ Ставка больше вашего баланса`)
	if(acc.users[user.duel].balance < message.$match[2]) return message.send(`💸 ➾ У противника баланс меньше ставки`) 
	if(user_id(message.user) == user.nachal) return message.send(`💸 ➾ Принять стрелу должен соперник!`);

	let sum = user.duel_summ;  
	let us2 = user.duel;
	let one_hp = 100; //кто принимает
	let two_hp = 100; //кто атакует
	let text = '';

	//1 этап
	one_hp -= acc.users[user.duel].uron;
	two_hp -= user.uron;
	text += `
	- - 1&#8419; этап - - 
	🔸 ➾ ${user.prefix} | -${acc.users[user.duel].uron}% | ${one_hp}❤
 	🔹 ➾ ${acc.users[user.duel].prefix} | -${user.uron}% | ${two_hp}❤ 
	`;
	// 2 этап
	one_hp -= acc.users[user.duel].uron;
	two_hp -= user.uron;
	if(one_hp <= 0 || two_hp <= 0){
		if(one_hp <= 0 && two_hp <= 0){
			if(rand(1,2) == 1){
				if(one_hp <= 0){
					// победил второй
					user.balance -= Number(user.duel_summ);
					acc.users[user.duel].balance += Number(user.duel_summ);

					user.game.strela_loose += 1; 
					acc.users[us2].game.strela_win += 1;

					text += `
					- - Финал - - 
					🏁 ➾ В финальном этапе победил @id${acc.users[us2].id}(${acc.users[us2].prefix})
					🔸 ➾ ${user.prefix} | -${acc.users[us2].uron}% | 0❤
				 	🔹 ➾ ${acc.users[us2].prefix} | -${user.uron}% | ${two_hp}❤ 
					`;
					vk.api.call("messages.send", {
						user_id: user.id,
						message: text
						
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

					vk.api.call("messages.send", {
						user_id: acc.users[us2].id,
						message: text
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
					acc.users[us2].duel_summ = false;
					acc.users[us2].duel = false; 
					user.duel = false;
					user.duel_summ = false;
					acc.users[us2].nachal = false;
					user.nachal = false; 

					return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
				}
				if(two_hp <= 0){
					// победил первый
					user.balance += Number(user.duel_summ);
					acc.users[us2].balance -= Number(user.duel_summ);

					user.game.strela_win += 1;  
					acc.users[us2].game.strela_loose += 1;

					text += `
					- - Финал - - 
					🏁 ➾ В финальном этапе победил @id${user.id}(${user.prefix})
					🔸 ➾ ${user.prefix} | -${acc.users[us2].uron}% | ${one_hp}❤
				 	🔹 ➾ ${acc.users[us2].prefix} | -${user.uron}% | 0❤ 
					`;
					vk.api.call("messages.send", {
						user_id: user.id,
						message: text
						
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

					vk.api.call("messages.send", {
						user_id: acc.users[us2].id,
						message: text
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
					acc.users[us2].duel = false;
					acc.users[us2].duel_summ = false;
					user.duel = false;
					user.duel_summ = false;
					acc.users[us2].nachal = false;
					user.nachal = false; 

					return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
				}
			}
		}
			if(two_hp <= 0){
				// победил первый
				user.balance += Number(user.duel_summ);
				acc.users[us2].balance -= Number(user.duel_summ);

				user.game.strela_win += 1;  
				acc.users[us2].game.strela_loose += 1;

				text += `
				- - Финал - - 
				🏁 ➾ В финальном этапе победил @id${user.id}(${user.prefix})
				🔸 ➾ ${user.prefix} | -${acc.users[us2].uron}% | ${one_hp}❤
			 	🔹 ➾ ${acc.users[us2].prefix} | -${user.uron}% | 0❤ 
				`;
				vk.api.call("messages.send", {
					user_id: user.id,
					message: text
					
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

				vk.api.call("messages.send", {
					user_id: acc.users[us2].id,
					message: text
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
				acc.users[us2].duel = false;
				acc.users[us2].duel_summ = false;
				user.duel = false;
				user.duel_summ = false;
				acc.users[us2].nachal = false;
				user.nachal = false; 

				return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
			}
			if(one_hp <= 0){
				// победил второй
				user.balance -= Number(user.duel_summ);
				acc.users[user.duel].balance += Number(user.duel_summ);

				user.game.strela_loose += 1; 
				acc.users[us2].game.strela_win += 1;

				text += `
				- - Финал - - 
				🏁 ➾ В финальном этапе победил @id${acc.users[us2].id}(${acc.users[us2].prefix})
				🔸 ➾ ${user.prefix} | -${acc.users[us2].uron}% | 0❤
			 	🔹 ➾ ${acc.users[us2].prefix} | -${user.uron}% | ${two_hp}❤ 
				`;
				vk.api.call("messages.send", {
					user_id: user.id,
					message: text
					
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

				vk.api.call("messages.send", {
					user_id: acc.users[us2].id,
					message: text
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
				acc.users[us2].duel_summ = false;
				acc.users[us2].duel = false; 
				user.duel = false;
				user.duel_summ = false;
				acc.users[us2].nachal = false;
				user.nachal = false; 

				return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
			} 
	
	}else{
		text += `
		- - 2&#8419; этап - - 
		🔸 ➾ ${user.prefix} | -${acc.users[us2].uron}% | ${one_hp}❤
	 	🔹 ➾ ${acc.users[us2].prefix} | -${user.uron}% | ${two_hp}❤ 
		`;
	} 
	// 3 этап
	one_hp -= acc.users[us2].uron;
	two_hp -= user.uron;
	if(one_hp <= 0 || two_hp <= 0){
		if(one_hp <= 0 && two_hp <= 0){
			if(rand(1,2) == 1){
				if(one_hp <= 0){
					// победил второй
					user.balance -= Number(user.duel_summ);
					acc.users[us2].balance += Number(user.duel_summ);

					user.game.strela_loose += 1; 
					acc.users[us2].game.strela_win += 1;

					text += `
					- - Финал - - 
					🏁 ➾ В финальном этапе победил @id${acc.users[us2].id}(${acc.users[us2].prefix})
					🔸 ➾ ${user.prefix} | -${acc.users[us2].uron}% | 0❤
				 	🔹 ➾ ${acc.users[us2].prefix} | -${user.uron}% | ${two_hp}❤ 
					`;
					vk.api.call("messages.send", {
						user_id: user.id,
						message: text
						
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

					vk.api.call("messages.send", {
						user_id: acc.users[us2].id,
						message: text
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
					acc.users[us2].duel = false;
					acc.users[us2].duel_summ = false;
					user.duel = false;
					user.duel_summ = false;
					acc.users[us2].nachal = false;
					user.nachal = false; 

					return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
				}
				if(two_hp <= 0){
					// победил первый
					user.balance += Number(user.duel_summ);
					acc.users[us2].balance -= Number(user.duel_summ);

					user.game.strela_win += 1;
					acc.users[us2].game.strela_loose += 1;

					text += `
					- - Финал - - 
					🏁 ➾ В финальном этапе победил @id${user.id}(${user.prefix})
					🔸 ➾ ${user.prefix} | -${acc.users[us2].uron}% | ${one_hp}❤
				 	🔹 ➾ ${acc.users[us2].prefix} | -${user.uron}% | 0❤ 
					`;
					vk.api.call("messages.send", {
						user_id: user.id,
						message: text
						
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

					vk.api.call("messages.send", {
						user_id: acc.users[us2].id,
						message: text
					}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
					acc.users[us2].duel = false;
					acc.users[us2].duel_summ = false;
					user.duel = false;
					user.duel_summ = false;
					acc.users[us2].nachal = false;
					user.nachal = false; 

					return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
				}
			}
		}
			if(two_hp <= 0){
				// победил первый
				user.balance += Number(user.duel_summ);
				acc.users[us2].balance -= Number(user.duel_summ);

				user.game.strela_win += 1;
				acc.users[us2].game.strela_loose += 1;

				text += `
				- - Финал - - 
				🏁 ➾ В финальном этапе победил @id${user.id}(${user.prefix})
				🔸 ➾ ${user.prefix} | -${acc.users[us2].uron}% | ${one_hp}❤
			 	🔹 ➾ ${acc.users[us2].prefix} | -${user.uron}% | 0❤ 
				`;
				vk.api.call("messages.send", {
					user_id: user.id,
					message: text
					
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

				vk.api.call("messages.send", {
					user_id: acc.users[us2].id,
					message: text
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
				acc.users[us2].duel = false;
				acc.users[us2].duel_summ = false;
				user.duel = false;
				user.duel_summ = false;
				acc.users[us2].nachal = false;
				user.nachal = false; 

				return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
			}
			if(one_hp <= 0){
				// победил второй
				user.balance -= Number(user.duel_summ);
				acc.users[us2].balance += Number(user.duel_summ);

				user.game.strela_loose += 1; 
				acc.users[us2].game.strela_win += 1;

				text += `
				- - Финал - - 
				🏁 ➾ В финальном этапе победил @id${acc.users[us2].id}(${acc.users[us2].prefix})
				🔸 ➾ ${user.prefix} | -${acc.users[us2].uron}% | 0❤
			 	🔹 ➾ ${acc.users[us2].prefix} | -${user.uron}% | ${two_hp}❤ 
				`;
				vk.api.call("messages.send", {
					user_id: user.id,
					message: text
					
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

				vk.api.call("messages.send", {
					user_id: acc.users[us2].id,
					message: text
				}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	
				acc.users[us2].duel = false;
				acc.users[us2].duel_summ = false;
				user.duel = false;
				user.duel_summ = false;
				acc.users[us2].nachal = false;
				user.nachal = false; 

				return message.send(`🔫 ➾ Результат боя отправлен вам в ЛС.`);			
			}
		 
		
	}else{
		text += `
		- - 3&#8419; этап - - 
		Вы сыграли в ничью!`;
		vk.api.call("messages.send", {
				user_id: user.id,
				message: text
				
			}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });	

			vk.api.call("messages.send", {
				user_id: acc.users[us2].id,
				message: text
			}).then((res) => {}).catch((error) => {console.log('duel(ataka) error'); });
		acc.users[us2].duel = false;
		acc.users[us2].duel_summ = false;
		user.duel = false;
		user.duel_summ = false;
		acc.users[us2].nachal = false;
		user.nachal = false; 
		 
	}  

 
	 
});


updates.hear(/^\/rand ([0-9]+)/i, async(context) => {
    await context.send(
        `Случайное число в промежутке 1-${ context.$match[1] } -- ${ getRandomInt(context.$match[1]) }`
    );
});
 
async function run() {
    await vk.updates.startPolling();
    console.log("Longpoll started");
}
 
run().catch(console.error);
 
// Random integer
function getRandomInt(x, y) {
    return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
}
 
// Random element from array
function getRandomElement(array) {
    return array[getRandomInt(array.length - 1)];
}




let cases = [
	{
		uron: 36,
		name: 'Пистолет "Deagle"'
	},
	{
		uron: 36,
		name: 'Автомат "M4A4"'
	}, 
	{
		uron: 55,
		name: `Дробовик "Sawed-Off"`
	},
	{
		uron: 43,
		name: `Пистолет "Five-SeveN | Испытание огнём"`
	},
	{
		uron: 37,
		name: `Автомат "AK-47"`
	},
	{
		uron: 35,
		name: `Автомат "AUG"`
	},
	{
		uron: 34,
		name: `Автомат "Galil AR"`
	},
	{
		uron: 37,
		name: `Пистолет-Пулемет "ПП-19 Бизон"`
	},
	{
		uron: 44,
		name: `Пистолет-Пулемет "MP9"`
	},
	{
		uron: 45,
		name: `Пистолет-Пулемет "UMP-45"`
	}, 
	{
		uron: 55,
		name: `Пистолеты "Dual Berettas | Удар кобры"`
	},
	{
		uron: 49,
		name: `Дробовик "Nova | Экзо"`
	},
	{
		uron: 43,
		name: `Пистолет "Desert Eagle | Директива"`
	},
	{
		uron: 45,
		name: `Револьвер "R8 | Кровавая паутина"`
	} 

]
 
async function run() {
    await vk.updates.startPolling();
    console.log('Bot actived');
	restart();
}

run().catch(console.error);

 

function rand(min, max) {return Math.round(Math.random() * (max - min)) + min} 
var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000"));
function spaces(string) {
	if (typeof string !== "string") string = string.toString();
	return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
Array.prototype.random = function() {  
	return this[Math.floor(this.length * Math.random())];
}

 //------------------------------------------------------------------------------------\\ 
 //------------------------------------------------------------------------------------\\
 	function user_id(id) {
	 	let ids = 0
	 	if(uid[id]){
	 		ids = uid[id].id
	 	}    
		return ids; 
	}  
  //------------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------------\\
	// log
 	function logs(id, ids, num, type) {
	 	
 	// - - - - - - - - - - - - - - - - -  
  		if(type == 1){ 
 			if(!log.point[ids]){ log.point[ids] = { log: [] }  } 
 			if(!log.point[id]){ log.point[id] = { log: [] }  } 
 			log.point[id].log.push(`[${time()} | ${data()} | Pay] Выдал [ID: ${id}] игроку [ID: ${ids}] -> ${num}$\n`)
 			log.point[ids].log.push(`[${time()} | ${data()} | Pay] Выдал [ID: ${id}] игроку [ID: ${ids}] -> ${num}$\n`)
			if(log.point[id].log.length >= 15){ delete log.point[id].log.shift() } 
			if(log.point[ids].log.length >= 15){ delete log.point[id].log.shift() } 
 		}
 		if(type == 2){ 
 			if(!log.give[ids]){ log.give[ids] = { log: [] }  } 
 			if(!log.give[id]){ log.give[id] = { log: [] }  } 
 			log.give[id].log.push(`[${time()} | ${data()} | Give] Выдал [ID: ${id}] игроку [ID: ${ids}] -> ${num}$\n`)
 			log.give[ids].log.push(`[${time()} | ${data()} | Give] Выдал [ID: ${id}] игроку [ID: ${ids}] -> ${num}$\n`)
			if(log.give[id].log.length >= 15){ delete log.give[id].log.shift() } 
			if(log.give[ids].log.length >= 15){ delete log.give[id].log.shift() }  
 		}
 		if(type == 3){ 
 			if(!log.remove[ids]){ log.remove[ids] = { log: [] }  } 
 			if(!log.remove[id]){ log.remove[id] = { log: [] }  } 
 			log.remove[id].log.push(`[${time()} | ${data()} | Remove] Забрал [ID: ${id}] у игрока [ID: ${ids}] \n`)
 			log.remove[ids].log.push(`[${time()} | ${data()} | Remove] Забрал [ID: ${id}] у игрока [ID: ${ids}] \n`)
			if(log.remove[id].log.length >= 15){ delete log.remove[id].log.shift() } 
			if(log.remove[ids].log.length >= 15){ delete log.remove[id].log.shift() } 
 		} 
 		if(type == 4){ 
 			if(!log.admin[ids]){ log.admin[ids] = { log: [] }  } 
 			if(!log.admin[id]){ log.admin[id] = { log: [] }  } 
 			log.admin[id].log.push(`[${time()} | ${data()} | Admin] Выдал [ID: ${id}] игроку [ID: ${ids}] -> ${num} lvl\n`)
 			log.admin[ids].log.push(`[${time()} | ${data()} | Admin] Выдал [ID: ${id}] игроку [ID: ${ids}] -> ${num} lvl\n`)
			if(log.admin[id].log.length >= 15){ delete log.admin[id].log.shift() } 
			if(log.admin[ids].log.length >= 15){ delete log.admin[id].log.shift() } 
 		} 
 		if(type == 5){ 
 			if(!log.setwin[ids]){ log.setwin[ids] = { log: [] }  } 
 			if(!log.setwin[id]){ log.setwin[id] = { log: [] }  } 
 			log.setwin[id].log.push(`[${time()} | ${data()} | Setwin] Выдал [ID: ${id}] игроку [ID: ${ids}] -> ${num}%\n`)
 			log.setwin[ids].log.push(`[${time()} | ${data()} | Setwin] Выдал [ID: ${id}] игроку [ID: ${ids}] -> ${num}%\n`)
			if(log.setwin[id].log.length >= 15){ delete log.setwin[id].log.shift() } 
			if(log.setwin[ids].log.length >= 15){ delete log.setwin[id].log.shift() }  
 		} 
 		if(type == 6){ 
 			if(!log.warns[ids]){ log.warns[ids] = { log: [] }  } 
 			if(!log.warns[id]){ log.warns[id] = { log: [] }  } 
 			log.warns[id].log.push(`[${time()} | ${data()} | warn] Выдал [ID: ${id}] игроку [ID: ${ids}] | Причина: ${num}\n`)
 			log.warns[ids].log.push(`[${time()} | ${data()} | warn] Выдал [ID: ${id}] игроку [ID: ${ids}] | Причина: ${num}\n`)
			if(log.warns[id].log.length >= 15){ delete log.warns[id].log.shift() } 
			if(log.warns[ids].log.length >= 15){ delete log.warns[id].log.shift() }  
 		} 
 	}
 	vk.updates.hear(/^(?:restart)\s?([0-9]+)?\s?([0-9]+)?/i,  (message) => {
		if(message.user != 440077933) return;
		      for(i=1;i < 200000; i++){  
 		  		if(acc.users[i]){
				acc.users[i].bloks.cases = false
				acc.users[i].bloks.bonus = false
				acc.users[i].bloks.random_game = false
				acc.users[i].bloks.gun_case = false
				acc.users[i].bloks.frac = false
				acc.users[i].bloks.pay = false
				acc.users[i].bloks.a_case = false
				acc.users[i].bloks.giverub = false
				acc.users[i].job.stop = false
				acc.users[i].bizs.one.stop = false
				acc.users[i].bizs.two.stop = false
				acc.users[i].safe.status = false;
 				acc.users[i].safe.key = false;
				}
			}
		return message.send(`Батька сделал рестарт`);
	});




 	updates.hear(/^\/rand ([0-9]+)/i, async(context) => {
    await context.send(
        `Случайное число в промежутке 1-${ context.$match[1] } -- ${ getRandomInt(context.$match[1]) }`
    );
});
 
async function run() {
    await vk.updates.startPolling();
    console.log("Shaotop Zapusk");
}
 
run().catch(console.error);
 
// Random integer
function getRandomInt(x, y) {
    return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
}
 
// Random element from array
function getRandomElement(array) {
    return array[getRandomInt(array.length - 1)];
}
	//

	// log
	 
 	function game_log(id, name, count, win_lose) {
 
 	// - - - - - - - - - - - - - - - - -   
 		if(!log.game[id]){ log.game[id] = { log: [] }  } 
 		log.game[id].log.push(`[${time()} | ${data()} | ${name}] Ставка: ${count}$ | Исход: ${win_lose.toString().replace(/0/gi, "❌").replace(/1/gi, "✅")}\n`) 
		if(log.game[id].log.length >= 15){ delete log.game[id].log.shift() }  

 	}
	//
 //------------------------------------------------------------------------------------\\
 	function lvlup(id) {
 		let text = false;
 		if(acc.users[id].exs >= acc.users[id].exsup){
 			acc.users[id].exs -= acc.users[id].exsup;
 			acc.users[id].lvl += 1;
 			if(acc.users[id].game.win < 52){acc.users[id].game.win += 1;}
 			acc.users[id].exsup += new_lvl();
 			text = true;
 		}
 		return text;
 	} 
 //------------------------------------------------------------------------------------\\
	function new_lvl(iid) {
	 	let ids = 0
	 	let numbers = [10,20,30,40,50,60];
	 	let rand = numbers.random()
	 	return rand;
	}

 //------------------------------------------------------------------------------------\\
 	function zapret(text) {
 		let text1 = text.toLowerCase();
 		let texts = 0;
 		let stat = false;
		var zaprets = /(вк бо т |сова не спит|сова никогда не спит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|вкботру|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|порно|botvk|ботвк|vkbot|кбот|bot vk|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
		if (zaprets.test(text1) == true) { 
				texts = `📗 ➾ Некорректный запрос.` 
				stat = true;
		}
		var filter1 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
		var filter2 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/ 
		if (filter1.test(text1) == true || filter2.test(text1) == true) { 
			texts = `📗 ➾ Некорректный запрос.` 
			stat = true; 
		}
		return texts
 	} 
 
  //------------------------------------------------------------------------------------\\
 	var uptime = { sec: 0, min: 0, hours: 0, days: 0 }
 //------------------------------------------------------------------------------------\\
	setInterval(() => {
		uptime.sec++;
		if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
		if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
		if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
	}, 1000);

 
 
 	 function time() {
			let date = new Date();
			let days = date.getDate();
			let hours = date.getHours();
			let minutes = date.getMinutes();
			let seconds = date.getSeconds();
			if (hours < 10) hours = "0" + hours;
			if (minutes < 10) minutes = "0" + minutes;
			if (seconds < 10) seconds = "0" + seconds;
			var times = hours + ':' + minutes + ':' + seconds
			return times;
	}

 //------------------------------------------------------------------------------------\\
	function data() {
		var date = new Date();
		let days = date.getDate();
		let month = date.getMonth() + 1; 
		if (month < 10) month = "0" + month;
		if (days < 10) days = "0" + days;
		var datas = days + ':' + month + ':2018' ;
		return datas;
	}
 //------------------------------------------------------------------------------------\\ 
 	setInterval(() => {
		acc.curs = rand(30000,80000) 
		acc.bit = rand(31000,32200)
	}, 600000);


 	   setInterval(() =>{
 		for(i=1;i<200000;i++){
 			if(acc.users[i]){
 				if(acc.users[i].autobiz != false){
	 				acc.users[i].autobiz -= 1;
	 				if(acc.users[i].autobiz == 0){acc.users[i].autobiz = false}

	 				if(acc.users[i].bizs.one_biz == true){
	 					acc.users[i].balance += Number(acc.users[i].bizs.one.zp)
	 				}
	 				if(acc.users[i].bizs.two_biz == true){
	 				 	acc.users[i].balance += Number(acc.users[i].bizs.two.zp)
	 				}
	 			}
	 			//
	 			if(acc.users[i].autozp != false){
	 				if(acc.users[i].job.name != false){
	 					acc.users[i].autozp -= 1;
	 					if(acc.users[i].autozp == 0){acc.users[i].autozp = false}
	 					acc.users[i].balance += Number(acc.users[i].job.count)	
	 				}
	 			}
 			}
 			 
 		}
 	}, 3600000); 
 
 
  	function restart() {
 		  	for(i=1;i < 200000; i++){  
 		  		if(acc.users[i]){
				acc.users[i].bloks.cases = false
				acc.users[i].bloks.bonus = false
				acc.users[i].bloks.random_game = false
				acc.users[i].bloks.gun_case = false
				acc.users[i].bloks.frac = false
				acc.users[i].bloks.pay = false
				acc.users[i].bloks.a_case = false
				acc.users[i].bloks.giverub = false
				acc.users[i].job.stop = false
				acc.users[i].bizs.one.stop = false
				acc.users[i].bizs.two.stop = false
				acc.users[i].safe.status = false;
 				acc.users[i].safe.key = false;
				}
			} 
	}

	function rand(min, max) {return Math.round(Math.random() * (max - min)) + min} 
var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000"));
function spaces(string) {
	if (typeof string !== "string") string = string.toString();
	return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
Array.prototype.random = function() {  
	return this[Math.floor(this.length * Math.random())];
}

 	setInterval(() =>{
 		for(name in frac){
 			let sum = frac[name].bank;
 			frac[name].bank = 0;
 			let owner_sum = sum / 100 * 10;
 			let user_sums = sum / 100 * 90;
 			let people = frac[name].people - 1;
 			let user_sum = user_sums / people;

 			frac[name].balance += owner_sum;
 			for(i in frac[name].users){
 				frac[name].users[i].count = 0;
 				acc.users[i].balance += user_sum;
 			} 
 		}
 	}, 7200000); 

 	 function adm_log(is) {
  		let id = is[0];	
		let i = config;  
		vk.api.call('messages.send', { user_id: acc.users[1].id, message: `⚠ ⚠ [ADM-LOG | User_id: @id${acc.users[is[0]].id}(${is[0]})] ⚠ ⚠\n[ -> ${is[1]} <- ]`});			 
  	}
 

   	 setInterval(() =>{
 		for(i=0;i<100000;i++){
 			if(acc.users[i]){
 			 	if(acc.users[i].adm_time > 0){
 			 		acc.users[i].adm_time -= 1;
 			 		if(acc.users[i].adm_time == 0){
 			 			acc.users[i].level = 0;

 			 			vk.api.call('messages.send', {
							user_id: acc.users[i].id,
							message: `Срок действия vip/moder/admin прав истек. Вы сняты с должности.`
						});
 			 		}
 			 	}
 			}
 		}
 	}, 3600000);  	 


setInterval(function(){
	fs.writeFileSync("./base/acc.json", JSON.stringify(acc, null, "\t")) 
	fs.writeFileSync("./base/uid.json", JSON.stringify(uid, null, "\t"))  
	fs.writeFileSync("./base/log.json", JSON.stringify(log, null, "\t"));
	fs.writeFileSync("./base/frac.json", JSON.stringify(frac, null, "\t"));
	fs.writeFileSync("./base/ferm.json", JSON.stringify(ferm, null, "\t"));
}, 150000);

  