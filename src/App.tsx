import { Provider } from "react-redux";
import "./App.css";
import { AppWrapper } from "./App.styles";
import { Wizard } from "./components/Wizard/Wizard";
import { STEPS } from "./components/Wizard/Wizard.constant";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Wizard steps={STEPS} />
      </AppWrapper>
    </Provider>
  );
}

export default App;
