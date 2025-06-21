import { useContext } from "react"
import { CvContext } from "../../contexts/context"
import { Education } from "./education"

export const CvEducation = () => {
    const cvCtx = useContext(CvContext)

    return (
        <>
            <Education
                eduCourse={cvCtx?.formData.eduCourse}
                setEduCourse={cvCtx?.handleform}
                eduInstution={cvCtx?.formData.eduInstution}
                setEduInstution={cvCtx?.handleform}
                eduCity={cvCtx?.formData.eduCity}
                setEduCity={cvCtx?.handleform}
                eduWebSite={cvCtx?.formData.eduWebSite}
                setEduWebSite={cvCtx?.handleform}
                eduStartDate={cvCtx?.formData.eduStartDate}
                setEduStartDate={cvCtx?.handleform}
                eduFinishDate={cvCtx?.formData.eduFinishDate}
                setEduFinishDate={cvCtx?.handleform}
            />
        </>
    )
}