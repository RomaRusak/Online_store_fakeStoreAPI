import styles from './CartCounter.module.css'

const CartCounter = (props) => {

    return (
        <p
        className={styles['cart-counter']}
        >
            {props.children}
        </p>
    )
}

export default CartCounter