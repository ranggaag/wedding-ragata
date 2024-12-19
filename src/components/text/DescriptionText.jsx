import PropTypes from "prop-types"

const DescriptionText = ({ description }) => {
  return (
    <h2 className="text-white-middle text-center text-sm font-medium">
        {description}
    </h2>
  )
}

DescriptionText.propTypes = {
    description : PropTypes.string.isRequired
}

export default DescriptionText