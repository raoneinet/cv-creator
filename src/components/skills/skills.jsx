

export const Skills = (props)=>{
    return (
        <div className="flex flex-col gap-5 mb-5">
            <h2>
                <span className="font-bold text-gray-800">Habilidades / Competências</span>
                <span className="text-xs">(itens separados por vírgula)</span>
            </h2>
            <label>
                <textarea name="skills"
                    className={`px-2 w-full border border-gray-300 rounded-md outline-0" ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                    rows="5" cols="74"
                    placeholder="Python, Orador, Liderança, Microsoft Office..."
                    disabled={props.isDisabled}></textarea>
            </label>
        </div>
    )
}