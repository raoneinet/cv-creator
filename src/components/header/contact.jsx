

export const CvContact = (props) => {

    return (
        
        <div className="flex flex-col gap-3 mb-5">
            <div className="flex justify-between md:flex-row flex-col gap-3">
                <label>
                    <p className="text-sm text-gray-700">E-mail</p>
                    <input
                        type="email" id="email" name="email"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full"
                        value={props.emailValue}
                        onChange={props.onEmailChange} />
                </label>
                <label>
                    <p className="text-sm text-gray-700">Telefone</p>
                    <input
                        type="number" id="phone" name="phone"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full"
                        value={props.phoneValue}
                        onChange={props.onPhoneChange} />
                </label>
            </div>
            <div className="flex justify-between md:flex-row flex-col gap-3">
                <label>
                    <p className="text-sm text-gray-700">LinkedIn</p>
                    <input
                        type="text" id="linkedin" name="linkedIn"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full"
                        placeholder="https://linkedin.com/"
                        value={props.linkedInValue}
                        onChange={props.onLinkedinChange} />
                </label>
                <label>
                    <p className="text-sm text-gray-700">Porfólio</p>
                    <input
                        type="text" id="portfolio" name="portfolio"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full"
                        placeholder="https://portfolio.com/"
                        value={props.portfolioValue}
                        onChange={props.onPortfoliochange} />
                </label>
            </div>
        </div>
    )
}