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

function App() {
  return (
    <div>
      <div className="flex flex-col items-center mb-10 sticky top-10 z-50">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto p-4 mb-10">
        <div
          className="
      grid gap-4
      grid-cols-1
      lg:grid-cols-4 lg:grid-rows-2
    "
        >
          {/* hero tile */}
          <div
            className="
        flex flex-col bg-[rgb(247,247,249)]
        col-span-1 lg:col-span-2 lg:row-span-2
        aspect-[4/5] lg:aspect-square
        rounded-3xl p-8 gap-4
      "
          >
            <div className="text-left text-3xl md:text-4xl font-semibold cursor-default">
              hi, i'm asaad{" "}
              <span className="inline-block [transform-origin:70%_70%] hover:animate-[wave-hand_2.3s_linear]">
                👋
              </span>
            </div>
            <Separator />
          </div>

          {/* current work (anytimeoutfits.com) */}
          <div
            className="
        bg-[rgb(247,247,249)]
        col-span-1 lg:col-span-2 lg:row-span-1
        aspect-[4/5] lg:aspect-[16/9]
        rounded-3xl p-4
      "
          ></div>

          {/* barcode generator project */}
          <div
            className="
        bg-[rgb(247,247,249)]
        aspect-[4/5] lg:aspect-square
        rounded-3xl p-8
      "
          ></div>

          {/* email sorter project */}
          <div
            className="
        bg-[rgb(247,247,249)]
        aspect-[4/5] lg:aspect-square
        rounded-3xl p-8
      "
          ></div>

          {/* inventory manager project */}
          <div
            className="
        bg-[rgb(247,247,249)]
        aspect-[4/5] lg:aspect-[9/18]
        rounded-3xl p-8
      "
          ></div>

          {/* eebot/robot project */}
          <div
            className="
        bg-[rgb(247,247,249)]
        aspect-[4/5] lg:aspect-[9/18]
        rounded-3xl p-8
      "
          ></div>

          {/* some random project */}
          <div
            className="
        bg-[rgb(247,247,249)]
        aspect-[4/5] lg:aspect-[9/18]
        rounded-3xl p-8
      "
          ></div>

          {/* some random project */}
          <div
            className="
        bg-[rgb(247,247,249)]
        aspect-[4/5] lg:aspect-[9/18]
        rounded-3xl p-8
      "
          ></div>

          {/* infinite moving tech stack */}
          <div
            className="
        bg-[rgb(247,247,249)]
        col-span-1 lg:col-span-4 lg:row-span-1
        aspect-[4/3] lg:aspect-[16/2]
        rounded-3xl p-8
      "
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
