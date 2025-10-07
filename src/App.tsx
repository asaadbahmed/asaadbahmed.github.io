import "./App.css";
import { Separator } from "@/components/ui/separator";
import { SocialsDock } from "@/components/socials-dock";
import { Navbar } from "@/components/navigation-bar";

// const AboutCard = () => (
//   <div className="scroll-m-20 text-sm text-muted-foreground font-medium tracking-normal text-left space-y-2">
//     <div>i'm studying CE at tmu (formerly ry)</div>
//     <div>i build stuff in my freetime</div>
//     <div>i run a clothing business</div>
//     <div>i enjoy learning arabic</div>
//   </div>
// );

const SummaryCard = () => (
  <div className="bg-[rgb(247,247,249)] rounded-3xl p-4 flex flex-col gap-4">
    <div className="text-left text-xl font-semibold">
      Asaad — B.E. in Computer Engineering{" "}
      <span className="font-semibold text-muted-foreground">('28)</span>
    </div>
    <Separator />
    <div className="flex flex-col text-left justify-between text-sm text-muted-foreground font-medium space-y-4">
      <div>i think engineering is, at its core, problems and solutions.</div>
      <div>sometimes the harder part is identifying the right problem.</div>
      <div>and there’s rarely only one solution.</div>
      <div>no problem is unsolvable.</div>
      <div>as engineers we should be solutionists.</div>
      <div>and there's always going to be problems,</div>
      <div>but what matters is that we keep solving them.</div>
      {/* <div>so we should keep our minds open and experiment.</div>
      <div>with curiosity and care, we can build things that matter.</div>
      <div>things that make the world a better place.</div> */}
    </div>
  </div>
);

function App() {
  return (
    <div className="flex flex-col items-center pl-10 pr-10">
      <div className="pb-10">
        <Navbar />
      </div>
      <div className="flex flex-col gap-10">
        <div className="text-4xl font-semibold">Coming Soon</div>
        <SummaryCard />
      </div>
      <div className="fixed bottom-0 left-0 right-0 pb-20">
        <SocialsDock />
      </div>
    </div>
  );
}

export default App;
