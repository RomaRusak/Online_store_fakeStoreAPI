import styles from './CategoryCheckbox.module.css'

const CategoryCheckbox = (props) => {

    const input = () => {
        return (
            <input 
            type={props.type}
            id={props.id}
            defaultChecked={props.checked}
            onChange={() => {props.setCategoryFormStateHandler(props.id)}}
            />
        )
    }
    
    return (
        <li
        className={styles['category-checkbox-wrapper']}
        >
           {input()}
            <label 
            htmlFor={props.id}
            >
                {props.category}
            </label>
        </li>
    )
}

export default CategoryCheckbox