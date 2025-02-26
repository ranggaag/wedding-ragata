import DescriptionText from "../components/text/DescriptionText"
import MainTitle from "../components/title/MainTitle"
import ImgEnd from "../assets/images/img-end.png"
import { motion } from "framer-motion"
import slideInUp from "../components/animation/motion/SlideInUp"

const SectionEnd = () => {
  return (
    <motion.div
      className="flex flex-col gap-16 items-center justify-center text-center text-white-middle"
      initial="hidden"
      whileInView="visible"
      variants={slideInUp}
      transition={{ duration: 0.5 }}
    >
        <MainTitle title="Thank You" />
        <div className="relative">
            <div className="absolute bg-blue-dark bg-opacity-30 w-[250px] h-[390px] rounded-full"></div>
            <img src={ImgEnd} alt="" className="w-[250px] h-[390px] object-cover object-center rounded-full"/>
        </div>
        <DescriptionText>
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir di hari bahagia kami.
        </DescriptionText>
        <h1 className="text-3xl leading-normal tracking-widest great-vibes">
            Rangga & Iftah
        </h1>
    </motion.div>
  )
}

export default SectionEnd