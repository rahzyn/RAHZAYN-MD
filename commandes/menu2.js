const {
  zokou
} = require(__dirname + "/../framework/zokou");
const {
  format
} = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "menu",
  'categorie': "Menu"
}, async (_0x2a9aec, _0x2391f4, _0x2ce588) => {
  let {
    ms: _0x183086,
    repondre: _0x1542ab,
    prefixe: _0x2f787f,
    nomAuteurMessage: _0x69ddd7,
    mybotpic: _0x2f0327
  } = _0x2ce588;
  let {
    cm: _0x3208f2
  } = require(__dirname + "/../framework/zokou");
  let _0x4bac15 = {};
  let _0x5c8a5f = "public";
  if (s.MODE.toLowerCase() !== "yes") {
    _0x5c8a5f = "private";
  }
  _0x3208f2.map(_0x4f5f2e => {
    if (!_0x4bac15[_0x4f5f2e.categorie]) {
      _0x4bac15[_0x4f5f2e.categorie] = [];
    }
    _0x4bac15[_0x4f5f2e.categorie].push(_0x4f5f2e.nomCom);
  });
  moment.tz.setDefault("Etc/GMT");
  const _0x3d97c7 = moment().format("HH:mm:ss");
  const _0x5d6733 = moment().format("DD/MM/YYYY");
  let _0x263c02 = "\n *Hi🥰👋* : " + s.OWNER_NAME + "\n \n╭┈┈┈✧𝑹𝒂𝒉𝒛𝒂𝒚𝒏 𝑴𝒅✧┈┈┈┈⊷𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭\n┣◆ ╭┈┈┈┈┈┈┈┈┈┈┈⊷\n┣◆◎ 𝙾𝚠𝚗𝚎𝚛 : " + s.OWNER_NAME + "\n┣◆◎ 𝙿𝚛𝚎𝚏𝚒𝚡 : *[ " + s.PREFIXE + " ]*\n┣◆◎ 𝙼𝚘𝚍𝚎 : " + _0x5c8a5f + "\n┣◆◎ 𝚝𝚒𝚖𝚎 : " + _0x3d97c7 + "\n┣◆◎ 𝙳𝚊𝚝𝚎 : " + _0x5d6733 + "\n┣◆◎ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┣◆◎ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 :𝑅𝑎ℎ𝑧𝑎𝑦𝑛 𝑀𝑑 \n┣◆◎ 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 : " + _0x3208f2.length + "\n┣◆◎ 𝙼𝚎𝚖𝚘𝚛𝚢 : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "\n┣◆ ╰┈┈┈┈┈┈┈┈┈┈┈⊷\n╰┈┈┈✧𝑹𝒂𝒉𝒛𝒂𝒚𝒏 𝑴𝒅✧┈┈┈┈⊷ \n";
  let _0x5aca2f = "mom💝";
  for (const _0x3f1189 in _0x4bac15) {
    _0x5aca2f += "\n⊷ " + _0x3f1189 + " ⊷••\n╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊷ 𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭\n┣◆╭┈┈┈┈┈┈┈┈┈┈┈⊷ ";
    for (const _0x119c86 of _0x4bac15[_0x3f1189]) {
      _0x5aca2f += " \n┣◆ " + _0x119c86;
    }
    _0x5aca2f += "\n┣◆╰┈┈┈┈┈┈┈┈┈┈┈⊷\n╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊷";
  }
  _0x5aca2f += "\n> 𝐑𝐚𝐡𝐳𝐚𝐲𝐧 𝐌𝐝 💓\n";
  try {
    const _0x48a1d6 = _0x69ddd7 || message.from;
    await _0x2391f4.sendMessage(_0x2a9aec, {
      'text': _0x263c02 + _0x5aca2f,
      'contextInfo': {
        'mentionedJid': [_0x48a1d6],
        'externalAdReply': {
          'title': "R̸a̸h̸z̸a̸y̸n̸ M̸d̸💓",
          'body': "L̑̈ȏ̈v̑̈ȇ̈ȓ̈ g̑̈ȋ̈ȓ̈l̑̈💝",
          'thumbnailUrl': "https://whatsapp.com/channel/0029VatokI45EjxufALmY32X",
          'sourceUrl': "https://whatsapp.com/channel/0029VatokI45EjxufALmY32X",
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    });
  } catch (_0x4ebd55) {
    console.error("Menu error: ", _0x4ebd55);
    _0x1542ab("🥵🥵 Menu error: " + _0x4ebd55);
  }
});