import { Route, Routes } from "react-router-dom"
import ServicesPage from "./pages/Services"
import RootLayout from "./layouts/RootLayout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<ServicesPage />} />
      </Route>
    </Routes>
  )
}

export default App
