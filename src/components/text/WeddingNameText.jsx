import PropTypes from "prop-types"

const WeddingNameText = ({ children }) => {
  return (
    <h1 className="text-4xl text-white-middle font-brownSugar">
        {children}
    </h1>
  )
}

WeddingNameText.propTypes = {
    children : PropTypes.node.isRequired
}

export default WeddingNameText