import threeImg from "../../public/three-removebg.png";
import {useEffect, useState} from "react";
import WebApp from "@twa-dev/sdk";
import axios from "axios";
import {TIMER} from "../consts.js";

export default function Tree({timerLeft, setTimeLeft, user, setUser}) {

    const [start, setStart] = useState(0);

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
    }, [start]);


    const handleClaim = () => {
        axios.post('https://bot.pinetech.org/api/claim', user).then((res) => {
            setUser(res.data);
            setTimeLeft(TIMER)
            setAnimate(true)
            setStart(res)
        })
    }

    return (
        <div>
            <img src={threeImg} width={'100%'} alt="" className={animate ? 'image-animation' : ''}/>
            {
                timerLeft < 1 ? (
                    <button className={'claim-button'} disabled={timerLeft > 0} onClick={handleClaim}>Claim</button>
                ) : (
                    <div className="timer">Time left: {timerLeft}s</div>
                )
            }
        </div>
    )
}
