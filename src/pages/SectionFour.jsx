import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import EventCard from "../components/cards/EventCard"
import LocationCard from "../components/cards/LocationCard"
import slideInUp from "../components/animation/motion/SlideInUp"

const images = [
    'https://mywedding.ragata.id/image-slide/img-prewed.jpeg',
    'https://mywedding.ragata.id/image-slide/IMG_0258_2.png',
    'https://mywedding.ragata.id/image-slide/IMG_5714-2.png'
]

const SectionFour = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000)
    
        return () => clearInterval(interval);
    }, []);

  return (
    <div className=" overflow-hidden">
        {images.map((image, index) => (
            <div
                key={index}
                className={`fixed inset-0 h-screen mx-auto transition-opacity duration-3000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
                } -z-10 lg:w-[30%]`}
            >
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-screen object-cover" />
            </div>
        ))}
        <div className="px-10 py-32 bg-black bg-opacity-50 ">
            <motion.div
                className="px-5 py-12 bg-white-middle bg-opacity-20 rounded-lg flex flex-col gap-10 items-center justify-center"
                initial="hidden"
                whileInView="visible"
                variants={slideInUp}
                transition={{ duration: 0.9}}
            >
                <EventCard
                    title="Akad"
                    date="sabtu, 25 januari 2025"
                    time="08.00 - Selesai"
                />
                <EventCard
                    title="Resepsi"
                    date="sabtu, 25 januari 2025"
                    time="10.00 - Selesai"
                />
                <LocationCard
                    title="Lokasi"
                    location="Kediaman Mempelai Wanita"
                    address="Jl. Dharma Wanita V no 32 RT 005/RW 01 Kel. Rawa Buaya, Kec. Cengkareng, Jakarta Barat DKI Jakarta 11740"
                />
            </motion.div>
        </div>
    </div>
  )
}

export default SectionFour