import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {

    return (
        <ul
        className={styles['nav-list']}
        >
            <li>
                <NavLink className={({ isActive}) => isActive ? styles['active'] + ' ' + styles['nav-link'] : styles['nav-link']} to={'.'}>Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? styles['active'] + ' ' + styles['nav-link'] : styles['nav-link']} to={'catalog'}>Catalog</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive, isPending }) => isActive ? styles['active'] + ' ' + styles['nav-link'] : styles['nav-link']} to={'cart'}>Cart</NavLink>
            </li>
        </ul>
    )
}

export default Nav