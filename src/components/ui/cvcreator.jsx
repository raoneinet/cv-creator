import { Personal } from "../cvIndex"

export const CvCreactor = ()=>{
    return (
        <div className="bg-gray-200 pt-10 max-h-screen overflow-y-hidden">
            <div className="md:w-5xl mx-auto">
                <Personal/>
            </div>
        </div>
    )
}