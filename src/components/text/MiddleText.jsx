import PropTypes from "prop-types"

const MiddleText = ({ name }) => {
  return (
    <h2 className="text-xl text-white-middle font-semibold">
            {name}
    </h2>
  )
}

MiddleText.propTypes = {
    name: PropTypes.string.isRequired
}

export default MiddleText