import "./App.css";
import { Separator } from "@/components/ui/separator";
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
    </div>
  </div>
);

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="pb-10">
        <Navbar />
      </div>
      <div className="flex flex-col gap-10 mb-20">
        <div className="text-4xl font-semibold">Coming Soon</div>
        <SummaryCard />
      </div>
    </div>
  );
}

export default App;
