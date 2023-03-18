import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './SortFormPrice.module.css'
import PriceInput from '../PriceInput/PriceInput'
import changeCategoryPrice from '../../actions/changeCategoryPrice'

const SortFormPrice = () => {

    const priceFormInitialState = [
        {
            id: 'inputPriceMin',
            value: '',
            type: 'number',
            placeholder: 'min',
            label: 'минимальная',
            min: '1',
            step: '1',
        },

        {
            id: 'inputPriceMax',
            value: '',
            type: 'number',
            placeholder: 'max',
            label: 'максимальная',
            min: '1',
            step: '1',
        },

    ]

    const [priceFormState, setPriceFormState] = useState(priceFormInitialState)

    const dispatch = useDispatch()

    const setPriceFormStateHandler = (id,value) => {
        setPriceFormState(prevState => {
            return [...prevState.map(item => {
                if (item.id !== id) return item
                return {...item, value}
            })]
        })
    }
    
    useEffect(() => {

        const timer = setTimeout(() => {
            dispatch(changeCategoryPrice(priceFormState[0].value, priceFormState[1].value))
        }, 500)

        return () => {
            clearInterval(timer)
        }
        
    }, [priceFormState])
    return (
        <div
        className={styles['sort-form-category-wrapper']}
        >
            <ul
            className={styles['sort-form-price-list']}
            >
                {priceFormState.map(item => {
                    return (
                        <PriceInput 
                        key={item.id}
                        data = {item}
                        changeValue={setPriceFormStateHandler}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default SortFormPrice