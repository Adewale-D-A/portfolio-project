import React, { Suspense } from "react";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter } from "react-router-dom";
import Loading from "./layouts/loading";
import AnimateRoutes from "./routing/animateRoute";
import { app } from "./firebase-config";

// const AnimateRoutes = React.lazy(() => import("./routing/animateRoute.js"));

function App() {
  getAnalytics(app);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AnimateRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
