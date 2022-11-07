import { Routes, Route, Navigate } from "react-router-dom";

import { AboutPage, ContactPage, CoursesPage, MainPage } from "../pages";


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/sobre_mi" element={ <AboutPage /> } />
        <Route path="/certificados" element={ <CoursesPage /> } />
        <Route path="/contacto" element={ <ContactPage /> } />

        {/* Para cualquier otra ruta que no coincida con nada */}
        <Route path="/*" element={ <Navigate to="/" /> } />

    </Routes>
  )
}
