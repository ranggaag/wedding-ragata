import { useState, useEffect } from "react"
import CoverButton from "../components/button/CoverButton"
import LoadingAnimation from "../components/animation/loading/LoadingAnimation"
import WeddingOfCard from "../components/cards/WeddingOfCard"
import GuestNameCard from "../components/cards/GuestNameCard"

const Cover = () => {

    const [guestName, setGusetName] = useState("Nama Tamu")
    const [loading, setLoading] = useState(true)
    const [isClick, setIsClick] = useState(false)

    const toggleClick = () => {
        setIsClick(!isClick)
    }

    if (!isClick) {
        document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "auto"
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const namaTamu = searchParams.get('to')

        if (namaTamu) {
            const decodedName = decodeURIComponent(namaTamu)
            setGusetName(decodedName)
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)
    
        return () => clearTimeout(timer)
    
    }, [])

    if (loading) {
        return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#161616] z-50">
            <LoadingAnimation />
        </div>
        );
    }

    return (
        <div className="bg-coverImg bg-[center_bottom_3rem] bg-cover w-full h-screen">
            <div className="overlay h-screen flex flex-col justify-between items-center py-24">
                <WeddingOfCard
                    nama = "iftah & rangga"
                    tanggal = "25 januari 2025"
                />
                <div className="flex flex-col gap-8 justify-center mb-10">
                    <GuestNameCard
                        guestName={guestName}
                    />
                    <CoverButton
                        name="Buka Undangan"
                        href="#2"
                        onClick={toggleClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cover