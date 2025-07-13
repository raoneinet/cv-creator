import { useContext } from "react"
import { CvContext } from "../../contexts/context"

export const Preview = () => {

    const cvCtx = useContext(CvContext)

    return (
        <div ref={cvCtx?.printRef} className="w-4/5 h-[calc(100%-50px)] bg-white flex">
            <div className="w-55 bg-[#ef9766] h-full px-3 py-5">
                <div className="flex pb-5">
                    <img src={cvCtx?.cvPicture} className="w-40 rounded-full" />
                </div>
                <div className="w-full">
                    <div>
                        <div className="text-sm flex flex-col gap-2">
                            <p><span className="font-bold text-[#364153]">Nacionalidade</span>: <span className="text-[#4a5565]">{cvCtx?.formData.nationality}</span></p>
                            <p><span className="font-bold text-[#364153]">Telefone</span>: <span className="text-[#4a5565]">{cvCtx?.formData.phone}</span></p>
                            <p><span className="font-bold text-[#364153]">Email</span>: <span className="text-[#4a5565]">{cvCtx?.formData.email}</span></p>
                            {cvCtx?.formData.linkedIn &&
                                <p><span className="font-bold text-[#364153]">LinkedIn</span>: <span className="text-[#4a5565]">{cvCtx?.formData.linkedIn}</span></p>}
                            {cvCtx?.formData.portfolio &&
                                <p><span className="font-bold text-[#364153]">Portfólio</span>: <span className="text-[#4a5565]">{cvCtx?.formData.portfolio}</span></p>}
                            <p><span className="font-bold text-[#364153]">Endereço: </span><span className="text-[#4a5565]">{cvCtx?.formData.address + ", " + cvCtx?.formData.city}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 px-3 py-5">
                <div className="w-[calc(100%-50px)]">
                    <div>
                        {!cvCtx?.formData.fullName ? <h1>Nome Completo</h1> : <h1 className="text-xl font-bold text-[#4299e1]">{cvCtx?.formData.fullName}</h1>}
                    </div>
                    <div className="text-sm py-2 text-[#4a5565]">
                        <p>{cvCtx?.formData.aboutYou}</p>
                    </div>
                    <div className="py-2">
                        <div className="uppercase text-sm font-bold text-[#4299e1] border-b border-[#99a1af]">
                            <h1>Educação e Formação</h1>
                        </div>
                        <div>
                            <p className="font-bold ">{cvCtx?.formData.eduCourse}</p>
                            <p className="text-sm">{cvCtx?.formData.eduInstution}
                                <span className="text-xs text-[#4a5565] px-2">[ {cvCtx?.formData.eduStartDate} - {cvCtx?.formData.eduFinishDate ?? "atual"}]</span>
                            </p>
                            <div className="flex gap-3">
                                <p className="border-r border-[#99a1af] pr-3">{cvCtx?.formData.eduCity}</p>
                                <p>{cvCtx?.formData.eduWebSite}</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="uppercase text-sm font-bold text-[#4299e1] border-b border-[#99a1af]">
                            <h1>Experiência Profissional</h1>
                        </div>
                        <div className="text-[#4a5565]">
                            <p className="font-bold">{cvCtx?.formData.jobRole}</p>
                            <p>{cvCtx?.formData.jobCompany} <span className="text-xs text-[#4a5565] px-2">[{cvCtx?.formData.jobStartDate} - {cvCtx?.formData.jobFinishDate}]</span></p>
                            <p className="text-sm py-2">{cvCtx?.formData.jobDesc}</p>
                            <p>{cvCtx?.formData.jobCity}</p>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="uppercase text-sm font-bold text-[#4299e1] border-b border-[#99a1af]">
                            <h1>Competências</h1>
                        </div>
                        <div className="text-[#4a5565] text-sm pt-2">
                            {cvCtx?.formData.skills.split(",").join(" | ").toUpperCase()}
                        </div>
                    </div>
                    <div>
                        <div className="uppercase text-sm font-bold text-[#4299e1] border-b border-[#99a1af]">
                            <h1>Informação Adicional</h1>
                        </div>
                        <div className="text-[#4a5565] pt-2">
                            <ul className="list-none flex flex-col">
                                {cvCtx?.formData.additionalInfo.split(";").map((e, index) => <li key={index}>{e.trim()}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}