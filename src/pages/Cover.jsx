import { useState, useEffect } from "react"

import MiddleText from "../components/text/MiddleText"
import WeddingNameText from "../components/text/WeddingNameText"
import GuestNameText from "../components/text/GuestNameText"
import SmallText from "../components/text/SmallText"
import CoverButton from "../components/button/CoverButton"

const Cover = () => {

    const [guestName, setGusetName] = useState("Nama Tamu")

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const namaTamu = searchParams.get('to')

        if (namaTamu) {
            const decodedName = decodeURIComponent(namaTamu)
            setGusetName(decodedName)
        }
    }, [])

    return (
        <div className="bg-bgCover bg-no-repeat bg-[center_right_46%] bg-cover w-full h-screen">
            <div className="bg-bgOverlay h-screen flex flex-col justify-between items-center py-24">
                <div className="flex flex-col gap-5 items-center">
                    <div className="">
                        <MiddleText
                            name="The Wedding of"
                        />
                    </div>
                    <div className="text-center">
                        <WeddingNameText>
                            Iftah & Rangga
                        </WeddingNameText>
                    </div>
                    <div>
                    <MiddleText
                        name="25 Januari 2025"
                    />
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <div className="">
                        <SmallText>
                            Kepada Yth : <br /> Bapak/Ibu/Saudara/i
                        </SmallText>
                    </div>
                    <div className="">
                        <GuestNameText
                            name={guestName}
                        />
                    </div>
                    <div>
                        <SmallText>
                        Mohon maaf apabila ada kesalahan<br />
                        dalam penulisan nama/gelar.
                        </SmallText>
                    </div>
                    <div className="mt-3">
                        <CoverButton
                            name="Buka Undangan"
                            href="#2"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover