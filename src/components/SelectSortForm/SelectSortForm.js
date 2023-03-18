import styles from './SelectSortForm.module.css'

const SelectSortForm = (props) => {

    const changeSelectSort = (e) => {
        props.setSelectSormFormState(e.target.value)
    }

    return (
        <div className={styles['selectSort-wrapper']}> 
            <select onChange={changeSelectSort} value={props.selectSormFormState}>
                <option value="increase">по возрастанию</option>
                <option value="decrease">по убыванию</option>
                <option value="category">по категориям</option>
                <option value="rating">по рейтингу</option>
            </select>
        </div>
    )
}

export default SelectSortForm