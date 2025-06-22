import { CvContext } from "../../contexts/context"
import { useContext } from "react"
import { CvHeader } from "./header"
import { CvContact } from "./contact"
import { CvAddress } from "./address"
import { CvAboutYou } from "./aboutYou"


export const InfoHeader = () => {

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
    };

    return (
        <>
            <CvHeader
                onImgChange={handleImage}
                nameValue={cvCtx.formData.fullName}
                onNameChange={cvCtx?.handleform}
                onNationValue={cvCtx?.formData.nationality}
                onNationChange={cvCtx?.handleform}
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
            />
            <CvAddress
                addressValue={cvCtx?.formData.address}
                onAddressChange={cvCtx?.handleform}
                cityValue={cvCtx?.formData.city}
                onCityChange={cvCtx?.handleform}
            />
            <CvAboutYou
                aboutValue={cvCtx?.formData.aboutYou}
                onAboutChange={cvCtx?.handleform}
            />
        </>
    )
}