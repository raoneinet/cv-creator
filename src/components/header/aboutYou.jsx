

export const CvAboutYou = (props) => {
      
    return (
        <div className="flex md:flex-row flex-col justify-between mb-5">
            <label>
                <p>Resumo sobre você</p>
                <textarea name="aboutYou"
                    className={`w-full border border-gray-300 rounded-md outline-0 ${!props.isDisabled ? "bg-white":"bg-gray-200"}`}
                    rows="5" cols="74"
                    value={props.aboutValue}
                    onChange={props.onAboutChange}
                    disabled={props.isDisabled}></textarea>
            </label>
        </div>
    )
}