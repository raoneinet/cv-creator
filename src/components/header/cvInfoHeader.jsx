import { CvContext } from "../../contexts/context"
import { useContext, useState } from "react"
import { CvHeader } from "./header"
import { CvContact } from "./contact"
import { CvAddress } from "./address"
import { CvAboutYou } from "./aboutYou"
import {BlockHeader} from "./blockHeader"


export const InfoHeader = () => {

    const [isDisabled, setIsDisabled] = useState(false);

    const cvCtx = useContext(CvContext)

    const handleImage = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        if (file) {
            const picReader = new FileReader();
            picReader.onload = (event) => {
                cvCtx?.setCvPicture(event.target.result); // base64 da imagem
            };
            picReader.readAsDataURL(file); // converte a imagem
        }
    }

    const handleDisableBtn = (e)=>{
        e.preventDefault()
        setIsDisabled(!isDisabled)
    }

    return (
        <>
            <CvHeader
                onImgChange={handleImage}
                nameValue={cvCtx.formData.fullName}
                onNameChange={cvCtx?.handleform}
                onNationValue={cvCtx?.formData.nationality}
                onNationChange={cvCtx?.handleform}
                isDisabled={isDisabled}
            />
            <CvContact
                emailValue={cvCtx?.formData.email}
                onEmailChange={cvCtx?.handleform}
                phoneValue={cvCtx?.formData.phone}
                onPhoneChange={cvCtx?.handleform}
                linkedInValue={cvCtx?.formData.linkedIn}
                onLinkedinChange={cvCtx?.handleform}
                portfolioValue={cvCtx?.formData.portfolio}
                onPortfoliochange={cvCtx?.handleform}
                isDisabled={isDisabled}
            />
            <CvAddress
                addressValue={cvCtx?.formData.address}
                onAddressChange={cvCtx?.handleform}
                cityValue={cvCtx?.formData.city}
                onCityChange={cvCtx?.handleform}
                isDisabled={isDisabled}
            />
            <CvAboutYou
                aboutValue={cvCtx?.formData.aboutYou}
                onAboutChange={cvCtx?.handleform}
                isDisabled={isDisabled}
            />
            <BlockHeader
                handleDisableBtn={handleDisableBtn}
                isDisabled={isDisabled}/>
        </>
    )
}