

export const CvAboutYou = (props) => {
      
    return (
        <div className="flex md:flex-row flex-col justify-between mb-5">
            <label>
                <p>Resumo sobre você</p>
                <textarea name="aboutYou"
                    className={`px-2 w-full border border-gray-300 rounded-md outline-0 ${!props.isDisabled ? "bg-white":"bg-gray-200"}`}
                    rows="5" cols="74"
                    placeholder="Resumo sobre você e sua vida profissional"
                    value={props.aboutValue}
                    onChange={props.onAboutChange}
                    disabled={props.isDisabled}></textarea>
            </label>
        </div>
    )
}