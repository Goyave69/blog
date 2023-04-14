
import Contact from "./contact";
import Articles from "./articles";
import Root from "./root";

const Routes = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "articles",
          element: <Articles />
        },
      ]
    }, 
  ];

export default Routes;