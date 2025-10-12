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
      <div className="fixed right-0 bottom-0 left-0 z-50 mb-5 flex flex-col items-center lg:sticky lg:top-10 lg:mb-10">
        <Navbar />
      </div>
      <div className="mx-auto mb-10 max-w-6xl p-4">
        <TileGrid>
          <Tile
            className={cn(
              "col-span-1 aspect-[4/5] flex-col lg:col-span-2 lg:row-span-2 lg:aspect-square",
              activeTile && activeTile !== "hero" && "opacity-[0.05]",
            )}
          >
            <TileTitle className="flex flex-row items-center gap-4">
              <div className="relative aspect-square h-20 w-20 overflow-visible rounded-full border-4 border-white bg-neutral-200">
                <img
                  src={pose_2}
                  alt="Memoji"
                  className="h-full w-full rounded-full"
                />

                <div className="absolute -right-1 -bottom-1 flex h-8 w-8 cursor-default items-center justify-center rounded-full bg-white">
                  <span className="inline-block [transform-origin:70%_70%] text-xl hover:animate-[wave-hand_2.3s_linear]">
                    👋
                  </span>
                </div>
              </div>
              <div className="text-left">hi, i'm asaad</div>
            </TileTitle>

            <Separator />
            <TileContent className="text-muted-foreground flex flex-col gap-y-4 text-left">
              <div>
                i have a passion for building stuff that{" "}
                <span className="font-semibold">actually matters.</span>
              </div>
              <div>i also enjoy solving problems.</div>
              <div>as there's never only one solution.</div>
              <div>and i believe no problem is unsolvable.</div>
              <div>we just need to look at it from another perspective.</div>
              <div className="text-muted-foreground flex flex-row flex-wrap items-center gap-1">
                i’m also building a clothing business,{" "}
                <LinkPreview
                  url="https://anytimeoutfits.com"
                  className="text-primary flex items-center gap-1 font-medium hover:underline"
                >
                  check it out <ArrowUpRight className="h-4 w-4" />
                </LinkPreview>
              </div>
            </TileContent>
          </Tile>

          <Tile
            className={cn(
              "col-span-1 flex aspect-[4/5] flex-col lg:col-span-2 lg:row-span-1 lg:aspect-auto",
              activeTile && activeTile !== "currentWork" && "opacity-[0.05]",
            )}
          >
            <TileContent className="flex flex-1">
              <div
                className={cn(
                  "mt-auto flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-300 bg-transparent transition-all duration-75 ease-linear hover:scale-105 hover:border-white",
                )}
                onMouseEnter={() => setActiveTile("currentWork")}
                onMouseLeave={() => setActiveTile(null)}
              >
                <ArrowUpRight
                  className={cn(
                    "h-4 w-4",
                    `${
                      activeTile === "currentWork"
                        ? "text-black"
                        : "text-muted-foreground"
                    } `,
                  )}
                  strokeWidth={2.5}
                />
              </div>
            </TileContent>
          </Tile>

          <Tile
            className={cn(
              "aspect-[4/5] lg:aspect-square",
              activeTile &&
                activeTile !== "barcodeGenerator" &&
                "opacity-[0.05]",
            )}
          >
            <TileContent>
              <></>
            </TileContent>
          </Tile>

          <Tile
            className={cn(
              "aspect-[4/5] lg:aspect-square",
              activeTile && activeTile !== "emailSorter" && "opacity-[0.05]",
            )}
          >
            <TileContent>
              <></>
            </TileContent>
          </Tile>

          <Tile
            className={cn(
              "aspect-[4/5] lg:aspect-[9/18]",
              activeTile &&
                activeTile !== "inventoryManager" &&
                "opacity-[0.05]",
            )}
          >
            <TileContent>
              <></>
            </TileContent>
          </Tile>

          <Tile
            className={cn(
              "aspect-[4/5] lg:aspect-[9/18]",
              activeTile && activeTile !== "eeBot" && "opacity-[0.05]",
            )}
          >
            <TileContent>
              <></>
            </TileContent>
          </Tile>

          <Tile
            className={cn(
              "aspect-[4/5] lg:aspect-[9/18]",
              activeTile && activeTile !== "p1" && "opacity-[0.05]",
            )}
          >
            <TileContent>
              <></>
            </TileContent>
          </Tile>

          <Tile
            className={cn(
              "aspect-[4/5] lg:aspect-[9/18]",
              activeTile && activeTile !== "p2" && "opacity-[0.05]",
            )}
          >
            <TileContent>
              <></>
            </TileContent>
          </Tile>
        </TileGrid>

        <div className="mt-2">
          <TechStack />
        </div>
      </div>
    </div>
  );
}

export default App;
