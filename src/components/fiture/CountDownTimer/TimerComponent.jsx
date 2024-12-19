import PropTypes from "prop-types"

const TimerComponent = ({ formatTime, title }) => {
    
    return (
        <div className="flex flex-col gap-3 items-center">
            <div className="text-white-middle text-3xl font-normal">
                <h2>{formatTime}</h2>
            </div>
            <div className="text-white-middle text-lg font-normal">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

TimerComponent.propTypes = {
    formatTime: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}

export default TimerComponent