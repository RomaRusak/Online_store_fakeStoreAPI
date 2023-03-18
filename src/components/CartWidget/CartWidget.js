import { useSelector } from 'react-redux'
import styles from './CartWidget.module.css'
import cartIconWidget from '../../images/cartWidgetIcon.png'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {

    const data = useSelector(data => data.cart)
    const productsCounter = data.reduce((accum, item) => accum += item.counter, 0)
    const priceCounter = data.reduce((accum, item) => accum += item.priceCounter, 0).toFixed(2)

    return (
        <NavLink to={'cart'}>
            <div
            className={styles['cart-widget-wrapper']}
            >
                <div
                className={styles['cart-widget']}
                >
                    <img
                    src={cartIconWidget}
                    className={styles['cart-widget-icon']}
                    />
                    <p className={styles['cart-widget-product-counter']}>
                        {productsCounter == 0 ? 'Bag is empty' : productsCounter > 1 ?  productsCounter + ' items' : productsCounter + ' item'}
                    </p>
                    <p className={styles['cart-widget-price-counter']}>
                        {productsCounter > 0 ? priceCounter + ' $' : ''}
                    </p>
                </div>
            </div>
        </NavLink>
    )
}

export default CartWidget