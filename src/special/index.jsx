import Cover from "../pages/Cover"
import SectionTwo from "../pages/SectionTwo"
import SectionThree from "../pages/SectionThree"
import SectionFour from "../pages/SectionFour"
import SectionFive from "../pages/SectionFive"
import SectionSeven from "../pages/SectionSeven"
import SectionEight from "../pages/SectionEight"
import SectionNine from "../pages/SectionNine"
import SectionSpecial from "./SectionSpecial"
import SectionEnd from "../pages/SectionEnd"
import Footer from "../pages/Footer"

const index = () => {
  return (
    <div className="sm:w-[50%] lg:w-[30%] mx-auto">
        <section>
            <Cover />
        </section>
        <section id="2" className=" bg-blue-dark">
            <SectionTwo />
        </section>
        <section className="px-5 py-32 bg-grey-light">
            <SectionThree />
        </section>
        <section>
            <SectionFour />
        </section>
        <section className="px-10 pb-24 bg-black bg-opacity-50">
            <SectionFive />
        </section>
        <section className="px-5 py-24 bg-black bg-opacity-50">
            <SectionSeven />
        </section>
        <section className="px-5 py-24 bg-blue-dark">
            <SectionEight />
        </section>
        <section className="px-5 py-24 bg-black bg-opacity-50">
            <SectionNine />
        </section>
        <section className="px-5 py-24 bg-black bg-opacity-50">
            <SectionSpecial />
        </section>
        <section className="px-5 py-24 bg-blue-dark">
            <SectionEnd />
        </section>
        <section className="px-5 py-8 bg-blue-dark">
            <Footer />
        </section>
    </div>
  )
}

export default index