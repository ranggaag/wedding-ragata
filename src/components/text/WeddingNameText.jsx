import PropTypes from "prop-types"

const WeddingNameText = ({ children }) => {
  return (
    <h1 className="text-2xl text-white-middle average uppercase">
        {children}
    </h1>
  )
}

WeddingNameText.propTypes = {
    children : PropTypes.node.isRequired
}

export default WeddingNameText