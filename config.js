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
SESSION_ID: process.env.SESSION_ID || "https://tiktok-mocha-xi.vercel.app/",  // ADD Your Session Id 
MONGODB: process.env.MONGODB || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority",
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "*_`AUTO STATUS JUST NOW SEEN BY LARA MD`_*",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "true",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",   
READ_MESSAGE: process.env.READ_MESSAGE || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
INBOX_BLOCK: process.env.INBOX_BLOCK || "true",  
};
