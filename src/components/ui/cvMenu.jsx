import { Link } from "react-router-dom"

export const CvMenu = () => {
    return (
        <div className="bg-[#4F46E5] rounded-t-lg">
            <nav>
                <ul className=" list-none flex justify-between flex-wrap py-3 gap-2 md:px-2 font-bold text-white">
                    <li className="hover:text-gray-400 cursor-pointer">
                        <Link to="/cvHeader/infoHeader">Cabeçalho</Link>
                    </li>
                    <li className="hover:text-gray-400 cursor-pointer">
                        <Link to="/education/cvEducation">Educação</Link>
                    </li>
                    <li className="hover:text-gray-400 cursor-pointer">
                        <Link to="/jobExperience/cvJob">Experiência profissional</Link>
                    </li>
                    <li className="hover:text-gray-400 cursor-pointer">
                        <Link to="/skills/cvSkills">Competências</Link>
                    </li>
                    <li className="hover:text-gray-400 cursor-pointer">
                        <Link to="/additionalInfo/cvAdditionalInfo">Informação adicional</Link>
                    </li>
                    <li className="hover:text-gray-400 cursor-pointer">
                        <Link to="/ui/generatepdf">Finalizar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}