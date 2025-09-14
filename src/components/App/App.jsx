// import css from './App.module.css'
import { Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import HomePage from "../../pages/HomePage/HomePage"
import CatalogPage from "../../pages/CatalogPage/CatalogPage"
import CarDetailsPage from "../../pages/CarDetailsPage/CarDetailsPage"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import { Toaster } from "react-hot-toast"

export default function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/catalog" element={ <CatalogPage/> } />
        <Route path="/catalog/:id" element={<CarDetailsPage />} />
        <Route path="*" element={ <NotFoundPage/> } />
      </Routes>
      <Toaster position="top-right" toastOptions={{ duration: 5000, }} />
    </Layout>
  )
}