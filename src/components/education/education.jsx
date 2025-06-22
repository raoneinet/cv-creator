

export const Education = (props) => {
    return (
        <div className="flex flex-col gap-5 mb-5">
            <h2 className="font-bold text-gray-800">Educação</h2>
            <div className="flex md:flex-row flex-col justify-between">
                <label>
                    <p className="text-sm text-gray-700">Curso</p>
                    <input
                        type="text" id="eduCourse" name="eduCourse"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        value={props.eduCourse}
                        onChange={props.setEduCourse}
                        disabled={props.isDisabled}/>
                </label>
                <label>
                    <p className="text-sm text-gray-700">Instituição</p>
                    <input
                        type="text" id="eduInstution" name="eduInstution"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        value={props.eduInstution}
                        onChange={props.setEduInstution}
                        disabled={props.isDisabled}/>
                </label>
            </div>
            <div className="flex md:flex-row flex-col gap-2 justify-between">
                <label>
                    <p className="text-sm text-gray-700">Cidade</p>
                    <input
                        type="text" id="eduCity" name="eduCity"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        value={props.eduCity}
                        onChange={props.setEduCity}
                        disabled={props.isDisabled}/>
                </label>
                <label>
                    <p className="text-sm text-gray-700">Website</p>
                    <input
                        type="text" id="eduWebSite" name="eduWebSite"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        value={props.eduWebSite}
                        onChange={props.setEduWebSite}
                        disabled={props.isDisabled}/>
                </label>
                <label>
                    <p className="text-sm text-gray-700">Data de Início</p>
                    <input
                        type="text" id="eduStartDate" name="eduStartDate"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        placeholder="dd / mm / aaaa"
                        value={props.eduStartDate}
                        onChange={props.setEduStartDate}
                        disabled={props.isDisabled}/>
                </label>
                <label>
                    <p className="text-sm text-gray-700">Data de Conclusão</p>
                    <input
                        type="text" id="eduFinishDate" name="eduFinishDate"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        placeholder="dd / mm / aaaa"
                        value={props.eduFinishDate}
                        onChange={props.setEduFinishDate}
                        disabled={props.isDisabled}/>
                </label>
            </div>
        </div>
    )
}