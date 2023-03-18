import SortFormWrapper from "../SortFormWrapper/SortFormWrapper"
import styles from './Aside.module.css'

const Aside = () => {

    return (
        <aside className={styles.aside}>
            <SortFormWrapper />
        </aside>
    )
}

export default Aside