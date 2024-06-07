import {Link, NavLink} from "react-router-dom";

export default function Menu() {
    return (
        <div className={'menu'}>
            <ul>
                <li>
                    <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : '')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/tasks'} className={({isActive}) => (isActive ? 'active' : '')}>Tasks</NavLink>
                </li>
                <li>
                    <NavLink to={'/friends'} className={({isActive}) => (isActive ? 'active' : '')}>Friends</NavLink>
                </li>
            </ul>
        </div>
    )
}
