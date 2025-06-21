

export const CvHeader = (props) => {
    return (
        <div className="flex flex-col gap-5 mb-5">
            <h2 className="font-bold text-gray-800">Informações pessoais</h2>
            <div className="flex md:flex-row flex-col justify-between mb-5">
                <label>
                    <p>Adicione uma foto</p>
                    <input type="file" id="cvPicture" name="cv-picture" accept="image/*"
                        onChange={props.onImgChange} />
                </label>
            </div>
            <div className="flex md:flex-row flex-col justify-between mb-5">
                <label>
                    <p className="text-sm text-gray-700">Nome Completo</p>
                    <input
                        type="text" id="fullname" name="fullName"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full"
                        value={props.nameValue}
                        onChange={props.onNameChange}
                    />
                </label>
                <label>
                    <p className="text-sm text-gray-700">Nacionalidade</p>
                    <input
                        type="text" id="nationality" name="nationality"
                        className="py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full"
                        value={props.onNationValue}
                        onChange={props.onNationChange} />
                </label>
            </div>
        </div>
    )
}