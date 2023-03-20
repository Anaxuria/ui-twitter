import { Children } from "react"
import { createBrowserRouter } from "react-router-dom"
import { Default } from "./layouts/Default"
import { Status } from "./pages/Status"
import { TimeLine } from "./pages/Timeline"

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',  
                element: <TimeLine />
            },
            
            {
                path: '/status',
                element: <Status />
            },
        ],
    }
])