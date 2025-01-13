import PropTypes from "prop-types"
import MainTitle from "../title/MainTitle"
import DescriptionText from "../text/DescriptionText"

const StoryCard = ({ time, title, description }) => {
  return (
    <div className="px-5 py-8 flex flex-col gap-4 items-center text-center text-white-middle rounded-lg">
        <h1 className="text-xl">
            {time}
        </h1>
        <MainTitle title={title} />
        <DescriptionText>
            {description}
        </DescriptionText>
    </div>
  )
}

StoryCard.propTypes = {
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default StoryCard