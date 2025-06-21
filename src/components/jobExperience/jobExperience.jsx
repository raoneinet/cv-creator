

export const JobExperience = (props) => {
    return (
        <div className="flex flex-col gap-5 mb-5">
            <h2 className="font-bold text-gray-800">Experiência Profissional</h2>
            <div className="flex md:flex-row flex-col justify-between">
                <label>
                    <p className="text-sm text-gray-700">Empresa</p>
                    <input
                        type="text" id="jobcompany" name="jobCompany"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full"
                        value={props.jobCompany}
                        onChange={props.setJobCompany}/>
                </label>
                <label>
                    <p className="text-sm text-gray-700">Cargo / Função</p>
                    <input
                        type="text" id="jobrole" name="jobRole"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full"
                        value={props.jobRole}
                        onChange={props.setJobRole}/>
                </label>
            </div>
            <div className="flex md:flex-row flex-col justify-between mb-5">
                <label>
                    <p>Atividades desempenhadas</p>
                    <textarea 
                        name="jobDesc"
                        className="w-full border border-gray-300 rounded-md outline-0" rows="5" cols="74"
                        value={props.jobDesc}
                        onChange={props.setJobDesc}>
                    </textarea>
                </label>
            </div>
            <div className="flex md:flex-row flex-col gap-2 justify-between">
                <label>
                    <p className="text-sm text-gray-700">Cidade</p>
                    <input
                        type="text" id="jobcity" name="jobCity"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 w-full"
                        value={props.jobCity}
                        onChange={props.setJobCity}/>
                </label>

                <label>
                    <p className="text-sm text-gray-700">Data de Início</p>
                    <input
                        type="text" id="jobStartDate" name="jobStartDate"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 w-full"
                        placeholder="dd / mm / aaaa"
                        value={props.jobStartDate}
                        onChange={props.setJobStartDate}/>
                </label>
                <label>
                    <p className="text-sm text-gray-700">Data de Conclusão</p>
                    <input
                        type="text" id="jobFinishDate" name="jobFinishDate"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 w-full"
                        placeholder="dd / mm / aaaa"
                        value={props.jobFinishDate}
                        onChange={props.setJobFinishDate}/>
                </label>
            </div>
        </div>
    )
}