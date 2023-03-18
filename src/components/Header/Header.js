import styles from './Header.module.css'
import Nav from '../Nav/Nav'
import CartWidget from '../CartWidget/CartWidget'

const Header = () => {

    return (
        <header className={styles.header}>
            <Nav />
            <CartWidget />
        </header>
    )
}

export default Header