import { Header } from "./components/ui/header"
import { CvCreactor } from "./components/ui/cvcreator"
import { CvContextProvider } from "./contexts/context"
import { Footer } from "./components/ui/footer"

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <CvContextProvider>
        <CvCreactor />
      </CvContextProvider>
      <Footer />
    </div>
  )
}