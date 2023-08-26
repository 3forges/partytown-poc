import { useEffect } from 'preact/hooks'

export default function TwitchPlayer4() {    
    
    useEffect( () => {
        console.log("inject")
        const script = document.createElement("script");
        script.src = "/src/components/twitch.js";
        script.onload = () => { alert() }
        var d = document.getElementById("twitch-embed"); // as HTMLElement;
        d.appendChild(script)
        return () => { console.log("unmount TwitchPlayer4") }
    }, []);

    return(
        <> 
            <script 
                type="text/javascript" 
                src="https://embed.twitch.tv/embed/v1.js"
            ></script>
            <div 
                id="twitch-embed" 
                class="absolute grid justify-items-center items-center min-w-[80%] min-h-[50%] opacity-30 z-5" 
            ></div>           
        </>
    );
};
