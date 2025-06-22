

export const CvContact = (props) => {

    return (

        <div className="flex flex-col gap-3 mb-5">
            <div className="flex justify-between md:flex-row flex-col gap-3">
                <label>
                    <p className="text-sm text-gray-700">E-mail</p>
                    <input
                        type="email" id="email" name="email"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        value={props.emailValue}
                        onChange={props.onEmailChange}
                        disabled={props.isDisabled} />
                </label>
                <label>
                    <p className="text-sm text-gray-700">Telefone</p>
                    <input
                        type="number" id="phone" name="phone"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        value={props.phoneValue}
                        onChange={props.onPhoneChange}
                        disabled={props.isDisabled} />
                </label>
            </div>
            <div className="flex justify-between md:flex-row flex-col gap-3">
                <label>
                    <p className="text-sm text-gray-700">LinkedIn</p>
                    <input
                        type="text" id="linkedin" name="linkedIn"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white" : " bg-gray-200"}`}
                        placeholder="https://linkedin.com/"
                        value={props.linkedInValue}
                        onChange={props.onLinkedinChange}
                        disabled={props.isDisabled} />
                </label>
                <label>
                    <p className="text-sm text-gray-700">Porfólio</p>
                    <input
                        type="text" id="portfolio" name="portfolio"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        placeholder="https://portfolio.com/"
                        value={props.portfolioValue}
                        onChange={props.onPortfoliochange}
                        disabled={props.isDisabled} />
                </label>
            </div>
        </div>
    )
}