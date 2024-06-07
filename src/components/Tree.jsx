import threeImg from "../../public/three-removebg.png";
import {useEffect, useState} from "react";
import WebApp from "@twa-dev/sdk";

export default function Tree({timerLeft,setTimeLeft}) {


    const [animate, setAnimate] = useState(true);

    useEffect(() => {

        WebApp.ready();
        WebApp.expand();


        const animationTimer = setTimeout(() => {
            setAnimate(true);
        }, 1000); // Start the animation after 1 second

        // Timer countdown
        const timerInterval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime > 1) {
                    return prevTime - 1;
                } else {
                    clearInterval(timerInterval); // Clear the interval when the timer reaches 0
                    return 0;
                }
            });
        }, 1000);

        // Cleanup intervals on component unmount
        return () => {
            clearTimeout(animationTimer);
            clearInterval(timerInterval);
        };
    }, []);


    return (
        <div>
            <img src={threeImg} width={'100%'} alt="" className={animate ? 'image-animation' : ''}/>
            <div className="timer">Time left: {timerLeft}s</div>
        </div>
    )
}
