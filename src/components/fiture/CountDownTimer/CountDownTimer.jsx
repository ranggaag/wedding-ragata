import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import TimerComponent from "./TimerComponent"

const CountDownTimer = ({ targetDate }) => {

    const [timeLeft, setTimeLeft] = useState({
        days : 0,
        hours : 0,
        minutes : 0,
        seconds : 0
    })

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            const difference = new Date(targetDate) - now

            if (difference > 0) {
                const d = Math.floor(difference / (1000 * 60 * 60 * 24))
                const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
                const m = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
                const s = Math.floor(difference % (1000 * 60) / 1000)

                setTimeLeft({ days : d, hours : h, minutes : m, seconds : s })
            }else{
                clearInterval(timer)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)

        // clear interval when component is unmount

        return () => clearInterval(timer);

    }, [targetDate])

    //  styling and format number

    const formatNumber = (num) => num.toString().padStart(2, '0')

    return (
        <div className="flex flex-row gap-8">
            <TimerComponent
                formatTime={formatNumber(timeLeft.days)}
                title="Hari"
            />
            <TimerComponent
                formatTime={formatNumber(timeLeft.hours)}
                title="Jam"
            />
            <TimerComponent
                formatTime={formatNumber(timeLeft.minutes)}
                title="Menit"
            />
            <TimerComponent
                formatTime={formatNumber(timeLeft.seconds)}
                title="Detik"
            />
        </div>
    )
}

CountDownTimer.propTypes = {
    targetDate : PropTypes.string.isRequired
}

export default CountDownTimer