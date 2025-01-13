import { useState } from "react";
import { MdLocalDrink } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbMedicineSyrup } from "react-icons/tb";
import { HorizontalMenu } from "./components/horizontalMenu";
import mop from "./assets/wmop.png";

function App() {
  const [status, setStatus] = useState<null>(null);
  const [openedMenu, setOpenedMenu] = useState<string | null>(null);

  return (
    <div className="w-screen flex justify-center gap-4">
      <div className="h-[95vh] w-[95vh] bg-red-500 rounded-lg shadow"></div>
      <div className="flex flex-col gap-32 justify-center">
        <div className="w-80 text-4xl text-wrap">Your Pet Is Hungry</div>
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
    </div>
  );
}

export default App;
