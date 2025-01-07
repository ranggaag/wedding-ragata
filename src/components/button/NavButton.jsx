import PropTypes from "prop-types"
import { Icon } from "@iconify/react/dist/iconify.js"

const NavButton = ({ link, icon, text, border }) => {
  return (
    <a href={link} target="_blank" className={`flex gap-2 p-2 border-solid border-b-2 ${border}`}>
        <Icon icon={icon} width="24" height="24" />
        <h1 className="text-base">{text}</h1>
    </a>
  )
}

NavButton.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired
}

export default NavButton