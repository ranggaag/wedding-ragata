import PropTypes from "prop-types"

const GuestNameText = ({ name }) => {
  return (
    <h2 className="text-white-middle text-2xl font-semibold">
        {name}
    </h2>
  )
}

GuestNameText.propTypes = {
    name: PropTypes.string.isRequired
}

export default GuestNameText