import { useState } from 'react'
import { motion } from "framer-motion"
import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"

import MainTitle from '../components/title/MainTitle'
import DescriptionText from '../components/text/DescriptionText'
import slideInUp from "../components/animation/motion/SlideInUp"

import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import { RowsPhotoAlbum } from 'react-photo-album'
import "react-photo-album/rows.css"


const SectionEight = () => {

  const images = [
    {
      src: "https://mywedding.ragata.id/gallery/img-2.png",
      width: 720, height: 1020
    },
    {
      src: "https://mywedding.ragata.id/gallery/img-3.png",
      width: 720, height: 1020
    },
    {
      src: "https://mywedding.ragata.id/gallery/img-4.png",
      width: 720, height: 1020
    },
    {
      src: "https://mywedding.ragata.id/gallery/img-8.png",
      width: 1020, height: 720
    },
    {
      src: "https://mywedding.ragata.id/gallery/img-9.png",
      width: 1020, height: 720
    },
    {
      src: "https://mywedding.ragata.id/gallery/img-5.png",
      width: 1020, height: 720
    },
    {
      src: "https://mywedding.ragata.id/gallery/img-6.png",
      width: 720, height: 1020
    },
    {
      src: "https://mywedding.ragata.id/gallery/img-7.png",
      width: 1020, height: 720
    },
    {
      src: "https://mywedding.ragata.id/gallery/img-10.png",
      width: 1020, height: 720
    },
    {
      src: "https://mywedding.ragata.id/gallery/img-11.png",
      width: 720, height: 1020
    }
    
  ]

  const [index, setIndex] = useState(-1);

  return (
    <div>
      <div className="flex flex-col gap-16 items-center">
        <motion.div
          className='flex flex-col gap-3 items-center text-center text-white-middle'
          initial="hidden"
          whileInView="visible"
          variants={slideInUp}
          transition={{ duration: 0.5 }}
        >
          <MainTitle  title="Our Gallery" />
          <DescriptionText>
            “Menikah bukan perlombaan, bukan soal cepat atau lambat. Tetapi, siapa yang siap mengemban amanah yang besar.”
          </DescriptionText>

        </motion.div>
      </div>

      <div className="mt-16">
        <RowsPhotoAlbum
          photos={images}
          targetRowHeight={150}
          onClick={({ index: current }) => setIndex(current)}
        />

        <Lightbox
          index={index}
          slides={images}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Thumbnails]}
        />
      </div>

    </div>
  )
}

export default SectionEight