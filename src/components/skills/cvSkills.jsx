import { useEffect, useState, useContext } from "react"
import { Skills } from "./skills"
import { BlockSkills } from "./blockSkills"
import { CvContext } from "../../contexts/context"

export const CvSkills = () => {

    const [sendLocalStorage, setSendLocalStorage] = useState("")

    const [isDisabled, setIsDisabled] = useState(false)

    const cvCtx = useContext(CvContext)

    useEffect(() => {
        const locked = localStorage.getItem("formLocked") === "true"
        setIsDisabled(locked)
    }, [])

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
        setIsDisabled(false)
    }

    return (
        <>
            <Skills
                isDisabled={isDisabled}
            />
            <BlockSkills
                handleDisableBtn={handleDisableBtn}
                unBlockInputs={unBlockInputs}
                isDisabled={isDisabled}
            />
        </>
    )
}