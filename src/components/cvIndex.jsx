import "../index.css"
import { useContext } from "react"
import { CvHeader } from "./cvHeader/cvHeader"
import { CvContact } from "./cvHeader/cvContact"
import { CvAddress } from "./cvHeader/cvAddress"
import { CvAboutYou } from "./aboutYou/cvAboutYou"
import { SaveButton } from "./ui/saveButton"
import { CvContext } from "../contexts/context"
import {generatePdf} from "../utils/handlepdf"
import { Education } from "./education/education"
import {JobExperience} from "./jobExperience/jobExperience"

export const Personal = () => {

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
        <div className="py-4 md:max-w-3xl mx-auto rounded-md">
            <div className="py-3 px-2 bg-white rounded-md max-h-[750px] overflow-y-scroll side-scroll">
                {/*.side-scroll is a personal className to style the scrollbar*/}
                <form>
                    {/*PERSONAL INFO*/}
                    <CvHeader
                        onImgChange={handleImage}
                        nameValue={cvCtx.formData.fullName}
                        onNameChange={cvCtx?.handleform}
                        onNationValue={cvCtx?.formData.nationality}
                        onNationChange={cvCtx?.handleform}
                    />

                    {/*CONTACTS*/}
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

                    {/*ADDRESS*/}
                    <CvAddress
                        addressValue={cvCtx?.formData.address}
                        onAddressChange={cvCtx?.handleform}
                        cityValue={cvCtx?.formData.city}
                        onCityChange={cvCtx?.handleform}
                    />

                    {/*ABOUT YOU*/}
                    <CvAboutYou
                        aboutValue={cvCtx?.formData.aboutYou}
                        onAboutChange={cvCtx?.handleform}
                    />
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
                    />
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
                    <SaveButton
                        handleGenBtn={(e)=>generatePdf(e, cvCtx)}
                    />
                </form>
            </div>
        </div>
    )
}