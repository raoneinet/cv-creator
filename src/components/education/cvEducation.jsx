import { useContext, useState } from "react"
import { CvContext } from "../../contexts/context"
import { Education } from "./education"
import { BlockInputs } from "./blockEdu"

export const CvEducation = () => {

    const [isDisabled, setIsDisabled] = useState(false);

    const cvCtx = useContext(CvContext)

    const handleDisableBtn = (e) => {
        e.preventDefault()
        setIsDisabled(!isDisabled)
    }

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
                isDisabled={isDisabled}
            />

            <BlockInputs
                handleDisableBtn={handleDisableBtn}
                isDisabled={isDisabled}
            />
        </>
    )
}