import "./App.css";
import { SocialsDock } from "@/components/socials-dock";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[rgb(247,247,249)] w-md rounded-3xl p-4">
        <div className="scroll-m-20 text-sm text-muted-foreground font-medium tracking-normal text-left space-y-2">
          <div>i'm studying CE at tmu (formerly ry)</div>
          <div>i build stuff in my freetime</div>
          <div>i run a clothing business</div>
          <div>and i enjoy learning arabic</div>
        </div>
      </div>
      <SocialsDock />
    </div>
  );
}

export default App;
