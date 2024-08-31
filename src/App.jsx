import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import JobPage, { jobLoader } from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
import MyProfilePage from './pages/MyProfilePage'


const App = () => {






  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch(`/api/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)

    }
    )

    return

  }

  // Delete Job

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',

    }
    )

    return

  }

  // Update Job

  const updateJobSubmit = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)

    }
    )

    return
  }

  const Router = createBrowserRouter(


    createRoutesFromElements(

      <Route path='/' element={<MainLayout />}>

        <Route index element={<HomePage />} />

        <Route path="/jobs" element={<JobsPage />} />

        <Route path="/myprofile" element={<MyProfilePage />} />


        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />

        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJobSubmit} />} loader={jobLoader} />


        <Route path="*" element={<NotFoundPage />} />



      </Route>



    )
  )

  return <RouterProvider router={Router} />
}

export default App     