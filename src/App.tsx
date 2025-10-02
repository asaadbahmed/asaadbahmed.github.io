import "./App.css";
import { Navigation } from "./components/navigation";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <Navigation />
      <div className="flex flex-col items-center gap-2">
        <h1 className="scroll-m-20 text-center text-3xl font-bold tracking-normal text-balance">
          Coming Soon
        </h1>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-normal text-left">
          hi, I'm <span className="text-emerald-400">Asaad!</span> <br />• i'm
          studying CE at tmu (formerly ry)
          <br />• i build stuff in my freetime
          <br />• i run a clothing business
          <br />• and i enjoy learning arabic
        </h3>
        <h2 className="scroll-m-20 text-center text-2xl font-bold tracking-normal text-balance">
          Check back later!
        </h2>
      </div>
    </div>
  );
}

export default App;
