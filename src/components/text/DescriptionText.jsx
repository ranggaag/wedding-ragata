import PropTypes from "prop-types"

const DescriptionText = ({ children }) => {
  return (
    <h2 className="text-center text-sm leading-6">
        {children}
    </h2>
  )
}

DescriptionText.propTypes = {
    children : PropTypes.node.isRequired
}

export default DescriptionText