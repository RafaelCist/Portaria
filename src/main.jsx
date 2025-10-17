import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EntryControl from './pages/EntryControl.jsx'
import Employees from './pages/Employees.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddEmployee from './pages/AddEmployee.jsx'
import EditEmployee from './pages/EditEmployee.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/controle", element: <EntryControl /> },
  { path: "/funcionarios", element: <Employees /> },
  { path: "/adicionarfuncionario", element: <AddEmployee /> },
  { path: "/editar", element: <EditEmployee /> },
  { path: "/login", element: <Login /> },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
