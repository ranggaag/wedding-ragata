import MainTitle from "../components/title/MainTitle"
import IgFilter from "../assets/images/img-igFilter.png"
import DescriptionText from "../components/text/DescriptionText"
import NavButton from "../components/button/NavButton"

const SectionSix = () => {
  return (
    <div className="flex flex-col gap-16 items-center text-white">
        <div className="w-[294px]">
            <img src={IgFilter} alt="" className="object-cover"/>
        </div>
        <div className="flex flex-col gap-6 items-center">
            <div>
                <MainTitle title="Instagram Filter" />
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className="px-5">
                    <DescriptionText>
                        Abadikan setiap moment bahagia pada acara pernikahan kami dengan menandai unggahan anda sembari mengunakan Filter Instagram berikut.
                    </DescriptionText>
                </div>
                <div>
                    <NavButton
                        link="https://calendar.app.google/wRyh73ZDwE1DbgeE6"
                        icon=""
                        text="Instagram Filter"
                        border="border-white-middle"
                    />
                </div>
                <div>
                    <p className="text-xs">
                        * Gunakan instagram versi terbaru
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SectionSix