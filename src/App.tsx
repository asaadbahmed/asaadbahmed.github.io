import "./App.css";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { LinkPreview } from "@/components/ui/link-preview";
import { Navbar } from "@/components/navigation-bar";
import { TechStack } from "@/components/tech-stack";
import { ArrowUpRight } from "lucide-react";
import pose_2 from "@/assets/memojis/pose_2.png";

// const AboutCard = () => (
//   <div className="scroll-m-20 text-sm text-muted-foreground font-medium tracking-normal text-left space-y-2">
//     <div>i'm studying CE at tmu (formerly ry)</div>
//     <div>i build stuff in my freetime</div>
//     <div>i run a clothing business</div>
//     <div>i enjoy learning arabic</div>
//   </div>
// );

function App() {
  const [featuredArrowHovered, setFeaturedArrowHovered] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center fixed bottom-0 left-0 right-0 lg:sticky lg:top-10 z-50 mb-5 lg:mb-10">
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
            <div className="flex flex-row gap-4 items-center">
              <div className="relative aspect-square bg-neutral-200 border-4 border-white rounded-full h-20 w-20 overflow-visible">
                <img
                  src={pose_2}
                  alt="Memoji"
                  className="h-full w-full rounded-full"
                />

                <div className="cursor-default absolute -bottom-1 -right-1 bg-white rounded-full h-8 w-8 flex justify-center items-center">
                  <span className="inline-block [transform-origin:70%_70%] hover:animate-[wave-hand_2.3s_linear] text-xl">
                    👋
                  </span>
                </div>
              </div>
              <div className="text-left text-3xl md:text-4xl font-semibold cursor-default">
                hi, i'm asaad
              </div>
            </div>
            <Separator />
            <div className="text-left text-muted-foreground flex flex-col gap-y-4">
              <div>
                i have a passion for building stuff that{" "}
                <span className="font-semibold">actually matters.</span>
              </div>
              <div>i also enjoy solving problems.</div>
              <div>as there's never only one solution.</div>
              <div>and i believe no problem is unsolvable.</div>
              <div>we just need to look at it from another perspective.</div>
              <div className="flex flex-row flex-wrap items-center gap-1 text-muted-foreground">
                i’m also building a clothing business,{" "}
                <LinkPreview
                  url="https://anytimeoutfits.com"
                  className="text-primary font-medium hover:underline flex items-center gap-1"
                >
                  check it out <ArrowUpRight className="w-4 h-4" />
                </LinkPreview>
              </div>
            </div>
          </div>

          {/* current work (anytimeoutfits.com) */}
          <div
            className="
        bg-[rgb(247,247,249)]
        col-span-1 lg:col-span-2 lg:row-span-1
        aspect-[4/5] lg:aspect-auto
        rounded-3xl p-4
        flex flex-col
      "
          >
            <div
              className={cn(
                "rounded-full mt-auto h-8 w-8 bg-transparent border-2 border-neutral-300 justify-center items-center flex",
                `${featuredArrowHovered && "scale-105 border-white"}`
              )}
              onMouseEnter={() => setFeaturedArrowHovered(true)}
              onMouseLeave={() => setFeaturedArrowHovered(false)}
            >
              <ArrowUpRight
                className={cn(
                  "w-4 h-4",
                  `${
                    featuredArrowHovered
                      ? "text-black"
                      : "text-muted-foreground"
                  } `
                )}
                strokeWidth={2.5}
              />
            </div>
          </div>

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
          {/* <div
            className="
        bg-[rgb(247,247,249)]
        col-span-1 lg:col-span-4 lg:row-span-1
        aspect-[4/3] lg:aspect-[16/2]
        rounded-3xl p-8
      "
          ></div> */}

          <div className="col-span-1 lg:col-span-4">
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
