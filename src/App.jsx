import {Header} from "./components/ui/header"
import { CvCreactor } from "./components/ui/cvcreator"
import {CvContextProvider} from "./contexts/context"

export default function App(){
  return (
    <div className="overflow-hidden">
      <Header/>
      <CvContextProvider>
        <CvCreactor/>
      </CvContextProvider>
    </div>
  )
}