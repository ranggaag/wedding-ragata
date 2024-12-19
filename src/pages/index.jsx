import Cover from "./Cover"
import SectionThree from "./SectionThree"
import SectionTwo from "./SectionTwo"

const index = () => {
  return (
    <div className="lg:w-[30%] mx-auto bg-blue-dark">
        <section className="">
            <Cover />
        </section>    
        <section className="px-5 py-20">
          <SectionTwo />
        </section>
        <section className="px-5 py-20">
          <SectionThree />
        </section>
    </div>
  )
}

export default index