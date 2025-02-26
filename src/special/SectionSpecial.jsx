import { motion } from "framer-motion"
import GiftCard from "../components/cards/GiftCard"
import DescriptionText from "../components/text/DescriptionText"
import MainTitle from "../components/title/MainTitle"
import slideInUp from "../components/animation/motion/SlideInUp"
import KirimKado from "../components/cards/KirimKado"

const SectionSpecial = () => {
  return (
    <div className="px-5 py-8 rounded-lg flex flex-col gap-12 items-center ">
        <motion.div
            className="flex flex-col gap-4 items-center text-center text-white-middle"
            initial="hidden"
            whileInView="visible"
            variants={slideInUp}
            transition={{ duration: 0.5 }}
        >
            <MainTitle title="Wedding Gift" />
            <DescriptionText>
                Your presence is a present in itself. But if you do wish to give us something else, please tap the button down below for further information
            </DescriptionText>
        </motion.div>
        <motion.div
            className=" flex flex-col gap-12"
            initial="hidden"
            whileInView="visible"
            variants={slideInUp}
            transition={{ duration: 0.5 }}
        >
            <GiftCard
                logo="https://mywedding.ragata.id/icons/bca-logo.png"
                norek="5490386281"
                nama="Rangga Abdul Gani"
            />
            <GiftCard
                logo="https://mywedding.ragata.id/icons/bca-logo.png"
                norek="4790411230"
                nama="Iftah Nurdiyanti"
            />
            <GiftCard
                logo="https://mywedding.ragata.id/icons/logo-bank-dki.svg"
                norek="30323392634"
                nama="Siti Ropiko"
            />
            <KirimKado
                logo="https://mywedding.ragata.id/icons/kado.svg"
                alamat="Jl. Dharma Wanita V no 32 RT 005/RW 01 Kel. Rawa Buaya, Kec. Cengkareng, Jakarta Barat DKI Jakarta 11740"
                nama="Iftah Nurdiyanti"
            />
        </motion.div>
    </div>
  )
}

export default SectionSpecial