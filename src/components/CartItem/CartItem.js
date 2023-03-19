import styles from './CartItem.module.css'
import CartButton from '../../UI/CartButton/CartButton'
import cartInc from '../../actions/cartInc'
import cartDec from '../../actions/cartDec'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

const CartItem = (props) => {
    
    const dispatch = useDispatch()

    const incrementProductInCart = () => {
        dispatch(cartInc(props.id))
    }

    const decrementProductinCart = () => {
        dispatch(cartDec(props.id))
    }

    return (
        <div
        className={styles['cart-item-wrapper']}
        >
            <h3 className={styles['cart-item-title']}>{props.name} $</h3>
            <div className={styles['cart-item-service']}>
                <p className={styles['cart-item-price']}>{props.price.toFixed(2)} $</p>
                <div className={styles['cart-item-counterWrapper']}>
                    <p className={styles.big}>X</p> 
                    {props.counter}
                </div>
            </div>
            <div className={styles['cart-item-buttonsWrapper']}>
                <CartButton
                increment={incrementProductInCart}
                type={'inc'}
                >
                    +
                </CartButton>
                <CartButton
                decrement={decrementProductinCart}
                type={'dec'}
                >
                    -
                </CartButton>
            </div>
        </div>
    )
}

export default CartItem