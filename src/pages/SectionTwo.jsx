import CountDownTimer from "../components/fiture/CountDownTimer/CountDownTimer";
import ImageCard from "../components/cards/ImageCard";
import DescriptionText from "../components/text/DescriptionText";
import MainTitle from "../components/title/MainTitle";

const SectionTwo = () => {

    const weddingDate = '2025-01-25T08:00:00';

  return (
    <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-8 justify-center items-center">
            <div>
                <MainTitle
                    name="Assalamualaikum wr. wb."
                />
            </div>
            <div className="">
                <DescriptionText
                    description="Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami."
                />
            </div>
        </div>
        <div>
            <ImageCard />
        </div>
        <div className="flex flex-col gap-6 items-center">
            <div>
                <MainTitle
                    name="Save The Date"
                />
            </div>
            <CountDownTimer
                targetDate={weddingDate}
            />
        </div>
    </div>
  )
}

export default SectionTwo