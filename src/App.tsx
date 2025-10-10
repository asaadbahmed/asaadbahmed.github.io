import "./App.css";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { LinkPreview } from "@/components/ui/link-preview";
import { Tile, TileContent, TileGrid, TileTitle } from "@/components/tile";
import { Navbar } from "@/components/navigation-bar";
import { TechStack } from "@/components/tech-stack";
import { ArrowUpRight } from "lucide-react";
import pose_2 from "@/assets/memojis/pose_2.png";

function App() {
  const [activeTile, setActiveTile] = useState<string | null>(null);
  return (
    <div>
      <div className="flex flex-col items-center fixed bottom-0 left-0 right-0 lg:sticky lg:top-10 z-50 mb-5 lg:mb-10">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto p-4 mb-10">
        <TileGrid>
          <Tile
            className={cn(
              "flex-col col-span-1 lg:col-span-2 lg:row-span-2 aspect-[4/5] lg:aspect-square",
              activeTile && activeTile !== "hero" && "opacity-[0.05]"
            )}
          >
            <TileTitle className="flex flex-row gap-4 items-center">
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
              <div className="text-left">hi, i'm asaad</div>
            </TileTitle>

            <Separator />
            <TileContent className="text-left text-muted-foreground flex flex-col gap-y-4">
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
            </TileContent>
          </Tile>

          <Tile
            className={cn(
              "flex flex-col col-span-1 lg:col-span-2 lg:row-span-1 aspect-[4/5] lg:aspect-auto",
              activeTile && activeTile !== "currentWork" && "opacity-[0.05]"
            )}
          >
            <TileContent className="flex flex-1">
              <div
                className={cn(
                  "rounded-full mt-auto h-8 w-8 bg-transparent border-2 border-neutral-300 transition-all ease-linear duration-75 hover:scale-105 hover:border-white justify-center items-center flex"
                )}
                onMouseEnter={() => setActiveTile("currentWork")}
                onMouseLeave={() => setActiveTile(null)}
              >
                <ArrowUpRight
                  className={cn(
                    "w-4 h-4",
                    `${
                      activeTile === "currentWork"
                        ? "text-black"
                        : "text-muted-foreground"
                    } `
                  )}
                  strokeWidth={2.5}
                />
              </div>
            </TileContent>
          </Tile>

          {/* barcode generator project */}
          <div
            className={cn(
              "transition-all duration-100 ease-linear bg-[rgb(247,247,249)] aspect-[4/5] lg:aspect-square rounded-3xl p-8",
              activeTile &&
                activeTile !== "barcodeGenerator" &&
                "opacity-[0.05]"
            )}
          ></div>

          {/* email sorter project */}
          <div
            className={cn(
              "transition-all duration-100 ease-linear bg-[rgb(247,247,249)] aspect-[4/5] lg:aspect-square rounded-3xl p-8",
              activeTile && activeTile !== "emailSorter" && "opacity-[0.05]"
            )}
          ></div>

          {/* inventory manager project */}
          <div
            className={cn(
              "transition-all duration-100 ease-linear bg-[rgb(247,247,249)] aspect-[4/5] lg:aspect-[9/18] rounded-3xl p-8",
              activeTile &&
                activeTile !== "inventoryManager" &&
                "opacity-[0.05]"
            )}
          ></div>

          {/* eebot/robot project */}
          <div
            className={cn(
              "transition-all duration-100 ease-linear bg-[rgb(247,247,249)] aspect-[4/5] lg:aspect-[9/18] rounded-3xl p-8",
              activeTile && activeTile !== "eeBot" && "opacity-[0.05]"
            )}
          ></div>

          {/* some random project */}
          <div
            className={cn(
              "transition-all duration-100 ease-linear bg-[rgb(247,247,249)] aspect-[4/5] lg:aspect-[9/18] rounded-3xl p-8",
              activeTile && activeTile !== "p1" && "opacity-[0.05]"
            )}
          ></div>

          {/* some random project */}
          <div
            className={cn(
              "transition-all duration-100 ease-linear bg-[rgb(247,247,249)] aspect-[4/5] lg:aspect-[9/18] rounded-3xl p-8",
              activeTile && activeTile !== "p2" && "opacity-[0.05]"
            )}
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
        </TileGrid>
      </div>
    </div>
  );
}

export default App;
