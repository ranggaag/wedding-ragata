import MainTitle from "../components/title/MainTitle"
import DescriptionText from "../components/text/DescriptionText"
import StoryCard from "../components/cards/StoryCard"
import { motion } from "framer-motion"

const slideInUp = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const SectionSeven = () => {

  return (
    <div className="flex flex-col gap-16">
        <motion.div
          className="flex flex-col gap-5 items-center text-center text-white-middle"
          initial="hidden"
          whileInView="visible"
          variants={slideInUp}
          transition={{ duration: 0.5 }}
        >
          <MainTitle title="Our Love Story" />
          <DescriptionText>
          “Happy marriages begin when we marry the ones we love, and they blossom when we love the ones we marry”
          </DescriptionText>
        </motion.div>
        <motion.div
          className="bg-storyImg w-full h-[250px] bg-cover bg-center rounded-xl"
          initial="hidden"
          whileInView="visible"
          variants={slideInUp}
          transition={{ duration: 0.5 }}
        >
        </motion.div>
        <motion.div
          className="flex flex-col gap-16 rounded-xl"
          initial="hidden"
          whileInView="visible"
          variants={slideInUp}
          transition={{ duration: 0.5 }}
        >
          <StoryCard
            time="2016"
            title="Awal Bertemu"
            description="Kami berkenalan ketika masih menjadi mahasiswa di Universitas yang sama. Sejak saat itu hingga kini, kami menjalani hubungan yang pasti ada kalanya bertemu rasa bahagia ataupun bertemu kerikil ditiap jalan yang kami lalui."
          />
          <StoryCard
            time="2024"
            title="Lamaran"
            description="Setelah melewati pertimbangan yang cukup panjang, kami pada akhirnya merasa siap untuk melaksanakan lamaran pada tanggal 12 Oktober 2024."
          />
          <StoryCard
            time="2025"
            title="Pernikahan"
            description="Pada tanggal 25 Januari 2025 kami sepakat memutuskan untuk menikah. Semoga pernikahan kami diridhai Allah SWT dan bisa saling menerima kelebihan ataupun kekurangan satu sama lainnya."
          />
        </motion.div>
    </div>
  )
}

export default SectionSeven