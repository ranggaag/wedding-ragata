import PropTypes from "prop-types"

const MainTitle = ({ name }) => {
  return (
    <h1 className="allura text-white-middle text-3xl">
        {name}
    </h1>
  )
}

MainTitle.propTypes = {
    name : PropTypes.string.isRequired
}

export default MainTitle