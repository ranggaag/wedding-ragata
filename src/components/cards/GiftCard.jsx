import { useState } from "react"
import { Copy, Check } from 'lucide-react'
import PropTypes from "prop-types"

const GiftCard = ({ logo, norek, nama }) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(norek);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

  return (
    <div className="py-2 flex flex-row justify-between items-end border-solid border-b border-white-middle">
        <div className="flex flex-col gap-4 text-base text-white-middle">
            <div>
                <img src={logo} alt="" className="w-[50%]"/>
            </div>
            <div className="flex flex-col">
                <h1>
                    {norek}
                </h1>
                <h1>
                    {nama}
                </h1>
            </div>
        </div>
        <div className="">
            <button
                onClick={handleCopy}
                className="px-4 py-2 flex items-center gap-2 text-white-middle text-start text-sm border-solid border border-white-middle"

            >
                {
                    copied ? (
                        <>
                            <Check size={16} />
                            Tersalin
                        </>
                    )
                    :
                    (
                        <>
                            <Copy size={16} />
                            Salin
                        </>
                    )
                }
            </button>
        </div>
    </div>
  )
}

GiftCard.propTypes = {
    logo: PropTypes.string,
    norek: PropTypes.string.isRequired,
    nama: PropTypes.string.isRequired
}

export default GiftCard