import { Header } from "./components/ui/header"
import { CvCreactor } from "./components/ui/cvcreator"
import { CvContextProvider } from "./contexts/context"
import { BrowserRouter } from "react-router-dom"
import { Footer } from "./components/ui/footer"

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <BrowserRouter>
        <Header />
        <CvContextProvider>
          <CvCreactor />
        </CvContextProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}