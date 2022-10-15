import AppRouter from "./routes/Router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="appA">
      <div className="appTop">
        <img src={"./images/HomeTop.JPEG"} alt="Home Page Top Image" />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
