import { h } from 'preact'

export default function TwitchPlayer() {

    /**
     *  CONFIG YOUR FLAVOR
     */
    const chatLayout = true               // layout option [video|video-and-chat]
    const channel = 'monstercat'          // your channel
    //const webUrls = '"surge.sh"'      // your network
    const autoplay = true              // Twitch.Embed.VIDEO_READY action
    const verbose = true              // console feedback on|off

    const embedTwitchScript = '"use strict";'+      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
    'const inject = document.createElement("script");'+
    'inject.type = "text/javascript";'+
    'inject.src = "https://embed.twitch.tv/embed/v1.js";'+
    'inject.onload = () => { startTwitch() };'+
    'document.getElementById("twitch-embed").append(inject);'+
    'function startTwitch() {' + 
        'let embed = new Twitch.Embed("twitch-embed", {'+
            'width: "100%",'+
            'height: "100%",'+
            'theme: "light",'+
            'autoplay: '+autoplay+','+
            'channel: "'+channel+'",'+
            'muted: true,'+
            'layout: "video'+((chatLayout)?"-and-chat":"")+'",'+
            'parent: []'+
        '});'+
    '};'

    return (
        <>
            <div id="twitch-embed" class="absolute grid justify-items-center items-center min-w-[80%] min-h-[50%] z-2 transition-opacity ease-linear duration-1000 from-100 to-30 "></div>
            {
                h(
                    'script',
                    { type: 'text/javascript'},
                    embedTwitchScript
                )
            }
        </>
    )
}