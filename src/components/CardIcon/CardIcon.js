import { useState } from 'react'
import styles from './CardIcon.module.css'
import starIcon from '../../images/starIcon.png'
import BackDrop from '../BackDrop/BackDrop'
import { motion } from 'framer-motion'

const CardIcon = (props) => {

    const [showModal, setShowModal] = useState(false)

    const getStars = (rate) => {
        const roundedNumber = Math.round(rate)

        const starsArr = []

        for (let i = 0; i< roundedNumber; i++) {
            starsArr.push(i)
        }

        return starsArr
    }

    return (
        <>
        <motion.div
        className={styles['card-icon-wrapper']}
        onClick={() => {setShowModal(true)}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0 }}
        >
            <h2
            className={styles['card-icon-title']}
            >{props.title}</h2>
            <img 
            className={styles['card-icon-productImage']}
            src={props.image}  />
            <h2
            className={styles['card-icon-rating']}
            >rating: {props.rating.rate}</h2>
            <div
            className={styles['card-icon-starsWrapper']}
            >
                {getStars(props.rating.rate).map((item, index) => <img src={starIcon} key={index.toString()}/>)}
            </div>
            <h3>price: {props.price} $</h3>
        </motion.div>
        {showModal && <BackDrop 
        closeModal = {setShowModal}
        data={props}
        getStars={getStars}
        />}
        </>
    )
}

export default CardIcon