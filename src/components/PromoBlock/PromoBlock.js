import { motion } from "framer-motion"

const PromoBlock = () => {    

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .45}}
        >
            я промо блок
        </motion.div>
    )
}

export default PromoBlock