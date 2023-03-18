import styles from './Modal.module.css'
import starIcon from '../../images/starIcon.png'
import AddToCartButton from '../../UI/AddtoCartButton/AddToCartButton'
import addToCart from '../../actions/addToCart'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import closeModalIcon from '../../images/сloseModalIcon.png'
import { motion} from 'framer-motion'

const Modal = ({data, closeModal, getStars}) => {

    const dispatch = useDispatch()
    
    const addProductToCart = () => {
        dispatch(addToCart(data.id, data.title, +data.price.toFixed(2), data.image))
    }

    const [opacity, setOpacity] = useState(false)

    return (
        <motion.div
        className={opacity ? styles['modal-wrapper'] + ' ' + styles.opacity : styles['modal-wrapper']}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        >   
            <img 
            src={closeModalIcon}
            className={styles['close-modal-icon']}
            onClick={() => closeModal()}
            onMouseEnter={() => setOpacity(true)}
            onMouseLeave={() => setOpacity(false)}
            />
            <h2
            className={styles['modal-title']}
            >
                {data.title}
            </h2>
            <div className={styles['modal-service-info']}>
                <h3 className={styles['modal-price']}>
                    price: {data.price} $
                </h3>
                <div className={styles['modal-rating-wrapper']}>
                    <h2 className={styles['modal-rating']}>
                        rating: {data.rating.rate}
                    </h2>
                    <div className={styles['modal-starsWrapper']}>
                        {getStars(data.rating.rate).map((item, index) => <img src={starIcon} key={index.toString()}/>)}
                    </div>
                </div>
            </div>
            <div className={styles['modal-image-wrapper']}>
                <img 
                src={data.image} 
                className={styles['modal-image']}
                />
            </div>
            <div className={styles['add-toCart-wrapper']}>
                <AddToCartButton
                addProductToCart={addProductToCart}
                >
                    add to cart
                </AddToCartButton>
            </div>
            <div className={styles['modal-description']}>
                <p>{data.description}</p>
            </div>
            
        </motion.div>
    )
}

export default Modal