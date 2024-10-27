import ws from 'ws';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let uniqueUsers = new Map();

/*    global.conns.forEach((conn) => {
        if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
            uniqueUsers.set(conn.user.jid, conn);
        }
    });*/

    let users = [...uniqueUsers.values()];
    let totalUsers = users.length;
    let totalusr = Object.keys(global.db.data.users).length;
    let rtotal = Object.entries(global.db.data.users).length || '0'
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

/*    let sbot =
        conn.user.jid == global.conn.user.jid
        ? "`ʙᴏᴛ ::` Principal"
        : "`ꜱᴜʙʙᴏᴛ ᴅᴇ ::`" + `  Wa.me/${global.conn.user.jid.split`@`[0]}`;*/

/*    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: ``,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${username}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };*/

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    m.react("🤍");
    let menu = ``;

    let txt = ""
    txt += '`ᴄʀᴇᴀᴅᴏʀ ::`' + ` Angel-OFC\n`;
    txt += '`ʙᴏᴛ ::`' + ` GenesisBot-MD\n`;
    txt += '`ꜰᴇᴄʜᴀ ::`' + ` ${fecha}\n`;
    txt += '`ᴠᴇʀꜱɪᴏɴ ::`' + ` ${vs}\n`;
//    txt += `${sbot}\n`;
    txt += '`ᴘʀᴇꜰɪᴊᴏ ::`' + ` [  ${usedPrefix}  ]\n`;
    txt += '`ᴜꜱᴜᴀʀɪᴏꜱ ::`' + ` ${rtotal}\n`;
    txt += '`ᴠᴇʀɪꜰɪᴄᴀᴅᴏꜱ ::`' + ` ${rtotalreg}\n`;
    txt += '`ᴀᴄᴛɪᴠᴏ ::`' + ` ${uptime}\n`;
    txt += '`ᴄᴏɴᴛᴀᴄᴛᴏ ::` #owner\n\n';
    txt += "> ʙʏ : ᴀɴɢᴇʟ ᴏꜰᴄ ʏ ᴛɪᴛᴀɴɪᴜᴍ ᴛᴇᴀᴍ";

    let listSections = [];

        listSections.push({
        title: `🔖 SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular Génesis`,
        rows: [
            {
                header: "𝗔𝗨𝗧𝗢 𝗩𝗘𝗥𝗜𝗙𝗜𝗖𝗔𝗥 ✅",
                title: "",
                description: `Verificacion Automáticamente`,
                id: `.reg ⿴⃟ٍࣽGenesϟs ︧ཾ✾▹ .18`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 🤍",
                title: "",
                description: `𝘮𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘰𝘮𝘱𝘭𝘦𝘵𝘰`,
                id: `.allmenu`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦 🔊",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘢𝘶𝘥𝘪𝘰𝘴`,
                id: `${usedPrefix}menuaudios`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪 🔞",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘢𝘭𝘪𝘦𝘯𝘵𝘦`,
                id: `${usedPrefix}menuhorny`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦 🎮",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘫𝘶𝘦𝘨𝘰𝘴`,
                id: `${usedPrefix}games`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗔𝗡𝗜𝗠𝗘 🌸",
                title: "",
                description: `𝘮𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘢𝘯𝘪𝘮𝘦`,
                id: `${usedPrefix}menuanime`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 📥",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴`,
                id: `${usedPrefix}menudl`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗔𝗜 🤖",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘐𝘈-𝘉𝘰𝘵`,
                id: `${usedPrefix}menuai`,
            },
            {
                header: "𝗥𝗘𝗗𝗘𝗦 🍄",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘢𝘴 𝘳𝘦𝘥𝘦𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}redes`,
            },
            {
                header: "𝗚𝗥𝗨𝗣𝗢𝗦 ☁️",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}grupos`,
            },
        ],
    });

    let vid = "https://iili.io/ds8UrPf.md.png";
    let img = "https://iili.io/ds82dmX.md.png";
    let img2 = "https://iili.io/ds8r8EG.md.png";
    let img3 = "https://iili.io/ds8UrPf.md.png";
    let img4 = "https://iili.io/ds82dmX.md.png";
    let img5 = "https://iili.io/ds8r8EG.md.png";
    let img6 = "https://iili.io/ds8UrPf.md.png";
    let img8 = "https://iili.io/ds82dmX.md.png";
    let img9 = "https://iili.io/ds8r8EG.md.png";
    let img10 = "https://iili.io/ds8UrPf.md.png";
    let img11 = "https://iili.io/ds82dmX.md.png";

    await conn.sendListB(m.chat, menu, txt, ` 𓏲୭᳟🤍̸̷̸̷᮫᮫໋໋݂݂ׄׄ.𝐌𝐄𝐍𝐔𝐒 𝐋𝐈𝐒𝐓𓏲᭔᷼⁩`, [vid, img, img2, img3, img4, img5, img6, img8, img9, img10, img11].getRandom(), listSections, estilo);
};

handler.command = ["menu", "help", "menú"];

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;