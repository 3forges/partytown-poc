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
    '});'
    
    return (
        <>
            <div 
                id="twitch-embed" 
                class="absolute grid justify-items-center items-center min-w-[80%] min-h-[50%] opacity-30 z-3" 
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