

export const CvRules = (props) => {
    return (
        <div className="w-1/2 h-9/10 flex items-end justify-end absolute place-self-end-safe mt-15">
            <div className="max-w-80 h-fit rounded-md z-50 shadow-xl border border-gray-100 mr-5 mb-10 fixed">
                <div className="w-full bg-gray-200 rounded-t-md py-2 px-2 font-bold flex justify-between"><p>Dicas rápidas</p>
                    <span className="text-red-500 cursor-pointer" onClick={props.closeModal}>X</span>
                </div>
                <div className="bg-white px-2 text-sm pt-3 py-3">
                    <p><span className="pr-2">*</span>As informações inseridas no formulário são guardadas no seu navegador;</p>
                    <p><span className="pr-2">*</span>Não guardamos nenhum dado;</p>
                    <p><span className="pr-2">*</span>Fontes padrão (Helvetica, Arial);</p>
                    <p><span className="pr-2">*</span>Títulos de seção padrão (Experiência, Formação...);</p>
                    <p><span className="pr-2">*</span>Formato PDF baseado em texto;</p>
                    <p><span className="pr-2">*</span>Foto é obrigatório.</p>
                    <p><span className="pr-2">*</span>Inserir 00 no nº de telefone antes do código do país.</p>
                </div>
            </div>
        </div>
    )
}