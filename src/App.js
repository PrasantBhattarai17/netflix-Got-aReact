import Body from "./components/body";
import Header from "./components/header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
        <Provider store={appStore}>
    <Header/>
  <Body/>
  </Provider>
   </>
  );
}

export default App;
