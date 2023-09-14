import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "./layouts/loading";
import AnimateRoutes from "./routing/animateRoute";

// const AnimateRoutes = React.lazy(() => import("./routing/animateRoute.js"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AnimateRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
