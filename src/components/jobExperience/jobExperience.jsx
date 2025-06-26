

export const JobExperience = (props) => {
    return (
        <div className="flex flex-col gap-5 mb-5">
            <h2 className="font-bold text-gray-800">Experiência Profissional</h2>
            <div className="flex md:flex-row flex-col justify-between">
                <label>
                    <p className="text-sm text-gray-700">Empresa</p>
                    <input
                        type="text" id="jobcompany" name="jobCompany"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        value={props.jobCompany}
                        onChange={props.setJobCompany}
                        disabled={props.isDisabled} />
                </label>
                <label>
                    <p className="text-sm text-gray-700">Cargo / Função</p>
                    <input
                        type="text" id="jobrole" name="jobRole"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        value={props.jobRole}
                        onChange={props.setJobRole}
                        disabled={props.isDisabled} />
                </label>
            </div>
            <div className="flex md:flex-row flex-col justify-between mb-5">
                <label>
                    <p>Atividades desempenhadas</p>
                    <textarea
                        name="jobDesc"
                        className={`w-full border border-gray-300 rounded-md outline-0 ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`} 
                        rows="5" cols="74"
                        value={props.jobDesc}
                        onChange={props.setJobDesc}
                        disabled={props.isDisabled}>
                    </textarea>
                </label>
            </div>
            <div className="flex md:flex-row flex-col gap-2 justify-between">
                <label>
                    <p className="text-sm text-gray-700">Cidade</p>
                    <input
                        type="text" id="jobcity" name="jobCity"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        value={props.jobCity}
                        onChange={props.setJobCity}
                        disabled={props.isDisabled} />
                </label>

                <label>
                    <p className="text-sm text-gray-700">Data de Início</p>
                    <input
                        type="text" id="jobStartDate" name="jobStartDate"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        placeholder="dd / mm / aaaa"
                        value={props.jobStartDate}
                        onChange={props.setJobStartDate}
                        disabled={props.isDisabled} />
                </label>
                <label>
                    <p className="text-sm text-gray-700">Data de Conclusão</p>
                    <input
                        type="text" id="jobFinishDate" name="jobFinishDate"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        placeholder="dd / mm / aaaa"
                        value={props.jobFinishDate}
                        onChange={props.setJobFinishDate}
                        disabled={props.isDisabled} />
                </label>
            </div>
        </div>
    )
}