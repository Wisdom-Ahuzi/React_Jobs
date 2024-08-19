import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import JobPage, { jobLoader } from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPage'


const Router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<MainLayout />}>

      <Route index element={<HomePage />} />

      <Route path="/jobs" element={<JobsPage />} />

      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />


      <Route path="*" element={<NotFoundPage />} />



    </Route>



  )
)

const App = () => {
  return <RouterProvider router={Router} />
}

export default App     