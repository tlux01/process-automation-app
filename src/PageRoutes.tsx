import { Route, Routes } from "react-router";
import Customers from "./components/customers/Customers";
import Steps from "./components/steps/Steps";
import Templates from "./components/templates/Templates";
import Workflows from "./components/workflows/Workflows";
import Home from "./Home";
import Layout from "./Layout";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="workflows" element={<Workflows />} />
        <Route path="customers" element={<Customers />} />
        <Route path="templates" element={<Templates />} />
        <Route path="steps" element={<Steps />} />
      </Route>
    </Routes>
  );
}
export default PageRoutes;
