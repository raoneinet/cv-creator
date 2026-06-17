import "../index.css"
import { InfoHeader } from "./header/cvInfoHeader"
import { CvEducation } from "../components/education/cvEducation"
import { CvJob } from "../components/jobExperience/cvJob"
import { CvAdditionalInfo } from "../components/additionalInfo/cvAdditionalInfo"
import { CvSkills } from "./skills/cvSkills"
import { Plus } from 'lucide-react';
import { useState } from "react"
import { SubHeading } from "./ui/subheading"

export const CvForm = () => {

    const [openPersonalInfo, setOpenPersonalInfo] = useState(false)
    const [openEducation, setOpenEducation] = useState(false)
    const [openProfession, setOpenProfession] = useState(false)
    const [openSkills, setOpenSkills] = useState(false)
    const [openAdditionalInfo, setOpenAdditionalInfo] = useState(false)

    return (
        <div className="h-9/9 overflow-auto px-5 scroll-custom">
            <div className="bg-white max-w-3xl mx-auto flex items-center">
                <form className="w-full mt-30">
                    {/*PERSONAL INFO*/}
                    <div className="pb-10">
                        <div className={`flex justify-between py-5 ${!openPersonalInfo ? "border-b border-gray-200" : "border-0"}`}>
                            <SubHeading title="Informações pessoais" />
                            <button
                                className="cursor-pointer"
                                type="button"
                                title="abrir"
                                onClick={() => setOpenPersonalInfo(!openPersonalInfo)}
                            >
                                <Plus />
                            </button>
                        </div>
                        {openPersonalInfo && <InfoHeader />}

                    </div>
                    <div className="pb-10">
                        <div className={`flex justify-between py-5 ${!openEducation ? "border-b border-gray-200" : "border-0"}`}>
                            <SubHeading title="Educação" />
                            <button className="cursor-pointer" type="button" title="abrir" onClick={() => setOpenEducation(!openEducation)}>
                                <Plus />
                            </button>
                        </div>
                        {openEducation && <CvEducation />}
                    </div>
                    <div className="pb-10">
                        <div className={`flex justify-between py-5 ${!openProfession ? "border-b border-gray-200" : "border-0"}`}>
                            <SubHeading title="Experiência Profissional" />
                            <button className="cursor-pointer" type="button" title="abrir" onClick={() => setOpenProfession(!openProfession)}>
                                <Plus />
                            </button>
                        </div>
                        {openProfession && <CvJob />}
                    </div>
                    <div className="pb-10">
                        <div className={`flex justify-between py-5 ${!openSkills ? "border-b border-gray-200" : "border-0"}`}>
                            <h2>
                                <SubHeading title="Habilidades / Competências" />
                                <span className="text-xs">(itens separados por vírgula)</span>
                            </h2>
                            <button className="cursor-pointer" type="button" title="abrir" onClick={() => setOpenSkills(!openSkills)}>
                                <Plus />
                            </button>
                        </div>
                        {openSkills &&
                            <CvSkills />
                        }
                    </div>
                    <div className="pb-10">
                        <div className={`flex justify-between py-5 ${!openAdditionalInfo ? "border-b border-gray-200" : "border-0"}`}>
                            <h2>
                                <SubHeading title="Informação Adicional" />
                                <span className="text-xs">(itens separados por ponto-vírgula ;)</span>
                            </h2>
                            <button className="cursor-pointer" type="button" title="abrir" onClick={() => setOpenAdditionalInfo(!openAdditionalInfo)}>
                                <Plus />
                            </button>
                        </div>

                        {openAdditionalInfo && <CvAdditionalInfo />}
                    </div>
                </form>
            </div>
        </div>
    )
}