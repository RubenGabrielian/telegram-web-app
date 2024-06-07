import { initUtils } from '@tma.js/sdk';

const utils = initUtils();

export default function Friends () {
    const handleInvite = () => {
        utils.shareURL('t.me/tree_claimer_bot/app?ref=1212121', 'Look! Some cool app here!');
    }
    return (
        <div>
            <h2>Friends</h2>
            <button onClick={handleInvite}>Invite</button>
        </div>
    )
}
