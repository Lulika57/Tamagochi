// Information we want to pass in
type props = {
  name: string;
  isOpened: boolean;
  setOpenedMenu: any;
};

export const HorizontalMenu = ({ name, isOpened, setOpenedMenu }: props) => {

    function handleClick() {
        if(isOpened) {
            setOpenedMenu(null);
        }
        else {
            setOpenedMenu(name);
        }
    }

function handleBlur () {
    setOpenedMenu (null)
}

  return (
    <div className="flex flex-row gap-1">
      <button onClick={handleClick} onBlur={handleBlur} className="h-24 w-24 p-0">{name}</button>
      {isOpened && (
        <div className="flex self-center rounded-full py-1 bg-gray-300 gap-2 px-2">
          <button className="w-10 h-10 p-0 rounded-full">{name}</button>
          <button className="w-10 h-10 p-0 rounded-full">{name}</button>
        </div>
      )}
    </div>
  );
};
