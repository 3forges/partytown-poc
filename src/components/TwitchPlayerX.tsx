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
            <div class="z-99 relative grid justify-items-center items-center bg-green">
                <div class="z-99 relative grid justify-items-center items-center bg-pink">
                    {// <LeFameuxBouton onClick={addComponent} text="Play Me Baby!" />
                        displayButton?<PlayLiveButton onClick={addComponent} text="" altText="Play Me Baby!" social_icon='mdi:twitch'/> :<></>
                    }   
                    {// displayButton?() => ( <LeFameuxBouton onClick={addComponent} text="Play Me Baby!" /> ):() => ( <LeFameuxBouton onClick={addComponent} text="Don't Play Me Baby!" /> )
                    }      
                </div>
                <div class="z-99 relative grid justify-items-center items-center bg-pink">
                    {
                        components.map((item, i) => ( <UnComposant twitch_channel={item} /> ))
                    }
                    {
                        displayButton?<></>:<TwitchPlayer/>
                    }
                </div>
                <a href="#_" class="relative px-5 py-2 font-medium text-white group">
                    <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                    <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                    <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                    <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                    <span class="relative">Button Text</span>
                </a>
                <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span class="relative text-white">Button Text</span>
                </a>

            </div>
        </>
    )
}