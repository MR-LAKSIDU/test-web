// ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗    ██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗    ███╗   ███╗██████╗ 
//██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║    ██║  ██║██╔══██╗██╔════╝██║  ██║██║    ████╗ ████║██╔══██╗
//██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║    ███████║███████║███████╗███████║██║    ██╔████╔██║██║  ██║
//██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║    ██╔══██║██╔══██║╚════██║██╔══██║██║    ██║╚██╔╝██║██║  ██║
//╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║    ██║  ██║██║  ██║███████║██║  ██║██║    ██║ ╚═╝ ██║██████╔╝
// ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝    ╚═╝     ╚═╝╚═════╝ 
                                                                                                       
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Z143hBBL#dk4OK4VPobAQ2L-yD2xYr4ScVfr5tkIhJp0SseMdi0c",  // ADD Your Session Id 
MONGODB: process.env.MONGODB || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority",
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
ANTI_BOT: process.env.ANTI_BOT || "false",
AUTO_AI: process.env.AUTO_AI || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "𝐘𝐨𝐮 𝐒𝐭𝐚𝐭𝐮𝐬 𝐬𝐞𝐞𝐧 𝐛𝐮 𝐐𝐮𝐞𝐞𝐧 𝐇𝐚𝐬𝐡𝐢 𝐌𝐝",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈",
STICKER_NAME: process.env.STICKER_NAME || "𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
DELETE_LINKS: process.env.DELETE_LINKS || "false", 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94771470396",
OWNER_NAME: process.env.OWNER_NAME || "𝐌𝐑 𝐋𝐀𝐊𝐈𝐘𝐀",
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE || "true",  
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/LAKSIDUOFFICIAL/LAKSIDU-BOT/refs/heads/main/Screenshot_20250208-114759_Photo%20Editor.jpg",
LIVE_MSG: process.env.LIVE_MSG || "𝐋𝐀𝐊𝐒𝐈𝐃𝐔*⚡",
READ_MESSAGE: process.env.READ_MESSAGE || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",
MODE: process.env.MODE || "public",
ANTI_LINK: process.env.ANTI_LINK || "false",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "true", 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
READ_CMD: process.env.READ_CMD || "true",
DEV: process.env.DEV || "94771470396",       
ANTI_VV: process.env.ANTI_VV || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
INBOX_BLOCK: process.env.ANTI_DEL_PATH || "true", 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "*_`AUTO STATUS JUST NOW SEEN BY LARA MD`_*",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",   
READ_MESSAGE: process.env.READ_MESSAGE || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
};
