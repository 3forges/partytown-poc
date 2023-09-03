import { useState } from 'preact/compat'
import { TwitchPlayer } from "~/components/TwitchPlayer"; // <TwitchPlayer client:only="preact"/>
import { PlayLiveButton } from '~/components/PlayLiveButton'

// RxJS v6+
import { timer } from 'rxjs';
/*
    timer takes a second argument, how often to emit subsequent values
    in this case we will emit first value after 1 second and subsequent
    values every 2 seconds after
*/
const source = timer(1000, 2000);

// Inspired by https://upmostly.com/tutorials/calling-a-react-component-on-button-click
const twitchChannelName = 'Justin_Curieux';

export interface UnComposantProps {
    twitch_channel: string;
}

/**
 * A very basic React Component
 */
export function UnComposant(props: UnComposantProps) {
    if (props.twitch_channel == 'justinastucieux') {
        
        return (
            <>
            </>
        )
    } else {
        return (
            <>
                <ul>
                    <li>Premier {props.twitch_channel}</li>
                    <li>Deuxième</li>
                    <li>Troisième</li>
                </ul>
            </>
        )
    }
}

export interface LeFameuxBoutonProps {
    onClick: any;
    text: string
}
export function LeFameuxBouton(props: LeFameuxBoutonProps) {

    return (
        <>
            {// <div id="twitch-embed" class= "absolute grid justify-items-center items-center min-w-[80%] min-h-[50%]" style="opacity: 0.3; z-index:5;"></div>
            }
            <button onClick={props.onClick} class="bg-blue-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded" >{props.text}</button>
        </>
    )
}

export function TwitchPlayerX() {

    //const [components, setComponents] = useState(["Sample Component"]);
    const [components, setComponents] = useState<string[]>(['justinastucieux']);
    const [displayButton, setDisplayButton] = useState<boolean>(true);
    
    const [onAir, setOnAir] = useState<boolean>(false);


    //output: 0,1,2,3,4,5......
    // const subscribe = source.subscribe(val => console.log(val));
    const subscribe = source.subscribe(val => {
        console.log(`Call number # ${val} - Here I should call the Twitch API to find out if yes or no, a live is on.`)
        let areWeOnAirNow: boolean = false;
        /**
         * Calling setOnAir() wil change the state of 
         * the React Component, therefore will trigger a Render
         */
        setOnAir(areWeOnAirNow)
    });


    /**
     *  This method will add the Twitch Player when playme is clicked
     */
    function addComponent() {
        if (components.length)
        setComponents([...components, `${twitchChannelName}`])
        setDisplayButton(false)
    }

    return (
        <>
            {// <div id="twitch-embed" class= "absolute grid justify-items-center items-center min-w-[80%] min-h-[50%]" style="opacity: 0.3; z-index:5;"></div>
            }
                    {// <LeFameuxBouton onClick={addComponent} text="Play Me Baby!" />
                        displayButton?<PlayLiveButton onClick={addComponent} text="" altText="Play Me Baby!" social_icon='mdi:twitch'/> :<></>
                    }   
                    {// displayButton?() => ( <LeFameuxBouton onClick={addComponent} text="Play Me Baby!" /> ):() => ( <LeFameuxBouton onClick={addComponent} text="Don't Play Me Baby!" /> )
                    }      
                    {
                        displayButton?<></>:<TwitchPlayer/>
                    }
        </>
    )
}