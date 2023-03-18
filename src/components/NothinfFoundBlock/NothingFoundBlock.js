import sadSmiley from '../../images/sadSmileyIcon.png'
import styles from './NothingFoundBlock.module.css'
import { motion } from 'framer-motion'

const NothingFoundBlock = () => {

    return (
        <motion.div 
        className={styles['nothing-found-wrapper']}
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        >
            <p>Nothing found</p>
            <img src={sadSmiley} />
        </motion.div>
    )
}

export default NothingFoundBlock