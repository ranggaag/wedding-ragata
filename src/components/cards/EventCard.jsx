import PropTypes from "prop-types"
import MainTitle from "../title/MainTitle"

const EventCard = ({ title, date, time }) => {

  return (
    <div className="flex flex-col gap-3 items-center text-white-middle text-base leading-7">
        <MainTitle title={title} />
        <h1 className="font-bold uppercase">
            {date}
        </h1>
        <h1>
            {time}
        </h1>
    </div>
  )
}

EventCard.propTypes = {
    title : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired,
    time : PropTypes.string.isRequired,
}

export default EventCard