import MainTitle from "../components/title/MainTitle"
import WishesForm from "../components/form/WishesForm"
import DescriptionText from "../components/text/DescriptionText"
import WishesCard from "../components/cards/WishesCard"
import { WishesProvider } from '../components/context/WishesContext'
import { motion } from "framer-motion"
import slideInUp from "../components/animation/motion/SlideInUp"

const SectionNine = () => {

  return (
    <WishesProvider>
        <div className="px-5 py-12 flex flex-col gap-8 items-center bg-white-middle bg-opacity-20 rounded-lg">
            <motion.div
                className="flex flex-col gap-3 items-center text-center text-white-middle"
                initial="hidden"
                whileInView="visible"
                variants={slideInUp}
                transition={{ duration: 0.5 }}
            >
                <MainTitle title="Best Wishes" />
                <DescriptionText>
                    Leave us your beautiful wishes and most sincere prayers here as, we are so excited to starting a new journey together
                </DescriptionText>
            </motion.div>
            <div className="flex flex-col gap-8 items-start text-white-middle">
                <WishesForm />
                <div id="comments" className="w-full wishes px-2 h-[300px] overflow-y-scroll py-4 border-solid border-t-2 border-white-middle">
                    <WishesCard />
                </div>
            </div>
        </div>
    </WishesProvider>
  )
}

export default SectionNine