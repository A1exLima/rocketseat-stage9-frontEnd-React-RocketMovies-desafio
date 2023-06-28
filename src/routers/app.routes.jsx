import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home" //route


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
