
export function TwitchPlayer3() {    
    
    return (
        <>
            <div 
                id="twitch-embed" 
                class="absolute grid justify-items-center items-center min-w-[80%] min-h-[50%] z-2" 
            ></div>
            <script 
                type="text/javascript" 
                src="https://embed.twitch.tv/embed/v1.js"
            ></script>
            <script 
                type="text/javascript"
                src="/twitch.js"
            ></script>
        </>
    )
}