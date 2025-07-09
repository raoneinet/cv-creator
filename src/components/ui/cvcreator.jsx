import { CvForm } from "../cvIndex"
import { CvRules } from "./cvRules"
import {Preview} from "./preview"

export const CvCreactor = ()=>{
    return (
        <div className="w-full flex h-[calc(100vh-160px)] overflow-y-hidden">
            <div className="lg:flex-1 pt-2 flex flex-col lg:flex-row justify-center gap-3 ">
                <CvForm/>
            </div>
            <div className="lg:flex-1 bg-gray-100 flex justify-center pt-5">
                <Preview/>
            </div>
        </div>
    )
}