import { initUtils } from '@tma.js/sdk';

const utils = initUtils();

export default function Friends () {
    const handleInvite = () => {
        utils.shareURL('t.me/tree_claimer_bot/app', 'Look! Some cool app here!');
    }
    return (
        <div>
            <h2>Friends</h2>
            <a href={`https://telegram.me/share/url?url=t.me/tree_claimer_bot/app?startapp=12121212`}>Invite</a>
        </div>
    )
}
