import PropTypes from "prop-types"
import MainTitle from "../title/MainTitle"
import DescriptionText from "../text/DescriptionText"

const StoryCard = ({ time, title, description }) => {
  return (
    <div className="flex flex-col gap-4 items-start text-justify text-white-middle">
      <div className="flex flex-row gap-3 items-center">
        <MainTitle title={title} />
        <h1 className="text-lg">
            ( {time} )
        </h1>
      </div>
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