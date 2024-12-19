import { Icon } from "@iconify/react/dist/iconify.js"
import PropTypes from "prop-types"

const CoverButton = ({name}) => {
    return (
        <button className="flex flex-row justify-center gap-2 px-6 py-3 bg-blue-dark text-base text-white-middle font-semibold rounded-md">
            <div>
                <Icon icon="uil:envelope-heart" width="20" height="20" />
            </div>
            <div>
                <h2>
                    {name}
                </h2>
            </div>
        </button>
    )
}

CoverButton.propTypes = {
    name : PropTypes.string.isRequired
}

export default CoverButton