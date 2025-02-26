import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { useWishes } from "../context/WishesContext"

const WishesForm = () => {

    const queryClient = useQueryClient()
    const { setIsSubmitting } = useWishes()
    const url = import.meta.env.VITE_URL_API

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [attendance, setAttendance] = useState('hadir')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)

        const commentData = {
            name,
            description,
            attendance
        };

        try {
            const response = await fetch(`${url}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);

            await new Promise(resolve => setTimeout(resolve, 2000));

            await queryClient.invalidateQueries({ queryKey: ['comment'] })

            // Reset form

            setName('')
            setDescription('')
            setAttendance('hadir')

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false)
        }
    }

  return (
    <form onSubmit={handleSubmit} className="mx-auto">
        <div className="flex flex-col gap-4 text-lg">
            <div className="px-2 py-4 border-solid border-white-middle border-b-2 bg-transparent">
                <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent focus:outline-none placeholder:text-white-middle"/>
            </div>
            <textarea placeholder="Your Wishes" value={description} onChange={(e) => setDescription(e.target.value)} className="px-2 pt-2 pb-8 border-solid border-white-middle border-b-2 bg-transparent placeholder:text-white-middle focus:outline-none"/>
            <label className="text-base pl-1 pb-1">Konfirmasi kehadiran</label>
            <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                className="p-2 bg-transparent w-full text-base border-solid border-b-2 border-white-middle text-black-rangga focus:outline-none cursor-pointer"
            >
                <option value="hadir">Hadir</option>
                <option value="tidak hadir">Tidak Hadir</option>
            </select>
            <button type="submit" className="px-5 py-2 bg-blue-dark text-white-middle text-lg rounded-md">
                Send Wishes
            </button>
        </div>
    </form>
    
  )
}

export default WishesForm