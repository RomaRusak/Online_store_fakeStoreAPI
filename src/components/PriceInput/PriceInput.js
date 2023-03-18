import styles from './PriceInput.module.css'

const PriceInput = (props) => {

    const changeInput = (e) => {
        if ( +e.target.value < 0) return
        props.changeValue(props.data.id, e.target.value)
    }

    return (
        <li>
            <label htmlFor={props.id}>{props.label}</label>
            <input
            {...props.data}
            onChange={changeInput}
            />
        </li>
    )
}

export default PriceInput