import PropTypes from "prop-types"

const MainTitle = ({ title }) => {
  return (
    <h1 className="great-vibes text-4xl">
        {title}
    </h1>
  )
}

MainTitle.propTypes = {
    title : PropTypes.string.isRequired
}

export default MainTitle