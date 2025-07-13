import { CvForm } from "../cvIndex"
import { CvRules } from "./cvRules"
import {Preview} from "./preview"

export const CvCreactor = ()=>{
    return (
        <div className="max-w-full lg:not-first:flex lg:h-[calc(100vh-138px)] lg:overflow-y-hidden">
            <div className="lg:flex-1 pt-2 flex flex-col justify-center gap-3 ">
                <CvForm/>
            </div>
            <div className="hidden flex-1 bg-gray-100 lg:flex justify-center pt-5">
                <Preview/>
            </div>
        </div>
    )
}