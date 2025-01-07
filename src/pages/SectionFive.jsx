import ImgEvent from "../assets/images/image-event.png"
import EventCard from "../components/cards/EventCard"
import ImageEvent from "../components/images/ImageEvent"

const SectionFive = () => {
  return (
    <div className="flex flex-col gap-8 items-center bg-grey-light border-radius p-5">
        <ImageEvent
            image={ImgEvent}
        />
        <EventCard
            title="Akad"
            date="sabtu, 25 januari 2025"
            time="08.00 - Selesai"
            location="Kediaman Mempelai Wanita"
            address="Jl. Darma Wanita V No. 31 RT 07/RW 01 Kel. Rawa Buaya, Kec. Cengkareng, Jakarta Barat DKI Jakarta 11740"
        />
        <EventCard
            title="Resepsi"
            date="sabtu, 25 januari 2025"
            time="10.00 - Selesai"
            location="Kediaman Mempelai Wanita"
            address="Jl. Darma Wanita V No. 31 RT 07/RW 01 Kel. Rawa Buaya, Kec. Cengkareng, Jakarta Barat DKI Jakarta 11740"
        />
    </div>
  )
}

export default SectionFive