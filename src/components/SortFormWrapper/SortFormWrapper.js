import SortFormCategory from "../SortFormCategory/SortFormCategory"
import SortFormPrice from "../SortFormPrice/SortFormPrice"
import styles from './SortFormWrapper.module.css'
import arrowToBottomIcon from '../../images/arrowToBottom.png'
import { useState } from "react"

const SortFormWrapper = () => {

    const [hideFilters, setHideFilters] = useState({categoryFilter: false, priceFilter: false})

    const setHideFiltersHandler = (key) => {
        setHideFilters(prevState => (
            {...prevState, [key]: !prevState[key]}
        ))
    }

    return (
        <div
        className={styles['sort-forms-wrapper']}
        >   
            <div
            className={`${styles.filtersAccordeonHeader} ${hideFilters.categoryFilter ? styles.filtersAccordeonHeaderActive : ''}`}
            onClick={() => {setHideFiltersHandler('categoryFilter')}}
            >
                <p>categories</p>
                <img
                src={arrowToBottomIcon} 
                />
            </div>
            <SortFormCategory />
            <div
            className={`${styles.filtersAccordeonHeader} ${hideFilters.priceFilter ? styles.filtersAccordeonHeaderActive : ''}`}
            onClick={() => {setHideFiltersHandler('priceFilter')}}
            >
                <p>price</p>
                <img 
                src={arrowToBottomIcon}
                />
            </div>
            <SortFormPrice />
        </div>
    )
}

export default SortFormWrapper