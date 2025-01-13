import PropTypes from "prop-types"
import MainTitle from "../title/MainTitle"
import DescriptionText from "../text/DescriptionText"

const ImageStoryCard = ({ image, title, description }) => {
  return (
    <div className={`${image} bg-cover`}>
        <div className="px-5 pt-24 h-[350px] flex flex-col gap-5 items-center text-center text-white-middle bg-blue-dark bg-opacity-70">
            <MainTitle title={title} />
            <DescriptionText>
                {description}
            </DescriptionText>
        </div>

    </div>
  )
}

ImageStoryCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ImageStoryCard