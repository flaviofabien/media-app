import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Patient from './pages/superAdmin/patient/Patient.tsx';
import Consultation from './pages/superAdmin/consultation/Consultation.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  /****** Super Admin  ********/
  {
    path: "/",
    element: <App />
  },
  {
    path: "/patient",
    element: <Patient />
  },
  {
    path: "/consultation",
    element: <Consultation />
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)