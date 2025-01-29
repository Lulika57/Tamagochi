import { MdLocalDrink } from "react-icons/md";
import { cn } from "../utils/style";

// Information we want to pass in
type props = {
  name: string;
  isOpened: boolean;
  setOpenedMenu: any;
  icon: any;
  isMobile: boolean;
};

export const HorizontalMenu = ({
  name,
  isOpened,
  setOpenedMenu,
  icon,
  isMobile,
}: props) => {
  function handleClick() {
    if (isOpened) {
      setOpenedMenu(null);
    } else {
      setOpenedMenu(name);
    }
  }

  function handleBlur() {
    setOpenedMenu(null);
  }

  return (
    <div className="flex flex-row gap-1">
      <button
        onClick={handleClick}
        onBlur={handleBlur}
        className={cn(isMobile ? "h-14 w-14" : "h-24 w-24", "p-0")}
      >
        {icon}
      </button>
      {isOpened && (
        <div className="flex self-center rounded-full py-1 bg-gray-300 gap-2 px-2">
          <button className="w-10 h-10 p-0 rounded-full">{name}</button>
          <button className="w-10 h-10 p-0 rounded-full">{name}</button>
        </div>
      )}
    </div>
  );
};
