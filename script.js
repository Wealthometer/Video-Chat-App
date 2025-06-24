const { default: AgoraRTC } = require("agora-rtc-sdk-ng");

let client = AgoraRTC.createClient({
    mode: 'rtc',
          'codec':"vp8"
})

let config = {
    appid: "80e6a74e360e434db80e91bcce67c605",
    token: null,
    uid: null,
    channel: null
}