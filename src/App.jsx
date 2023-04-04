import './App.css';
import Root from './routes/root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './routes/contact';
import Articles from './routes/articles';
import Navbar from './components/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
    {
      path: "/contact",
      element: <Root><Contact/></Root>,
    },
    {
      path: "/articles",
      element: <Root><Articles/></Root>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
