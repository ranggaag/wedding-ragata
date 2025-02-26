import MainTitle from "../components/title/MainTitle"
import CountDownTimer from "../components/fiture/CountDownTimer/CountDownTimer"
import NavButton from "../components/button/NavButton"
import { motion } from "framer-motion"
import slideInUp from "../components/animation/motion/SlideInUp"

const SectionFive = () => {
  const weddingDate = '2025-01-25T08:00:00';

  return (
    <motion.div
      className="px-5 py-12 flex flex-col gap-24 items-center bg-white-middle bg-opacity-20 rounded-lg"
        initial="hidden"
        whileInView="visible"
        variants={slideInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-8 items-center text-white-middle">
          <MainTitle title="Countdown Timer" />
          <CountDownTimer
            targetDate={weddingDate}
          />
          <NavButton
            link="https://calendar.app.google/wRyh73ZDwE1DbgeE6"
            icon=""
            text="Save The Date"
            border="border-white-middle"
          />
        </div>
    </motion.div>
  )
}

export default SectionFive