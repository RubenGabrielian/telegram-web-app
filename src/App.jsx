import './App.css'
import Tree from "./components/Tree.jsx";
import {useEffect, useState} from "react";
import WebApp from "@twa-dev/sdk";
import axios from "axios";
import Loading from "./components/Loading.jsx";
import {formatNumber, TIMER} from "./consts.js";
import {requestViewport} from "@tma.js/sdk-react";


function App() {
    const [timeLeft, setTimeLeft] = useState(TIMER); // Initialize timer with 60 seconds
    const [user, setUser] = useState(null);


    requestViewport().then((data) => {
        // Output:
        // { height: 122, isExpanded: false, width: 375, isStateStable: true }
        console.log(data,'viewport');
    });


    const telegramUser = WebApp?.WebAppUser?.id || {
        id: 222,
        first_name: 'Ruben',
        last_name: 'Gabrielyan',
        username: 'rubenTest'
    };

    useEffect(() => {
        console.log((WebApp?.WebAppInitData));
        axios.post('https://bot.pinetech.org/api/register-user', telegramUser).then((res) => {
            setUser(res.data);
        })
    }, []);


    return (
        user ? (
            <>
                <div>
                    <h1>{WebApp?.WebAppInitData?.user?.first_name || 'Ruben'}</h1>
                    <h2>Your balance <span>{formatNumber(user?.count)}</span></h2>
                    <Tree timerLeft={timeLeft} setTimeLeft={setTimeLeft} user={telegramUser} setUser={setUser} />
                </div>
            </>
        ) : <Loading/>
    )
}

export default App
