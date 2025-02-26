import { useState } from "react"
import { Copy, Check } from 'lucide-react'
import PropTypes from "prop-types"


const KirimKado = ({logo, alamat, nama }) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(alamat);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

  return (
    <div className="py-2 flex flex-row justify-between items-end border-solid border-b border-white-middle">
        <div className="flex flex-col gap-3 text-white-middle">
            <div className="flex flex-row gap-3 items-center">
                <img src={logo} alt="" width="40" height="40" />
                <h1 className="text-xl average font-medium text-white-middle">
                    Kirim Kado
                </h1>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-sm">
                    {alamat}
                </p>
                <h1>
                    {nama}
                </h1>
            </div>
        </div>
        <div>
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

KirimKado.propTypes = {
    logo : PropTypes.string.isRequired,
    alamat : PropTypes.string.isRequired,
    nama : PropTypes.string.isRequired,
}

export default KirimKado