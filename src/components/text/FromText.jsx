import PropTypes from "prop-types"

const SmallText = ({ children }) => {
  return (
    <h2 className="text-center text-white-middle text-base leading-5 font-medium">
        {children}
    </h2>
  )
}

SmallText.propTypes = {
  children: PropTypes.node.isRequired
}

export default SmallText

// keterangan kepada yth