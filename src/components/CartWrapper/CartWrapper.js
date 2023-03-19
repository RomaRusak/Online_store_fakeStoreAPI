import { motion } from "framer-motion"
import styles from './CartWrapper.module.css'
import { useSelector } from "react-redux"
import CartItem from "../CartItem/CartItem"
import CartCounter from "../../UI/CartCounter/CartCounter"

const CartWrapper = () => {

    const cartStore = useSelector(data => data.cart)

    const sumCounter = cartStore.reduce((accum,item) => accum += item.priceCounter, 0).toFixed(2)

    return (
        <motion.div
        className={styles['cart-wrapper']}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .45}}
        >
            {
                cartStore.length > 0
                ? <>
                    {
                        cartStore.map(item => (
                            <CartItem 
                            key={item.id}
                            {...item}
                            />
                        ))    
                    }
                    <div className={styles['cart-counter-wrapper']}>
                    <CartCounter>
                        {sumCounter} $
                    </CartCounter>
                    </div>
                  </>
                : (
                    <motion.h2 
                    initial={{x: -30}} 
                    animate={{x: 0}}>
                    ваша корзина пуста
                    </motion.h2>
                )
            }
        </motion.div>
    )
}

export default CartWrapper