import ImageComponent from "../components/images/ImageComponent"
import DescriptionText from "../components/text/DescriptionText"
import ImgBride from "../assets/images/bride.png"
import ImgGroom from "../assets/images/groom.png"
import NameCard from "../components/cards/NameCard"
import IconCincin from "../assets/images/cincin-icon.png"
import Bismillah from "../assets/images/bismillah.svg"

const SectionThree = () => {
  return (
    <div className="flex flex-col gap-24 items-center">
        <div className="flex flex-col gap-24 items-center text-black-rangga">
            <div className="flex flex-col gap-4 items-center text-center">
                <span>
                    <img src={Bismillah} alt="" />
                </span>
                <DescriptionText>
                Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami.
                </DescriptionText>
            </div>
            <div className="flex flex-col gap-8">
                <ImageComponent
                    image={ImgBride}
                />
                <NameCard
                    mempelai="Iftah Nurdiyanti"
                    gender="Putri"
                    bapak="Muhammad Hasim"
                    ibu="Saleha (Almh)"
                    ig="https://instagram.com/iftahh_in"
                    border="border-black-rangga"
                />
            </div>
        </div>
        <div>
            <img src={IconCincin} alt="" className="size-16" />
        </div>
        <div className="flex flex-col gap-8">
                <ImageComponent
                    image={ImgGroom}
                />
                <NameCard
                    mempelai="Rangga Abdul Gani"
                    gender="Putra"
                    bapak="Abdul Manaf (Alm)"
                    ibu="Yoyoh Badriah"
                    ig="https://instagram.com/abdghani_rangga"
                    border="border-black-rangga"
                />
            </div>
    </div>
  )
}

export default SectionThree