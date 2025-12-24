import { BrowserRouter } from "react-router";
import {GeneralRoutes} from "./routes/general-routes";
import {RestaurantRoutes} from "./routes/restaurant-routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <RestaurantRoutes />
        {/* <GeneralRoutes /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
