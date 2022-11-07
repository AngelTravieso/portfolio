import { Routes, Route, Navigate } from "react-router-dom";

import { MainPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <MainPage /> } />

        {/* Para cualquier otra ruta que no coincida con nada */}
        <Route path="/*" element={ <Navigate to="/" /> } />

    </Routes>
  )
}
