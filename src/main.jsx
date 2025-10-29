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
import Visitors from './pages/Visitors.jsx'
import AddVisitor from './pages/AddVisitor.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/controle", element: <EntryControl /> },
  { path: "/funcionarios", element: <Employees /> },
  { path: "/adicionarfuncionario", element: <AddEmployee /> },
  { path: "/editar", element: <EditEmployee /> },
  { path: "/paginainicial", element: <App /> },
  { path: "/visitantes", element: <Visitors /> },
  { path: "/adicionarvisitante", element: <AddVisitor /> },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
