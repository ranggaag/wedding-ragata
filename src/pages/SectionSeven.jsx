import MainTitle from "../components/title/MainTitle"
import DescriptionText from "../components/text/DescriptionText"
import ImgLove from "../assets/images/imglovestory.png"
import StoryCard from "../components/cards/StoryCard"


const SectionSeven = () => {
  return (
    <div className="flex flex-col gap-16">
        <div className="px-5 pt-16 pb-24 flex flex-col gap-5 items-center text-center bg-grey-light">
            <MainTitle title="Our Love Story" />
            <DescriptionText>
            “Happy marriages begin when we marry the ones we love, and they blossom when we love the ones we marry”
            </DescriptionText>
        </div>
        <div className="-mt-32 relative flex flex-col items-center ">
          <span className="absolute overlay w-[353px] h-[280px] rounded-lg"></span>
          <img src={ImgLove} alt="" className="h-[280px] object-cover rounded-lg"/> 
        </div>
        <div className="px-5 flex flex-col gap-16">
          <StoryCard
            time="2016"
            title="Awal Bertemu"
            description="Dimulai dari bangku kuliah kami berkenalan. Sejak saat itu hingga kini kami kami menjalani hubungan sampai menuju pelaminan."
          />
          <StoryCard
            time="2024"
            title="Bertunagan"
            description="Dalam pertimbangan mental dan finansial, meskipun keadaan kami sulit. 12 Oktober 2024 kami memutuskan untuk bertunangan untuk menuju jenjang hubungan yang lebih dalam."
          />
          <StoryCard
            time="2025"
            title="Pernikahan"
            description="25 Januari 2025 kami memutuskan untuk menikah. Dengan persiapan yang sebentar dan bekal finansial yang tidak banyak, alhamdulillah Allah memberikan jalan bagi kami menuju pernikahan."
          />
        </div>
    </div>
  )
}

export default SectionSeven