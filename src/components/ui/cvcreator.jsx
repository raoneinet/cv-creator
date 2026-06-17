import { CvForm } from "../cvIndex"
import { CvRules } from "./cvRules"
import {Preview} from "./preview"

export const CvCreactor = ()=>{
    return (
        <div className="lg:not-first:flex lg:h-[calc(100vh-138px)] lg:overflow-y-hidden">
            <div className=" pt-2 flex flex-col justify-center gap-3 flex-2">
                <CvForm/>
            </div>
            <div className="flex-1">
                <Preview/>
            </div>
        </div>
    )
}