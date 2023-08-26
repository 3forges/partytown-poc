import { h } from 'preact'

export function TwitchPlayer2() {
    
    const embedTwitchScript = 'var embed = new Twitch.Embed(\'twitch-embed\', {'+
        'width: \'100%\','+
        'height: \'100%\','+
        'allowfullscreen: true,'+
        'autoplay: true,'+
        'channel: \'radiojaune\','+
        'layout: \'video-and-chat\','+
        'parent: [\'radiojaune.com\']'+
    '});' /*+
    'embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {'+
        'var player = embed.getPlayer();'+
        'player.play();'+
        'console.log(\'TwitchPlayer: VIDEO_READY\');'+
    '});'+
    'embed.addEventListener(Twitch.Embed.VIDEO_PLAY, () => {'+
        'console.log(\'TwitchPlayer: VIDEO_PLAY\');'+
    '});' */
    //console.log(embedTwitchScript)
    
    return (
        <>
            <div 
                id="twitch-embed" 
                class="absolute grid justify-items-center items-center min-w-[80%] min-h-[50%] opacity-30 z-5" 
            ></div>
            <script type="text/javascript" src="https://embed.twitch.tv/embed/v1.js" ></script>
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