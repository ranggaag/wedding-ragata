import PropTypes from "prop-types"
import ImageComponent from "../images/ImageComponent"

const ImageCard = ({ image }) => {

    const Line = () => {
        return (
            <span className="bg-white-middle w-[2px] h-[125px] rounded-full"></span>
        )
    }

    const TextContent = ( { children }) => {
        return (
            <h2 className="text-white-middle text-xl leading-10 text-center average">
                {children}
            </h2>
        )
    }

    TextContent.propTypes = {
        children: PropTypes.string.isRequired
    }

  return (
    <div className="flex flex-raw gap-3">
        <div className="flex flex-col justify-center items-center gap-2">
            <Line />
            <TextContent>
                25<br />01<br />25
            </TextContent>
        </div>
        <ImageComponent
            image={image}
        />
        <div className="flex flex-col justify-center items-center gap-2">
            <TextContent>
                I<br />&<br />R
            </TextContent>
            <Line />
        </div>

    </div>
  )
}

ImageCard.propTypes = {
    image: PropTypes.string.isRequired
}

export default ImageCard