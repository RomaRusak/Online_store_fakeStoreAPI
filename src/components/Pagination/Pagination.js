import styles from './Pagination.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import arrow from '../../images/arrowLeftPagination.png'

const Pagination = ({productsOnPage, totalProducts, paginate, currentPage}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsOnPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            {pageNumbers.length > 1
            && (
                <ul className={styles.paginationList}>
                    {
                        <AnimatePresence initial={false}>
                            {
                                 currentPage > 1
                                 && (
                                     <motion.li
                                     initial={{x: -20, opacity: 0}}
                                     animate={{x: 0, opacity: 1}}
                                     exit={{x: -20, opacity: 0}}
                                     onClick={() => {paginate(currentPage - 1)}}
                                     className={styles['pagination-arrow-left']}
                                     >
                                        <img src={arrow}  />
                                     </motion.li>
                                 )
                            }
                        </AnimatePresence>
                    }
                {pageNumbers.map(number => (
                    <li 
                    className={`${styles.paginationLink} ${currentPage == number ? styles.paginationActive : ''}`}
                    key={number}
                    onClick={() => {paginate(number)}}
                    >                      
                        {number}
                    </li>
                ))}
                {
                    <AnimatePresence initial={false}>
                        {
                            currentPage < pageNumbers.length
                            && (
                                <motion.li
                                initial={{x: 20, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                exit={{x: 20, opacity: 0}}
                                onClick={() => {paginate(currentPage + 1)}}
                                className={styles['pagination-arrow-right']}
                                >
                                    <img src={arrow} />
                                </motion.li>
                            )
                        }
                    </AnimatePresence>
                }
                </ul>
            )
            }
        </>
    )
}

export default Pagination