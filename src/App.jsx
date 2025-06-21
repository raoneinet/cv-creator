import { Header } from "./components/ui/header"
import { CvCreactor } from "./components/ui/cvcreator"
import { CvContextProvider } from "./contexts/context"
import { BrowserRouter } from "react-router-dom"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <CvContextProvider>
          <CvCreactor />
        </CvContextProvider>
      </BrowserRouter>
    </>
  )
}