import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom"
import App from "../App"
import Login from "../pages/login/login"
import Posts from "../pages/posts/posts"
import Main from "../pages/main/main"
import Comments from "../pages/comments/comments"
import Albums from "../pages/albums/albums"
import Photos from "../pages/photos/photos"
import Todos from "../pages/todos/todos"
import Users from "../pages/users/users"
const Index = ()=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Login/>}/>
                <Route path="main/*" element={<Main />}>
                <Route index element={<Posts />}/>
                <Route path="comments" element={<Comments />}/>
                <Route path="albums" element={<Albums />}/>
                <Route path="photos" element={<Photos />}/>
                <Route path="todos" element={<Todos />}/>
                <Route path="users" element={<Users />}/>
                </Route>
                {/* <Route path="cars" element={<Cars/>}/>
                <Route path="single-car/:id" element={<SingleCar/>}/> */}
            </Route>
        )
    );
    return <RouterProvider router={router} />
}
export default Index
