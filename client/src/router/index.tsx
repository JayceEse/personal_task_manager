import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import HomePage  from "../pages/HomePage";
import TasksPage from "../pages/TasksPage"
import AboutPage from "../pages/AboutPage"

export const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <HomePage/>,
      },
      {
        path: 'tasks',
        element: <TasksPage/>,
      },
      {
        path: 'about',
        element: <AboutPage/>,
      },
    ]
  }
])