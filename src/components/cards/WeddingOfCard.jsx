import PropTypes from "prop-types"
import WeddingNameText from "../text/WeddingNameText"
import WeddingOfText from "../text/WeddingOfText"

const WeddingOfCard = ({ nama, tanggal }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
        <WeddingOfText />
        <WeddingNameText>
            {nama}
        </WeddingNameText>
        <h1 className="weddingof">
            {tanggal}
        </h1>
    </div>
  )
}

WeddingOfCard.propTypes = {
    nama: PropTypes.string.isRequired,
    tanggal: PropTypes.string.isRequired
}

export default WeddingOfCard