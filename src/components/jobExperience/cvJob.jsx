import { useContext } from "react"
import { CvContext } from "../../contexts/context"
import { JobExperience } from "./jobExperience"

export const CvJob = () => {
    const cvCtx = useContext(CvContext)

    return (
        <>
            <JobExperience
                jobCompany={cvCtx?.formData.jobCompany}
                setJobCompany={cvCtx?.handleform}
                jobRole={cvCtx?.formData.jobRole}
                setJobRole={cvCtx?.handleform}
                jobDesc={cvCtx?.formData.jobDesc}
                setJobDesc={cvCtx?.handleform}
                jobCity={cvCtx?.formData.jobCity}
                setJobCity={cvCtx?.handleform}
                jobStartDate={cvCtx?.formData.jobStartDate}
                setJobStartDate={cvCtx?.handleform}
                jobFinishDate={cvCtx?.formData.jobFinishDate}
                setJobFinishDate={cvCtx?.handleform}
            />
        </>
    )
}