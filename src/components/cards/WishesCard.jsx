import { useQuery } from "@tanstack/react-query"
import { getComments } from "../../../api"
import { useWishes } from "../context/WishesContext"
import LoadingAnimation from "../animation/loading/LoadingAnimation"
import Hadir from "../../assets/images/hadir.png"
import TidakHadir from "../../assets/images/tidak-hadir.png"


const WishesCard = () => {

    const { isSubmitting } = useWishes()

    const { data: comments, isLoading, isError } = useQuery({
        queryKey: ['comment'],
        queryFn: getComments
    })

    const sortedComments = [...(comments || [])].sort((a, b) => b.id - a.id)

  return (
    <div className="flex flex-col gap-6 items-start">
        {
            isSubmitting || isLoading ? (
                <div>
                    <LoadingAnimation />
                </div>
            )
            :
            isError ? (
                <h1>Data Not Found</h1>
            )
            :
            sortedComments.map((comment) => (
                <div key={comment.id} className="flex flex-col gap-3 items-start text-start text-white-middle">
                    <div className="flex flex-row gap-2 items-center">
                        <h1 className="text-lg font-semibold">
                            {comment.name}
                        </h1>
                        {
                            comment.attendance === "hadir" ? (
                                <img src={Hadir} alt="" className="size-4"/>
                            )
                            :
                            (
                                <img src={TidakHadir} alt="" className="size-4"/>
                            )
                        }
                    </div>
                    <div className="text-white-middle text-sm">
                        <h1>
                            {comment.description}
                        </h1>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}



export default WishesCard