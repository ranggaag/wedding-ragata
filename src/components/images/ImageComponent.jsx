import PropTypes from "prop-types"

const ImageComponent = ({ image }) => {
  return (
    <div className="relative">
        <div className="absolute w-[250px] h-[390px] bg-blue-dark opacity-30 rounded-full"></div>
        <img src={image} alt="" className="rounded-full object-center object-cover w-[250px] h-[390px]"/>
    </div>
  )
}

ImageComponent.propTypes = {
    image: PropTypes.string.isRequired
}

export default ImageComponent