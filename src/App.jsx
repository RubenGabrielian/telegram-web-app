import './App.css'
import Tree from "./components/Tree.jsx";
import {useEffect, useState} from "react";
import WebApp from "@twa-dev/sdk";
import axios from "axios";
import {ProgressBar, RotatingLines} from "react-loader-spinner";
import Loading from "./components/Loading.jsx";


function App() {
    const [timeLeft, setTimeLeft] = useState(10); // Initialize timer with 60 seconds
    const userId = WebApp?.WebAppUser?.id || 222;
    const [user, setUser] = useState(null);
    const telegramUser = WebApp?.initDataUnsafe?.user || {id: 222, first_name: 'Ruben', last_name: 'Gabrielyan',username: 'rubenTest'};

    useEffect(() => {
        axios.post('https://bot.pinetech.org/api/register-user', telegramUser).then((res) => {
            setUser(res.data);
        })
    }, []);


    return (
        user ? (
            <>
                <div>
                    <h1>{WebApp?.WebAppInitData?.user?.first_name || 'Ruben'}</h1>
                    <h2>{userId}</h2>
                    <h2>Your balance <span>{user?.count}</span></h2>
                    <Tree timerLeft={timeLeft} setTimeLeft={setTimeLeft}/>
                    <button className={'claim-button'} disabled={timeLeft > 0}>Claim</button>
                </div>
            </>
        ) : <Loading/>
    )
}

export default App
