import { GeneratePDF } from "../ui/generatepdf"

export const Header = () => {
    return (
        <header className="w-full py-2 border-b border-gray-300">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex flex-1 items-center">
                    <img src="/assets/images/profile.png" className="w-10 h-10" />
                    <h1 className="text-[#242424] text-3xl font-bold">The Single Page CV Creator</h1>
                </div>
                <div>
                    <GeneratePDF />
                </div>
            </div>
        </header>
    )
}