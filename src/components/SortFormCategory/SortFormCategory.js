import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './SortFormCategory.module.css'
import CategoryCheckbox from '../CategoryCheckbox/CategoryCheckbox'
import changeCategorySort from '../../actions/changeCategorySort'

const SortFormCategory = () => {

    const categoryFomInitialState = [
        {   
            id: 'checkboxAll',
            category: "all",
            checked: true,
            type: 'checkbox'
        },
        {   
            id: 'checkboxMen',
            category: "men's clothing",
            checked: false,
            type: 'checkbox'
        },
        {
            id: 'checkboxJewelery',
            category: "jewelery",
            checked: false,
            type: 'checkbox'
        },
        {
            id: 'checkboxElectronics',
            category: "electronics",
            checked: false,
            type: 'checkbox'
        },
        {
            id: 'checkboxWomen',
            category: "women's clothing",
            checked: false,
            type: 'checkbox'
        }
    ]

    const [categoryFormState, setCategoryFormState] = useState(categoryFomInitialState)

    const dispatch = useDispatch()

    const setCategoryFormStateHandler = (id) => {
        setCategoryFormState(prevState => [...prevState.map(item => {
            if (item.id != id) return item
            else {
                return {...item, checked: !item.checked}
            }
        })])

    }

    useEffect(() => {
        dispatch(changeCategorySort(categoryFormState.filter(item => item.checked === true).map(({category}) => category)))
    }, [categoryFormState])

    return (
        <div
        className={styles['sort-form-category-wrapper']}
        >
            <ul
            className={styles['sort-form-category-list']}
            >
                {categoryFomInitialState.map(item => {
                    return <CategoryCheckbox 
                    {...item}
                    key={item.id}
                    setCategoryFormStateHandler={setCategoryFormStateHandler}
                    />
                })}
            </ul>
        </div>
    )
}

export default SortFormCategory