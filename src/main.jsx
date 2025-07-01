import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Hero from './Components/Body/Hero.jsx';
import Service from './Components/Product/Service.jsx';
import About from './Components/About/About.jsx';
import Story from './Components/About/Story.jsx';
import Vision from './Components/About/Vision.jsx';
import Mission from './Components/About/Mission.jsx';
import License from './Components/About/License.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Hero},
      {path: 'services', Component: Service},
      {path: 'about', Component:About,
        children: [
          {index: true, Component: Story},
          {path: 'vision', Component: Vision},
          {path: 'mission', Component: Mission},
          {path: 'license', Component: License},
        ]
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
