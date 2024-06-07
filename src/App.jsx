import './App.css'
import threeImg from "../public/three-removebg.png";
import {useEffect, useState} from "react";
import WebApp from '@twa-dev/sdk'


function App() {

    const [animate, setAnimate] = useState(true);
    const [timeLeft, setTimeLeft] = useState(60); // Initialize timer with 60 seconds

    useEffect(() => {

        WebApp.isExpanded = true;


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
        <>
            <div>
                <h1>RG</h1>
                <h2>Your balance <span>4000</span></h2>
                <div className="timer">Time left: {timeLeft}s</div>
                <img src={threeImg} width={'100%'} alt="" className={animate ? 'image-animation' : ''}/>
            </div>
        </>
    )
}

export default App
