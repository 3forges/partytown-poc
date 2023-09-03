import styles from './PlayLiveButton.module.css'

/**
 * Astro Icon cannot be used into 
 * a React / Preact component, it is 
 * designed to be compiled as an 
 * '*.astro', not as an '*.tsx' 
 */
// import { Icon } from "astro-icon";

export interface PlayLiveButtonProps {
    onClick: any;
    altText?: string;
    text?: string;
	link_url?: string;
	description?: string;
	social_icon: string;	
}
export function PlayLiveButton(props: PlayLiveButtonProps) {



    return (
        <>
			<div style={styles} class="z-200">
				<a 
				   onClick={props.onClick}
				   href="#_"
				   alt={props.altText?props.altText:"Play The Live!"}
				   class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
				>
						<span class="relative flex h-3 w-3"  style={styles}>
							<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
							<span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
						</span>
                    <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>

					<span class="relative text-white">
					<svg 
					    xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-48 h-48">
							<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
					</svg>
                    {props.text?props.text:""}
					</span>
                </a>
				<button
					type="button"
					onClick={props.onClick}
					alt={props.altText?props.altText:"Play The Live!"}
					data-te-ripple-init
					data-te-ripple-color="light"
					class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
					style="background-color: #9146ff">
						<span class="relative flex h-3 w-3" style={styles}>
							<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
							<span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
						</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 24 24">
						<path
						d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
						fill-rule="evenodd"
						clip-rule="evenodd" />
					</svg>
					<svg 
					    xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
					</svg>

					{props.text?props.text:""}
				</button>

			</div>

        </>
    )
}










































