import { useEffect, useState, useContext } from "react"
import { Skills } from "./skills"
import { BlockSkills } from "./blockSkills"
import { CvContext } from "../../contexts/context"

export const CvSkills = () => {

    const [sendLocalStorage, setSendLocalStorage] = useState("")

    const [isDisabled, setIsDisabled] = useState(false)

    const cvCtx = useContext(CvContext)

    const newSkills = cvCtx?.formData.skills.split(",")

    useEffect(() => {
        const locked = localStorage.getItem("skillsLocked") === "true"
        setIsDisabled(locked)

        window.addEventListener("load", () => {
            localStorage.setItem("skillsInput", "false")
            setIsDisabled(false)
        })
    }, [])

    const handleDisableBtn = (e) => {
        e.preventDefault()

        // Salvar os dados no localStorage como string
        localStorage.setItem("skillsInput", JSON.stringify(cvCtx?.formData))

        // Marcar formulário como bloqueado
        localStorage.setItem("skillsLocked", "true")
        setSendLocalStorage("Dados salvos.")
        setIsDisabled(true)

        console.log(newSkills)
    }

    const unBlockInputs = (e) => {
        e.preventDefault()

        // Salvar os dados no localStorage como string
        localStorage.setItem("skillsLocked", "false");
        setIsDisabled(false)
    }

    return (
        <>
            <Skills
                skills={cvCtx?.formData.skills}
                setSkills={cvCtx?.handleform}
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