import { useEffect, useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdLocalDrink } from "react-icons/md";
import { TbMedicineSyrup } from "react-icons/tb";
import mop from "./assets/wmop.png";
import { HappinessTracker } from "./components/happinessTracker";
import { HorizontalMenu } from "./components/horizontalMenu";

function App() {
  const [thirst, setThirst] = useState<number>(10);
  const [hunger, setHunger] = useState<number>(10);
  const [health, setHealth] = useState<number>(10);
  const [cleanliness, setCleanliness] = useState<number>(10);

  const [openedMenu, setOpenedMenu] = useState<string | null>(null);
  const [status, setStatus] = useState<string[]>([]);

  useEffect(() => {
    const newStatus: string[] = [];

    if (thirst <= 5) newStatus.push("Thirsty");
    if (hunger <= 5) newStatus.push("Hungry");
    if (health <= 5) newStatus.push("Sick");
    if (cleanliness <= 5) newStatus.push("Dirty");

    setStatus(newStatus);
  }, [thirst, hunger, health, cleanliness]);

  return (
    <div className="w-screen flex justify-center gap-4">
      <div className="h-[95vh] w-[95vh] bg-red-500 rounded-lg shadow"></div>
      <div className="flex flex-col gap-32 justify-center">
        <div className="w-80 text-4xl text-wrap">
          {status.length ? `Your Pet Is ${status[0]}` : ""}
        </div>
        <div className="flex flex-col gap-4">
          <HorizontalMenu
            name={"Drink"}
            isOpened={openedMenu === "Drink"}
            setOpenedMenu={setOpenedMenu}
            icon={<MdLocalDrink className="size-full p-4" />}
          />
          <HorizontalMenu
            name={"Feed"}
            isOpened={openedMenu === "Feed"}
            setOpenedMenu={setOpenedMenu}
            icon={<IoFastFoodOutline className="size-full p-4" />}
          />
          <HorizontalMenu
            name={"Cure"}
            isOpened={openedMenu === "Cure"}
            setOpenedMenu={setOpenedMenu}
            icon={<TbMedicineSyrup className="size-full p-4" />}
          />
          <HorizontalMenu
            name={"Clean"}
            isOpened={openedMenu === "Clean"}
            setOpenedMenu={setOpenedMenu}
            icon={<img src={mop} className="size-full p-4" />}
          />
        </div>
      </div>

      <HappinessTracker
        setThirst={setThirst}
        setHunger={setHunger}
        setHealth={setHealth}
        setCleanliness={setCleanliness}
      />
    </div>
  );
}

export default App;
