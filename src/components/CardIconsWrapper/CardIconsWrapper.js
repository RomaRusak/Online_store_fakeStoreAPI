import styles from './CardIconsWrapper.module.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardIcon from '../CardIcon/CardIcon'
import Pagination from '../Pagination/Pagination'
import SelectSortForm from '../SelectSortForm/SelectSortForm'
import { AnimatePresence, motion } from 'framer-motion'
// import { wait } from '@testing-library/user-event/dist/utils'

const CardIconsWrapper = () => {
    
    const [shownCards, setShownCards] = useState([])
    const allProducts = useSelector(store => store.store)
    const filters = useSelector(store => store.sortForm)

    const [selectSormFormState, setSelectSormFormState] = useState('category')

    const [currentPage, setCurrentPage] = useState(1)
    const productsOnPage = 9
    const lastProductIndex = currentPage * productsOnPage
    const firstProductIndex = lastProductIndex - productsOnPage
    const currentProducts = shownCards.slice(firstProductIndex, lastProductIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const filtration = (products, filters, category) => {
        
        let shownProducts = products.filter(({category}) => {
                if (filters.category.find(item => item == 'all')) return true
                return filters.category.some(item => item == category)
            }).filter(({price}) => {
                const minPrice = filters.price.priceMin
                const maxPrice = filters.price.priceMax
                if (minPrice == '' || maxPrice == '') {
                    return minPrice == '' && maxPrice == ''
                    ? true
                    : (minPrice == '')
                    ? price <= maxPrice
                    : price >= minPrice
                } 
                   return price >= minPrice && price <= maxPrice ? true : false
            })
        
        const sorting = (products, category) => {
            
            switch (category) {
                case 'category':
                    return products.sort((itemA, itemB) => {
                        const categoryA = itemA.category.toLowerCase()
                        const categoryB = itemB.category.toLowerCase()

                        if (categoryA > categoryB) return 1
                        else return -1
                    })
                case 'increase':
                    return products.sort((itemA, itemB) => itemA.price - itemB.price)
                case 'decrease':
                    console.log('убывание')
                    return products.sort((itemA, itemB) => itemB.price - itemA.price)
                case 'rating':
                    return products.sort((itemA, itemB) => itemB.rating.rate - itemA.rating.rate)
                default:
                    return products
            }

        }
        
        shownProducts = sorting(shownProducts, category)

        return shownProducts
    }

    useEffect(() => {
        setCurrentPage(1) 
        if (allProducts.length > 0) setShownCards(filtration(allProducts[0], filters, selectSormFormState))
    }, [allProducts, filters, selectSormFormState])

     
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .45}}
        className={styles['cart-icons-wrapper']}
        >
            
            {
            shownCards.length > 0
            ? <>
                <SelectSortForm
                selectSormFormState={selectSormFormState}
                setSelectSormFormState={setSelectSormFormState}
                />
                <div className={styles['cart-icons-gridContainer']}>
                {
                    <AnimatePresence mode={'wait'}>
                        {currentProducts.map(item => (
                            <CardIcon 
                            key={item.id}
                            {...item}
                            />
                        ))}
                    </AnimatePresence>
                }
                </div>
                <div className={styles['pagination-wrapper']}>
                    <Pagination 
                    productsOnPage={productsOnPage}
                    totalProducts={shownCards.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    />
                </div>
              </>
            : <h2>ничего не найдено</h2>
            }
        </motion.div>
    )
}

export default CardIconsWrapper