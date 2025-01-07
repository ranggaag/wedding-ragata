import PropTypes from "prop-types"
import MainTitle from "../title/MainTitle"
import NavButton from "../button/NavButton"

const EventCard = ({ title, date, time, location, address }) => {

  return (
    <div className="px-5 py-8 flex flex-col gap-5 justify-center items-center bg-blue-dark rounded-lg text-white-middle">
        <div className="flex flex-col gap-3 items-center text-base leading-7">
            <MainTitle title={title} />
            <h1 className="font-bold uppercase">
                {date}
            </h1>
            <h1>
                {time}
            </h1>
        </div>
        <div className="flex flex-col gap-3 items-center text-white-middle text-center">
            <h1 className="text-base leading-7 font-bold">
                {location}
            </h1>
            <p className="text-sm">
                {address}
            </p>
            <NavButton
                link="https://maps.app.goo.gl/Us3ZuspySSFHjFri7"
                icon="mingcute:location-fill"
                text="Google Maps"
                border="border-b-white-middle"
            />
        </div>
    </div>
  )
}

EventCard.propTypes = {
    title : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired,
    time : PropTypes.string.isRequired,
    location : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired

}

export default EventCard