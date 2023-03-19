import styles from './SelectSortForm.module.css'

const SelectSortForm = (props) => {

    const changeSelectSort = (e) => {
        props.setSelectSormFormState(e.target.value)
    }

    return (
        <div className={styles['selectSort-wrapper']}> 
            <select onChange={changeSelectSort} value={props.selectSormFormState}>
                <option value="increase">in increasing</option>
                <option value="decrease">in decreasing</option>
                <option value="category">by categories</option>
                <option value="rating">by rating</option>
            </select>
        </div>
    )
}

export default SelectSortForm