import PropTypes from "prop-types"
import NavButton from "../button/NavButton"

const NameCard = ({ mempelai, gender, bapak, ibu, ig, border }) => {
  return (
    <div className="flex flex-col gap-5 items-center text-center text-black-rangga rounded-lg w-full px-8">
        <h1 className="average text-2xl">
            {mempelai}
        </h1>
        <h2 className="text-sm leading-6 font-light">
            <span className="text-base font-semibold">
                {gender} dari :
            </span><br/>
            Bapak {bapak}<br/>
            & Ibu {ibu}
        </h2>
        <NavButton
            link={ig}
            icon="line-md:instagram"
            text="Instagram"
            border={border}

        />
    </div>
  )
}

NameCard.propTypes = {
    mempelai: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    bapak: PropTypes.string.isRequired,
    ibu: PropTypes.string.isRequired,
    ig: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired
}

export default NameCard