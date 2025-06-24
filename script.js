const { default: AgoraRTC } = require("agora-rtc-sdk-ng");

let client = AgoraRTC.createClient({
    mode: 'rtc',
          'codec':"vp8"
})

let config = {
    appid: '80e6a74e360e434db80e91bcce67c605',
    token: '007eJxTYDhe33qN+2at8THfFEOt4KU1e1R2rk5sPDhR7MSXv5LhV3YqMFgYpJolmpukGpsZpJoYm6QkAQUsDZOSk1PNzJPNDEybfkdlNAQyMoitm8/CyACBID4XQ05mWWpxSVFqYi4DAwB2+SNW',
    uid: null,
    channel: 'livestream'
}

let localTracks = {
    audioTracks: null,
    
}