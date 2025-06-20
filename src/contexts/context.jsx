import { createContext, useState } from "react";

export const CvContext = createContext()

export const CvContextProvider = ({ children }) => {

    const [cvPicture, setCvPicture] = useState(null)
    const [formData, setFormData] = useState({
        fullName: "",
        nationality:"",
        email: "",
        phone: "",
        linkedIn: "",
        portfolio: "",
        address: "",
        city: "",
        aboutYou: "",
        eduCourse: "",
        eduInstution: "",
        eduCity: "",
        eduWebSite: "",
        eduStartDate: "",
        eduFinishDate: "",
        jobCompany: "",
        jobRole: "",
        jobDesc: "",
        jobCity: "",
        jobStartDate: "",
        jobFinishDate: "",
    })


    const handleform = (e)=>{
        const {name, value} = e.target
        setFormData((prev)=>({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <CvContext.Provider 
            value={{
               cvPicture,
               setCvPicture,
               formData,
               handleform
            }}
        >
            {children}
        </CvContext.Provider>
    )
}