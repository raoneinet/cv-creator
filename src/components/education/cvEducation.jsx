import { useContext, useState, useEffect } from "react"
import { CvContext } from "../../contexts/context"
import { Education } from "./education"
import { BlockInputs } from "./blockEdu"

export const CvEducation = () => {

    const [isDisabled, setIsDisabled] = useState(false);

    const [sendLocalStorage, setSendLocalStorage] = useState("")

    const cvCtx = useContext(CvContext)

    useEffect(() => {
        const locked = localStorage.getItem("formLocked") === "true";
        setIsDisabled(locked);
    }, []);

    const handleDisableBtn = (e) => {
        e.preventDefault()

        // Salvar os dados no localStorage como string
        localStorage.setItem("myInput", JSON.stringify(cvCtx?.formData))

        // Marcar formulário como bloqueado
        localStorage.setItem("formLocked", "true")
        setSendLocalStorage("Dados salvos.")
        setIsDisabled(true)
    }

    const unBlockInputs = (e) => {
        e.preventDefault()

        // Salvar os dados no localStorage como string
        localStorage.setItem("formLocked", "false");
        setIsDisabled(false);
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
                unBlockInputs={unBlockInputs}
                isDisabled={isDisabled}
            />
        </>
    )
}