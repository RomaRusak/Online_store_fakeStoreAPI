import ReactDOM from "react-dom"
import styles from './BackDrop.module.css'
import Modal from "../Modal/Modal"

const BackDrop = (props) => {
    return (
        <div
        className={styles.backdrop}
        onClick={() => {props.closeModal(false)}}
        >

        </div>
    )
}

const ModalPortal = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<BackDrop closeModal={props.closeModal}/>, document.getElementById('backdrop'))}
        {ReactDOM.createPortal(<Modal 
        closeModal={props.closeModal}
        data={{...props.data}}
        getStars={props.getStars}
        />, document.getElementById('modal'))}
        </>
    )
}

export default ModalPortal