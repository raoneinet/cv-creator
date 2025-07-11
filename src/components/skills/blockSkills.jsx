

export const BlockSkills = (props) => {
    return (
        <div className="w-full flex justify-end">
            <button
                className={`py-3 px-2  rounded-md text-white font-bold cursor-pointer ${!props.isDisabled ? "bg-emerald-500" : "bg-red-500"}`}
                onClick={!props.isDisabled ? props.handleDisableBtn : props.unBlockInputs}
            >{!props.isDisabled ? "Bloquear campos" : "Desbloquear campos"}</button>
        </div >
    )
}