

export const AdditionalInfo = (props) => {
    return (
        <div className="flex flex-col gap-5 mb-5">
            <h2>
                <span className="font-bold text-gray-800">Informação Adicional</span>
                <span className="text-xs">(itens separados por ponto-vírgula ;)</span>
            </h2>
            <label>
                <textarea name="additionalInfo"
                    className={`px-2 w-180 border border-gray-300 rounded-md outline-0 ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                    rows="5" cols="74"
                    placeholder="Inglês; Intercâmbio no exterior; Voluntariado; Carta de condução AB;"
                    disabled={props.isDisabled}
                    value={props.additionalInfo}
                    onChange={props.setAdditionalInfo}></textarea>
            </label>
        </div>
    )
}