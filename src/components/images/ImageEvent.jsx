import PropTypes from "prop-types"


const ImageEvent = ({ image }) => {
  return (
    <div className="relative">
        <div className="absolute w-full h-[360px] bg-blue-dark opacity-30 border-radius"></div>
        <img src={image} alt="" className="h-[360px] border-radius object-center object-cover"/>
    </div>
  )
}

ImageEvent.propTypes = {
    image : PropTypes.string.isRequired
}

export default ImageEvent