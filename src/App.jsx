import {Header} from "./components/ui/header"
import { CvCreactor } from "./components/ui/cvcreator"
import {CvContextProvider} from "./contexts/context"

export default function App(){
  return (
    <div className="">
      <Header/>
      <CvContextProvider>
        <CvCreactor/>
      </CvContextProvider>
    </div>
  )
}