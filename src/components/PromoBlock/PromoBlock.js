import styles from './PromoBlock.module.css'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'

const PromoBlock = () => {    

    return (
        <motion.div
        className={styles['promo-block-wrapper']}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .45}}
        >
            <h1 className={styles['promo-block-title']}>
                One stop for all the <span className={styles.blue}>fashion trends</span>
            </h1>
            <p className={styles['promo-block-description']}>
                The home to all types of clothing for men, women and children
            </p>
            <NavLink to={'catalog'}>
                <button
                className={styles['promo-block-button']}
                >
                    DISCOVER THE NEW
                </button>
            </NavLink>
        </motion.div>
    )
}

export default PromoBlock