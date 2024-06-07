import './App.css'
import Tree from "./components/Tree.jsx";
import {useState} from "react";
import WebApp from "@twa-dev/sdk";


function App() {
    const [timeLeft, setTimeLeft] = useState(10); // Initialize timer with 60 seconds

    return (
        <>
            <div>
                <h1>{WebApp?.WebAppInitData?.user?.first_name || 'Ruben'}</h1>
                <h2>Your balance <span>4000</span></h2>
                <Tree timerLeft={timeLeft} setTimeLeft={setTimeLeft}/>
                <button className={'claim-button'} disabled={timeLeft > 0}>Claim</button>
            </div>
        </>
    )
}

export default App
