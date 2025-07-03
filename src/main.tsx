import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from './pages/superAdmin/patient/User.tsx';
import Consultation from './pages/superAdmin/consultation/Consultation.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import AjouterConsultation from './pages/superAdmin/consultation/AjouterConsultation.tsx';
import Inscription from './pages/auth/Inscription.tsx';
import Connexion from './pages/auth/Connexion.tsx';
import { DataProvider } from './stateGlobal/ContextGlobal.tsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  /****** Super Admin  ********/
  {
    path: "/",
    element: <App />
  },
  {
    path: "/inscription",
    element: <Inscription />
  },
  {
    path: "/connexion",
    element: <Connexion />
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/consultation",
    element: <Consultation />
  },
  {
    path: "/consultation/ajouter",
    element: <AjouterConsultation />
  },
]);


createRoot(document.getElementById('root')!).render(
  <div >
    <StrictMode>
      <DataProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
      </DataProvider>
    </StrictMode>,
  </div>)