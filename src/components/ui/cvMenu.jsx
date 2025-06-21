

export const CvMenu = ()=>{
    return (
        <div className="bg-[#4F46E5] rounded-t-lg">
            <ul className="list-none flex justify-between py-3 px-2 font-bold text-white">
                <li className="hover:text-gray-400 cursor-pointer"><a>Cabeçalho</a></li>
                <li className="hover:text-gray-400 cursor-pointer"><a>Educação</a></li>
                <li className="hover:text-gray-400 cursor-pointer"><a>Experiência profissional</a></li>
                <li className="hover:text-gray-400 cursor-pointer"><a>Habilidades</a></li>
                <li className="hover:text-gray-400 cursor-pointer"><a>Informação adicional</a></li>
            </ul>
        </div>
    )
}