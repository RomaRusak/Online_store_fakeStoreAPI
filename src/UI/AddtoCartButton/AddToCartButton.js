import styles from './AddToCartButton.module.css'

const AddToCartButton = (props) => {
    return <button 
    className={styles.button}
    onClick={props.addProductToCart}
    >
        {props.children}
    </button>
}

export default AddToCartButton