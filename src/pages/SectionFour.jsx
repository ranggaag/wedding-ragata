import EventCard from "../components/cards/EventCard"
import LocationCard from "../components/cards/LocationCard"

const SectionFour = () => {

  return (
    <div>
        <div className="fixed left-0 bottom-0 right-0 bg-event-img w-full h-screen lg:w-[30%] mx-auto bg-cover bg-no-repeat -z-10">
        </div>
        <div className="px-10 py-32 bg-blue-dark bg-opacity-60 ">
            <div className="px-5 py-10 bg-white-middle bg-opacity-20 rounded-lg flex flex-col gap-10 items-center justify-center">
            <EventCard
                title="Akad"
                date="sabtu, 25 januari 2025"
                time="08.00 - Selesai"
            />
            <EventCard
                title="Resepsi"
                date="sabtu, 25 januari 2025"
                time="08.00 - Selesai"
            />
            <LocationCard
                title="Lokasi"
                location="Kediaman Mempelai Wanita"
                address="Jl. Darma Wanita V No. 31 RT 07/RW 01 Kel. Rawa Buaya, Kec. Cengkareng, Jakarta Barat DKI Jakarta 11740"
            />
            </div>
            
        </div>
    </div>
  )
}

export default SectionFour