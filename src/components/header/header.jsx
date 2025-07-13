

export const CvHeader = (props) => {
    return (
        <div className="flex flex-col gap-5 mb-5">
            <h2 className="font-bold text-gray-800">Informações pessoais</h2>
            <div className="flex md:flex-row flex-col justify-between">
                <label> 
                    <img className="w-15 h-15 cursor-pointer"
                        title="Escolher uma foto" 
                        src="/assets/images/profile-picture.png"
                        alt="foto para perfil de cabeçalho do curriculum vitae"/>
                    <input 
                        type="file" id="cvPicture" name="cv-picture" accept="image/*"
                        className="cursor-pointer"
                        onChange={props.onImgChange}
                        disabled={props.isDisabled}/>
                </label>
            </div>
            <div className="flex md:flex-row flex-col justify-between mb-5">
                <label>
                    <p className="text-sm text-gray-700">Nome Completo</p>
                    <input
                        type="text" id="fullname" name="fullName"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white" : "bg-gray-200"}`}
                        placeholder="Nome completo"
                        value={props.nameValue}
                        onChange={props.onNameChange}
                        disabled={props.isDisabled}/>
                </label>
                <label>
                    <p className="text-sm text-gray-700">Nacionalidade</p>
                    <input
                        type="text" id="nationality" name="nationality"
                        className={`py-2 px-1 border border-gray-300 rounded-md outline-0 md:w-90 w-full ${!props.isDisabled ? "bg-white":"bg-gray-200"}`}
                        placeholder="Brasileiro"
                        value={props.onNationValue}
                        onChange={props.onNationChange}
                        disabled={props.isDisabled}/>
                </label>
            </div>
        </div>
    )
}