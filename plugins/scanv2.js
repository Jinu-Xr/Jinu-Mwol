const New = require('../events');

const setting = require('../config');

const {MessageType} = require('@adiwajshing/baileys');

let sourav = setting.WORKTYPE == 'public' ? false : true

New.addCommand({pattern: 'true ?(.*)', desc: 'Searches for number in truecaller!',fromMe: true}, async (msg, query) => {

	if (!query[1]) return await msg.reply("_Give me any number or mention any user!_");	if (query[1].includes('/')) {

    var init, fin;

    var split = query[1].split('/');

    fin = split[1];

    init = split[0];

    var initt = init.split(" ").join("")

    var number = initt.replace('+','')

    var code = fin.toUpperCase();

    const res = await truecaller.query.find(number, code)

		await msg.client.sendMessage(msg.jid, '*RECIEVED DETAILS FROM TRUECALLER!* \n\n' + '*✅' + "Number:" +'* ```' + res.phones[0].e164Format + '```\n' +

        '*👤' + "Name:" +'* ```' + res.name+ '```\n' +

        '*🗺' + "Access:" +'* ```' + res.access + '```\n' +

        '*🔢' + "Career:" +'* ```' + res.phones[0].carrier + '```\n' +

        '*🌍' + "Country:" +'* ```' + res.phones[0].countryCode + '```\n' +

        '*🚩' + "City:" +'* ```' + res.addresses[0].city + '```\n' +

        '*📃' + "Prefix:" +'* ```' + res.phones[0].dialingCode + '```\n' +

        '*🔌' + "Score:" +'* ```' + res.score + '```\n\n' +

        '*📡' + "UID:" +'* ```' + res.id + '```\n' +

        '*🛡' + "Number type:" +'* ```' + res.phones[0].numberType + '```\n' +

        '*⌚' + "Timezone:" +'* ```' + res.addresses[0].timeZone + '```\n', MessageType.text, {quoted: msg.data});

    }	

    else return await msg.client.sendMessage(msg.jid, 'Wrong format! \n\n .true +91 XXXX XXXX/IN', MessageType.text, {quoted: msg.data})

 });
