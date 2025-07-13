

export const BlockSkills = (props) => {
    return (
        <div className="w-full flex justify-end">
            <button
                className={`text-sm font-bold cursor-pointer ${!props.isDisabled ? "text-emerald-500" : "text-red-500"}`}
                onClick={!props.isDisabled ? props.handleDisableBtn : props.unBlockInputs}
            >{!props.isDisabled ? "Bloquear campos" : "Desbloquear campos"}</button>
        </div >
    )
}