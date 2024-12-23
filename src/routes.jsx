import App from "./App";
import DefaultProfile from "./DefaultProfile";
import Profile from "./Profile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "profile",
        element: <Profile />, 
    },
    {
        path:"profile/spinach",
        element: <Spinach />,
    },
    {
        path:"profile/popeye",
        element: <Popeye />
    },
    {
        path:"profile/:name",
        element: <DefaultProfile />
    }
];

export default routes;