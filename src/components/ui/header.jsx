import { GeneratePDF } from "../ui/generatepdf"
import {CvRules} from "./cvRules"
import {useState} from "react"

export const Header = () => {

    const [openRules, setOpenRules ] = useState(false)

    const handleOpenRules = ()=>{
        setOpenRules(true)
    }

    const handleCloseModal = ()=>{
        setOpenRules(false)
    }

    return (
        <header className="w-full py-2 border-b border-gray-300">
            <div className="container mx-auto flex items-center justify-between px-2 lg:px-0">
                <div className="flex items-center">
                    <img src="/assets/images/profile.png" className="w-10 h-10" />
                    <h1 className="text-[#242424] md:text-3xl font-bold">The Single Page CV Creator</h1>
                </div>
                <div 
                    className="flex gap-1 items-center bg-purple-300 p-1 rounded-md text-white font-bold cursor-pointer"
                    onClick={handleOpenRules}>
                    <img src="/assets/images/compliant.png" className="w-8"/>
                    regras
                </div>
                <div>
                    <GeneratePDF />
                </div>
            </div>
            {openRules && <CvRules closeModal={handleCloseModal}/>}
        </header>
    )
}