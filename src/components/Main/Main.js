import { useEffect, useCallback, useState } from "react"
import { useDispatch} from 'react-redux'
import dataStoreGet from "../../actions/dataStoreGet"
import Preloader from "../../UI/Preloader/Preloader"
import { Outlet } from "react-router-dom"
import styles from './Main.module.css'

const Main = () => {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const getData = useCallback( async () => {
        setLoading(true)
        const url = 'https://fakestoreapi.com/products'
        const responce = await fetch(url)
        const data = await responce.json()

        dispatch(dataStoreGet(data))
        setLoading(false)
    })
    
    useEffect(() => {

        getData()
        
    }, [])

    return (
        <main className={styles.main}>
            {loading && <Preloader />}
            <Outlet />
        </main>
    )
}

export default Main