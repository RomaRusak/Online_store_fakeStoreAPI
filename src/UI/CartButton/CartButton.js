import styles from './CartButton.module.css'

const CartButton = (props) => {

    const button = (props.type == 'inc')
    ? (
        <button 
        className={styles['cart-button'] + ' ' + styles['cart-button-increment']}
        onClick={() => {props.increment()}}
        >
            {props.children}
        </button>
    )
    : (
        <button 
        className={styles['cart-button'] + ' ' + styles['cart-button-decrement']}
        onClick={() => {props.decrement()}}
        >
            {props.children}
        </button>
    )

    return button
}

export default CartButton