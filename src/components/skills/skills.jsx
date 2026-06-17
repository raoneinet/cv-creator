

export const Skills = (props)=>{

    return (
        <div className="flex flex-col gap-5 mb-5">
            
            <label>
                <textarea name="skills"
                    className={`px-2 w-full border border-gray-300 rounded-md outline-0" ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                    rows="5" cols="74"
                    placeholder="Python, Orador, Liderança, Microsoft Office..."
                    disabled={props.isDisabled}
                    value={props.skills}
                    onChange={props.setSkills}
                ></textarea>
            </label>
        </div>
    )
}