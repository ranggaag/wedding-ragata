import PropTypes from "prop-types"

const GuestNameCard = ({ guestName }) => {
  return (
    <div className="flex flex-col gap-3 text-white-middle items-center">
        <h1 className="text-base">
            Kepada Yth.
        </h1>
        <h1 className="text-xl">
            {guestName}
        </h1>

    </div>
  )
}

GuestNameCard.propTypes = {
    guestName : PropTypes.string.isRequired
}

export default GuestNameCard