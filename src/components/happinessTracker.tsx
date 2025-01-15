import { Dispatch, SetStateAction, useEffect } from "react";
import { msPerMin } from "../constants/constants";

type props = {
  thirst: number;
  setThirst: Dispatch<SetStateAction<number>>;
  hunger: number;
  setHunger: Dispatch<SetStateAction<number>>;
  health: number;
  setHealth: Dispatch<SetStateAction<number>>;
  cleanliness: number;
  setCleanliness: Dispatch<SetStateAction<number>>;
  setStatus:  Dispatch<SetStateAction<string[]>>;
};

export const HappinessTracker = ({
  thirst,
  setThirst,
  hunger,
  setHunger,
  health,
  setHealth,
  cleanliness,
  setCleanliness,
  setStatus,
}: props) => {
  useEffect(() => {
    const newStatus: string[] = [];

    if (thirst <= 5) newStatus.push("Thirsty");
    if (hunger <= 5) newStatus.push("Hungry");
    if (health <= 5) newStatus.push("Sick");
    if (cleanliness <= 5) newStatus.push("Dirty");

    setStatus(newStatus);
  }, [thirst, hunger, health, cleanliness]);

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
