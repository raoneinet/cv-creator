import { CvForm } from "../cvIndex"
import { CvRules } from "./cvRules"

export const CvCreactor = ()=>{
    return (
        <div className="bg-gray-100 w-full min-h-svh flex">
            <div className="md:max-w-5xl mx-auto pt-10 flex flex-col lg:flex-row gap-3">
                <CvForm/>
                <CvRules/>
            </div>
        </div>
    )
}