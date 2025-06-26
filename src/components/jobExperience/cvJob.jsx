import { useContext, useState, useEffect } from "react"
import { CvContext } from "../../contexts/context"
import { JobExperience } from "./jobExperience"
import { BlockJob } from "./blockJob"

export const CvJob = () => {

    const [sendLocalStorage, setSendLocalStorage] = useState("")

    const [isDisabled, setIsDisabled] = useState(false);

    const cvCtx = useContext(CvContext)

    useEffect(() => {
        const locked = localStorage.getItem("jobLocked") === "true"
        setIsDisabled(locked)
    }, [])

    const handleDisableBtn = (e) => {
        e.preventDefault()

        // Salvar os dados no localStorage como string
        localStorage.setItem("jobInput", JSON.stringify(cvCtx?.formData))

        // Marcar formulário como bloqueado
        localStorage.setItem("jobLocked", "true")
        setSendLocalStorage("Dados salvos.")
        setIsDisabled(true)
    }

    const unBlockInputs = (e) => {
        e.preventDefault()

        // Salvar os dados no localStorage como string
        localStorage.setItem("jobLocked", "false");
        setIsDisabled(false)
    }


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
                isDisabled={isDisabled}
            />

            <BlockJob
                handleDisableBtn={handleDisableBtn}
                unBlockInputs={unBlockInputs}
                isDisabled={isDisabled}
            />
        </>
    )
}