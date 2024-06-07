import WebApp from "@twa-dev/sdk";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../components/Loading.jsx";


export default function Friends () {
    const [referals, setReferals] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://bot.pinetech.org/api/friends?id=${WebApp?.initDataUnsafe?.user?.id}`).then((res)=>{
            setReferals(res.data);
        }).finally(()=>{
            setLoading(false);
        })
    }, []);

    return (
       loading ? <Loading/> : (
           <div>
               <h2>Invite Friends</h2>
               <button>
                   <a href={`https://telegram.me/share/url?url=t.me/tree_claimer_bot/app?startapp=${WebApp?.initDataUnsafe?.user?.id}`}>Invite</a>
               </button>
               <h3>My friends</h3>

               <ul className={'friends-list'}>
                   {
                       referals?.map((referal) => (
                           <li key={referal?.id}>
                               <div className="avatar">{referal?.first_name.charAt(0)}</div>
                               <div className="name">{referal?.first_name} ${referal?.last_name}</div>
                           </li>
                       ))
                   }
               </ul>
           </div>
       )
    )
}
