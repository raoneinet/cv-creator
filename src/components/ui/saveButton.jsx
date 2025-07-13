

export const SaveButton = (props) => {
    return (
        <div className="w-full flex justify-end">
            <button
                className="py-2 px-2 bg-emerald-500 rounded-md text-white font-bold cursor-pointer"
                onClick={props.handleGenBtn}>Gerar PDF</button>
        </div>
    )
}