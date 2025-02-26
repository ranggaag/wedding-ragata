import { motion } from "framer-motion"
import DescriptionText from "../components/text/DescriptionText"
import slideInUp from "../components/animation/motion/SlideInUp"

const SectionTwo = () => {

  return (
    <div className="bg-section-two h-screen bg-cover">
        <div className="px-10 pb-24 linear-section-two h-screen flex flex-col gap-8 text-white-middle justify-end">
          <motion.div
            className="flex flex-col gap-3 average"
            initial="hidden"
            whileInView="visible"
            variants={slideInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg">The Wedding of</h2>
            <h1 className="text-4xl leading-normal">
              IFTAH & <br /> RANGGA
            </h1>
            <h2 className="text-lg">
              25 . 01 . 25
            </h2>
            <span className="w-[251px] border-solid rounded-full border-white-middle border-[1px]"></span>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 text-justify"
            initial="hidden"
            whileInView="visible"
            variants={slideInUp}
            transition={{ duration: 0.5 }}
          >
            <DescriptionText>
            “ Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. “
            </DescriptionText>
            <h1 className="average text-base">
            ~ Q.S Ar - Rum : 21 ~
            </h1>
          </motion.div>
        </div>
    </div>
  )
}

export default SectionTwo