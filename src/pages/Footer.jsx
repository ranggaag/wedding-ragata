import { motion } from "framer-motion"
import Logo from "../assets/images/logo-ragata-white.svg"
import slideInUp from "../components/animation/motion/SlideInUp"

const Footer = () => {
  return (
    <motion.div
      className="flex flex-col gap-4 items-center"
      initial="hidden"
      whileInView="visible"
      variants={slideInUp}
      transition={{ duration: 0.5 }}
    >
      <img src={Logo} alt="" className="size-12"/>
      <div className="flex flex-col gap-1 items-center">
        <h1 className="average text-lg text-grey-light text-center">
          ragata.id
        </h1>
        <h1 className="text-sm text-white-middle">
          Digital Wedding Invitation © 2025
        </h1>
      </div>
    </motion.div>
  )
}

export default Footer