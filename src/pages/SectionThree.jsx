import { motion } from "framer-motion";
import ImageComponent from "../components/images/ImageComponent"
import DescriptionText from "../components/text/DescriptionText"
import ImgBride from "../assets/images/bride.png"
import ImgGroom from "../assets/images/groom.png"
import NameCard from "../components/cards/NameCard"
import IconCincin from "../assets/images/cincin-icon.png"
import Bismillah from "../assets/images/bismillah.svg"
import slideInUp from "../components/animation/motion/SlideInUp"

const SectionThree = () => {
  return (
    <div className="flex flex-col gap-24 items-center">
        <motion.div
            className="flex flex-col gap-24 items-center text-black-rangga"
            initial="hidden"
            whileInView="visible"
            variants={slideInUp}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col gap-6 items-center text-center">
                <span>
                    <img src={Bismillah} alt="" />
                </span>
                <DescriptionText>
                    Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami.
                </DescriptionText>
            </div>
            <div className="flex flex-col gap-8">
                <ImageComponent image={ImgBride} />
                <NameCard
                    mempelai="Iftah Nurdiyanti"
                    gender="Putri"
                    bapak="Muhammad Hasim"
                    ibu="Saleha (Almh)"
                    ig="https://instagram.com/iftahh_in"
                    border="border-black-rangga"
                />
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInUp}
            transition={{ duration: 0.5 }}
        >
            <img src={IconCincin} alt="" className="size-16" />
        </motion.div>
        <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            variants={slideInUp}
            transition={{ duration: 0.5 }}
        >
            <ImageComponent image={ImgGroom} />
            <NameCard
                mempelai="Rangga Abdul Gani"
                gender="Putra"
                bapak="Abdul Manaf (Alm)"
                ibu="Yoyoh Badriah"
                ig="https://instagram.com/abdghani_rangga"
                border="border-black-rangga"
            />
        </motion.div>
    </div>
  )
}

export default SectionThree