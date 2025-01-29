import { useEffect, useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdLocalDrink } from "react-icons/md";
import { TbMedicineSyrup } from "react-icons/tb";
import mop from "./assets/wmop.png";
import { DayCycler } from "./components/dayCycler";
import { HappinessTracker } from "./components/happinessTracker";
import { HorizontalMenu } from "./components/horizontalMenu";
import { cn } from "./utils/style";

function App() {
  const [thirst, setThirst] = useState<number>(10);
  const [hunger, setHunger] = useState<number>(10);
  const [health, setHealth] = useState<number>(10);
  const [cleanliness, setCleanliness] = useState<number>(10);

  const [openedMenu, setOpenedMenu] = useState<string | null>(null);
  const [isDay, setIsDay] = useState<boolean>(true);
  const [status, setStatus] = useState<string[]>([]);

  const [isPortrait, setIsPortrait] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);


  function orientationChangeHandler(event: Event) {
    const type = (event.target as ScreenOrientation).type;
    const isPortrait = type == "portrait-primary" || type === "portrait-secondary";

    setIsPortrait(isPortrait);
  };

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isPortrait = window.innerHeight > window.innerWidth;

    screen.orientation.addEventListener("change", orientationChangeHandler);
    setIsMobile(isMobile)
    setIsPortrait(isPortrait)
    setIsLoaded(true);

    return () => {
      screen.orientation.removeEventListener("change", orientationChangeHandler);
    }
  }, []);

  return (
    <div className="w-screen flex justify-center gap-4">
      <div className={cn(isMobile ? "h-[100vh] w-[100vw]" : "h-[95vh] w-[95vh] rounded-lg shadow", "bg-red-500")}></div>
      {isLoaded && !isPortrait && (
        <div className={cn(isMobile && "")}>
          <div className={cn(isMobile ? "gap-2" : "gap-32", "flex flex-col justify-center")}>
            <div className={cn(isMobile ? "w-24 text-lg text-wrap" : "w-80 text-4xl text-wrap")}>
              {status.length ? `Your Pet Is ${status[0]}` : ""}
            </div>
            <div className={cn(isMobile ? "gap-1" : "gap-4", "flex flex-col")}>
              <HorizontalMenu
                name={"Drink"}
                isOpened={openedMenu === "Drink"}
                setOpenedMenu={setOpenedMenu}
                icon={<MdLocalDrink className={cn(isMobile ? "p-1" : "p-4", "size-full")} />}
                isMobile={isMobile}
              />
              <HorizontalMenu
                name={"Feed"}
                isOpened={openedMenu === "Feed"}
                setOpenedMenu={setOpenedMenu}
                icon={<IoFastFoodOutline className={cn(isMobile ? "p-1" : "p-4", "size-full")} />}
                isMobile={isMobile}
              />
              <HorizontalMenu
                name={"Cure"}
                isOpened={openedMenu === "Cure"}
                setOpenedMenu={setOpenedMenu}
                icon={<TbMedicineSyrup className={cn(isMobile ? "p-1" : "p-4", "size-full")} />}
                isMobile={isMobile}
              />
              <HorizontalMenu
                name={"Clean"}
                isOpened={openedMenu === "Clean"}
                setOpenedMenu={setOpenedMenu}
                icon={<img src={mop} className={cn(isMobile ? "p-1" : "p-4", "size-full")} />}
                isMobile={isMobile}
              />
            </div>
          </div>
        </div>
      )}

      <DayCycler setIsDay={setIsDay} />
      <HappinessTracker
        thirst={thirst}
        setThirst={setThirst}
        hunger={hunger}
        setHunger={setHunger}
        health={health}
        setHealth={setHealth}
        cleanliness={cleanliness}
        setCleanliness={setCleanliness}
        setStatus={setStatus}
      />
    </div>
  );
}

export default App;
