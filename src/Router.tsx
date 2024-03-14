import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import AlbumPage from "./pages/AlbumPage";
import { getUserById } from "./requests/getUserById";
import { getPostById } from "./requests/getPostById";
import { getCommentsById } from "./requests/getCommentsById";
import { getAlbumById } from "./requests/getAlbumById";
import { getPhotosById } from "./requests/getPhotosById";

const Router = createBrowserRouter([
   { 
    path: "/",
    element: <HomePage />,
    loader: async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        return data;
      },
    },
    {
      path: "/users/:userId",
      element: <UserPage />,
      loader: async ({ params }) => {
        const data = await getUserById(params.userId as string);
        return data;
      },
    },
    {
      path: "/users/:userId/posts/:postId",
      element: <PostPage />,
      loader: async ({ params }) => {
        const userData = await getUserById(params.userId as string);
        const postData = await getPostById(params.postId as string);
        const commentsData = await getCommentsById(params.postId as string);
        return {
          user: userData,
          post: postData,
          comments: commentsData,
        };
      },
    },
    {
      path: "/users/:userId/albums/:albumId",
      element: <AlbumPage />,
      loader: async ({ params }) => {
        const userData = await getUserById(params.userId as string);
        const albumData = await getAlbumById(params.albumId as string);
        const photosData = await getPhotosById(params.albumId as string);
        return {
          user: userData,
          album: albumData,
          photos: photosData,
        };
      },
    },

]);

export default Router;