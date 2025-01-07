// import CountDownTimer from "../components/fiture/CountDownTimer/CountDownTimer";
import ImageCard from "../components/cards/ImageCard";
import DescriptionText from "../components/text/DescriptionText";
import WeddingOfText from "../components/text/WeddingOfText"
import WeddingNameText from "../components/text/WeddingNameText"
import ImgCover from "../assets/images/imgcover.png"

const SectionTwo = () => {

    // const weddingDate = '2025-01-25T08:00:00';

  return (
    <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
            <WeddingOfText />
            <WeddingNameText>
                iftah & rangga
            </WeddingNameText>
        </div>
        <div>
            <ImageCard
                image={ImgCover}
            />
        </div>
        <div className="px-3 text-white-middle">
            <DescriptionText>
                “ Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. ”<br/><br/>
                <span className="text-base great-vibes">~ Q.S Ar - Rum : 21 ~</span>
            </DescriptionText>
        </div>
    </div>
  )
}

export default SectionTwo