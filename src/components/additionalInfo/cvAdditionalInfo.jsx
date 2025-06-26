import { AdditionalInfo } from "./additionalInfo"
import { BlockAdditionalInfo } from "./blockAdditionalInfo"
import { useContext, useState, useEffect } from "react"
import { CvContext } from "../../contexts/context"

export const CvAdditionalInfo = () => {

    const [sendLocalStorage, setSendLocalStorage] = useState("")

    const [isDisabled, setIsDisabled] = useState(false);

    const cvCtx = useContext(CvContext)

    useEffect(() => {
        const locked = localStorage.getItem("extaInfoLocked") === "true"
        setIsDisabled(locked)
    }, [])

    const handleDisableBtn = (e) => {
        e.preventDefault()

        // Salvar os dados no localStorage como string
        localStorage.setItem("extraInfoInput", JSON.stringify(cvCtx?.formData))

        // Marcar formulário como bloqueado
        localStorage.setItem("extaInfoLocked", "true")
        setSendLocalStorage("Dados salvos.")
        setIsDisabled(true)
    }

    const unBlockInputs = (e) => {
        e.preventDefault()

        // Salvar os dados no localStorage como string
        localStorage.setItem("extaInfoLocked", "false");
        setIsDisabled(false)
    }

    return (
        <>
            <AdditionalInfo
                isDisabled={isDisabled} 
            />
            <BlockAdditionalInfo
                handleDisableBtn={handleDisableBtn}
                unBlockInputs={unBlockInputs}
                isDisabled={isDisabled}
            />
        </>
    )
}