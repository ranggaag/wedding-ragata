import { Icon } from "@iconify/react/dist/iconify.js"
import PropTypes from "prop-types"

const CoverButton = ({ name, href, onClick }) => {
    return (
        <a href={href} onClick={onClick} className="flex flex-row justify-center items-center gap-2 px-6 py-3 bg-blue-dark text-sm text-white-middle rounded-md">
            <h2>
                {name}
            </h2>
            <Icon icon="solar:round-arrow-right-bold" width="20" height="20"/>
        </a>
    )
}

CoverButton.propTypes = {
    name : PropTypes.string.isRequired,
    href : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired
}

export default CoverButton