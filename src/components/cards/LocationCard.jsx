import PropTypes from "prop-types"
import MainTitle from "../title/MainTitle"
import NavButton from "../button/NavButton"

const LocationCard = ({ title, location, address }) => {
  return (
    <div className="flex flex-col gap-4 items-center text-center text-white-middle">
        <div className="flex flex-col gap-3 items-center">
            <MainTitle
            title={title}
            />
            <h1 className="text-base leading-7 font-bold">
                {location}
            </h1>
            <h1 className="text-sm leading-6">
                {address}
            </h1>
        </div>
        <NavButton
            link="https://maps.app.goo.gl/Us3ZuspySSFHjFri7"
            icon="mingcute:location-fill"
            text="Google Maps"
            border="border-white-middle"
        />
    </div>
  )
}

LocationCard.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
}

export default LocationCard