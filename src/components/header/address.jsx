

export const CvAddress = (props) => {

    return (
        <div className="flex md:flex-row flex-col justify-between mb-5">
            <label>
                <p className="text-sm text-gray-700">Endereço</p>
                <input
                    type="text" id="address" name="address"
                    className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white": "bg-gray-200"}`}
                    value={props.addressValue}
                    onChange={props.onAddressChange}
                    disabled={props.isDisabled}/>
            </label>
            <label>
                <p className="text-sm text-gray-700">Cidade</p>
                <input
                    type="text" id="city" name="city"
                    className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white":"bg-gray-200"}`}
                    value={props.cityValue}
                    onChange={props.onCityChange}
                    disabled={props.isDisabled}/>
            </label>
        </div>

    )
}