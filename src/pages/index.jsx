import Cover from "./Cover"
import SectionEight from "./SectionEight"
import SectionEnd from "./SectionEnd"
import SectionFive from "./SectionFive"
import SectionFour from "./SectionFour"
import SectionNine from "./SectionNine"
import SectionSeven from "./SectionSeven"
import SectionTen from "./SectionTen"
import SectionThree from "./SectionThree"
import SectionTwo from "./SectionTwo"
import Footer from "./Footer"

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
        <SectionTen />
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