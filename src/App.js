import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


function App() {



  const appRouter = createBrowserRouter([
    {
    path :"/",
    element :<Body/>,
    children : [
      {
        path :"/",
        element:<MainContainer/>
      },
      {
        path : "/watch/:id",
        element:<WatchPage />
      }
    ]
  },
])

  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter}>
        <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
