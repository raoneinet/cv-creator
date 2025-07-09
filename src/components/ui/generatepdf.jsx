import { useContext } from "react"
import { CvContext } from "../../contexts/context"
import { SaveButton } from "./saveButton"
import { generatePdf } from "../../utils/handlepdf"

export const GeneratePDF = () => {
    const cvCtx = useContext(CvContext)

    return (
        <>
            <SaveButton handleGenBtn={(e) => generatePdf(e, cvCtx)}/>
        </>
    )
}