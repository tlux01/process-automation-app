import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import PageRoutes from "./PageRoutes";

function App() {
  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}

export default withAuthenticator(App);
