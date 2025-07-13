import "../index.css"
import { InfoHeader } from "./header/cvInfoHeader"
import { CvEducation } from "../components/education/cvEducation"
import { CvJob } from "../components/jobExperience/cvJob"
import { CvAdditionalInfo } from "../components/additionalInfo/cvAdditionalInfo"
import { CvSkills } from "./skills/cvSkills"

export const CvForm = () => {


    return (
        <div className="w-full h-9/9 overflow-auto px-5 scroll-custom">
            <div className="py-5 bg-white">
                <form>
                    {/*PERSONAL INFO*/}     
                        <InfoHeader />
                        <CvEducation />
                        <CvJob />
                        <CvSkills />
                        <CvAdditionalInfo />
                </form>
            </div>
        </div>
    )
}