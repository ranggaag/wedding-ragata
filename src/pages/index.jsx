import Cover from "./Cover"
import SectionFive from "./SectionFive"
import SectionFour from "./SectionFour"
import SectionSeven from "./SectionSeven"
import SectionSix from "./SectionSix"
import SectionThree from "./SectionThree"
import SectionTwo from "./SectionTwo"

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
        <section className="">
          <SectionFour />
        </section>
        <section className="px-5 py-32 bg-blue-dark">
          <SectionFive />
        </section>
        <section className="px-5 pb-32 bg-blue-dark">
          <SectionSix />
        </section>
        <section className="bg-blue-dark">
          <SectionSeven />
        </section>
    </div>
  )
}

export default index