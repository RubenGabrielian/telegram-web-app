import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";
import axios from "axios";


export default function Friends () {

    useEffect(() => {
        axios.get(`https://bot.pinetech.org/api/register-user?id=${WebApp?.initDataUnsafe?.user?.id}`).then((res)=>{
            console.log(res)
        })
    }, []);

    return (
        <div>
            <h2>Invite Friends</h2>
            <button>
                <a href={`https://telegram.me/share/url?url=t.me/tree_claimer_bot/app?startapp=${WebApp?.initDataUnsafe?.user?.id}`}>Invite</a>
            </button>
            <h3>My friends</h3>
        </div>
    )
}
