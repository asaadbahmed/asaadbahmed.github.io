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
  <div className="bg-[rgb(247,247,249)] rounded-3xl p-4 flex flex-col gap-8">
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
    <div>
      <div className="flex flex-col items-center mb-10 sticky top-10 z-50">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          {/* hero tile */}
          <div className="bg-[rgb(247,247,249)] col-span-2 row-span-2 aspect-square rounded-3xl p-4"></div>
          {/* current work (anytimeoutfits.com) */}
          <div className="bg-[rgb(247,247,249)] col-span-2 row-span-1 rounded-3xl p-4"></div>
          {/* barcode generator project */}
          <div className="bg-[rgb(247,247,249)] col-span-1 row-span-1 aspect-square rounded-3xl p-4"></div>
          {/* email sorter project */}
          <div className="bg-[rgb(247,247,249)] col-span-1 row-span-1 aspect-square rounded-3xl p-4"></div>
          {/* inventory manager project */}
          <div className="bg-[rgb(247,247,249)] col-span-1 row-span-2 aspect-[9/18] rounded-3xl p-4"></div>
          {/* eebot/robot project */}
          <div className="bg-[rgb(247,247,249)] col-span-1 row-span-2 aspect-[9/18] rounded-3xl p-4"></div>
          {/* some random project */}
          <div className="bg-[rgb(247,247,249)] col-span-1 row-span-2 aspect-[9/18] rounded-3xl p-4"></div>
          {/* some random project */}
          <div className="bg-[rgb(247,247,249)] col-span-1 row-span-2 aspect-[9/18] rounded-3xl p-4"></div>
          {/* infinite moving tech stack  */}
          <div className="bg-[rgb(247,247,249)] col-span-4 row-span-1 aspect-[16/2] rounded-3xl p-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
