import MainTitle from "../components/title/MainTitle"
import CountDownTimer from "../components/fiture/CountDownTimer/CountDownTimer"
import NavButton from "../components/button/NavButton";

const SectionFour = () => {

    const weddingDate = '2025-01-25T08:00:00';

  return (
    <div className="flex flex-col gap-24 items-center">
        <div className="flex flex-col gap-8 items-center text-white-middle">
            <MainTitle title="Save The Date" />
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
    </div>
  )
}

export default SectionFour