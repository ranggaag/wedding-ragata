import Image from "../../assets/images/IMG_5723.png"

const ImageCard = () => {
  return (
    <div className="flex flex-raw gap-3">
        <div className="flex flex-col justify-center items-center gap-2">
            <span className="bg-white-middle w-[2px] h-60 rounded-full"></span>
            <h2 className="text-white-middle text-3xl leading-10 text-center">
                25<br />01<br />25
            </h2>
        </div>
        <div className="">
            <img src={Image} alt="image" className="w-64 h-96 object-cover rounded-3xl"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-white-middle text-3xl leading-10 text-center allura">
                I<br />&<br />R
            </h2>
            <span className="bg-white-middle w-[2px] h-60 rounded-full"></span>
        </div>

    </div>
  )
}

export default ImageCard