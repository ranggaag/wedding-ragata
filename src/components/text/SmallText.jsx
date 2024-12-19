import PropTypes from "prop-types"

const SmallText = ({ children }) => {
  return (
    <h2 className="text-center text-white-middle text-base">
        {children}
    </h2>
  )
}

SmallText.propTypes = {
    children: PropTypes.node.isRequired
}

export default SmallText