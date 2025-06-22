import "../index.css"
import { useContext } from "react"
import { CvContext } from "../contexts/context"
import { GeneratePDF } from "../components/ui/generatepdf"
import { CvMenu } from "./ui/cvMenu"
import { Routes, Route } from "react-router-dom"
import { InfoHeader } from "./cvHeader/infoHeader"
import { CvEducation } from "../components/education/cvEducation"
import { CvJob } from "../components/jobExperience/cvJob"
import {CvAdditionalInfo} from "../components/additionalInfo/cvAdditionalInfo"
import { CvSkills } from "./skills/cvSkills"

export const CvForm = () => {
    const cvCtx = useContext(CvContext)

    return (
        <div className="py-4 md:max-w-3xl mx-auto">
            <CvMenu />
            <div className="py-3 px-2 bg-white rounded-b-lg shadow-lg">
                <form>
                    {/*PERSONAL INFO*/}
                    <Routes>
                        <Route path="/" element={<InfoHeader />} />
                        <Route path="/cvHeader/infoHeader" element={<InfoHeader />} />
                        <Route path="/education/cvEducation" element={<CvEducation />} />
                        <Route path="/jobExperience/cvJob" element={<CvJob />} />
                        <Route path="/skills/cvSkills" element={<CvSkills/>}/>
                        <Route path="/additionalInfo/cvAdditionalInfo" element={<CvAdditionalInfo/>}/>
                        <Route path="/ui/generatepdf" element={<GeneratePDF />} />
                    </Routes>

                </form>
            </div>
        </div>
    )
}