import WebApp from "@twa-dev/sdk";


export default function Friends () {

    return (
        <div>
            <h2>Friends</h2>
            <a href={`https://telegram.me/share/url?url=t.me/tree_claimer_bot/app?startapp=${WebApp?.initDataUnsafe?.user?.id}`}>Invite</a>
        </div>
    )
}
