import DescriptionText from "../components/text/DescriptionText"
import MainTitle from "../components/title/MainTitle"

const SectionThree = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
        <div>
            <MainTitle
                name="Mempelai"
            />
        </div>
        <div className="w-[322px] mx-auto">
            <DescriptionText
                description="Mahasuci (Allah) yang telah menciptakan semuanya berpasang-pasangan, baik dari apa yang ditumbuhkan oleh bumi dan dari diri mereka sendiri maupun dari apa yang tidak mereka ketahui."
            />
        </div>

    </div>
  )
}

export default SectionThree