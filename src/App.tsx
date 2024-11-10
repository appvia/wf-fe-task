import { Provider } from "react-redux";
import { AppWrapper } from "./App.styles";
import store from "./redux/store";
import { Home } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Home />
      </AppWrapper>
    </Provider>
  );
}

export default App;
