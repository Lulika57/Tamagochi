import { Dispatch, SetStateAction, useEffect } from "react";

type props = {
  setThirst: Dispatch<SetStateAction<number>>;
  setHunger: Dispatch<SetStateAction<number>>;
  setHealth: Dispatch<SetStateAction<number>>;
  setCleanliness: Dispatch<SetStateAction<number>>;
};

export const HappinessTracker = ({
  setThirst,
  setHunger,
  setHealth,
  setCleanliness,
}: props) => {
  const msPerMin = 60000;

  useEffect(() => {
    const thirstTimer = setInterval(
      () => shouldDecrease() && setThirst((prev) => prev - 1),
      30 * msPerMin
    );

    const hungerTimer = setInterval(
      () => shouldDecrease() && setHunger((prev) => prev - 1),
      30 * msPerMin
    );

    const cleanlinessTimer = setInterval(
      () => shouldDecrease() && setCleanliness((prev) => prev - 1),
      30 * msPerMin
    );

    const healthTimer = setInterval(
      () => shouldDecrease() && setHealth((prev) => prev - 1),
      30 * msPerMin
    );

    return () => {
      clearInterval(thirstTimer);
      clearInterval(hungerTimer);
      clearInterval(cleanlinessTimer);
      clearInterval(healthTimer);
    };
  }, []);

  function shouldDecrease() {
    const randomChance = Math.random();

    return randomChance > 0.5;
  }

  return <></>;
};
