import { useEffect, useState } from "react";

export const HappinessSystem = () => {
  const [thirst, setThirst] = useState<number>(10);
  const [hunger, setHunger] = useState<number>(10);
  const [health, setHealth] = useState<number>(10);
  const [cleanliness, setCleanliness] = useState<number>(10);

  useEffect(() => {
    const msPerMin = 60000;
    
    const thirstTimer = setInterval(
      () => shouldDecrease() && setThirst((prev) => prev - 1),
      30 * msPerMin
    );

    const hungerTimer = setInterval(
        () => shouldDecrease() && setHunger((prev) => prev - 1),
        30 * msPerMin
    );

    return () => {
      clearInterval(thirstTimer);
      clearInterval(hungerTimer);
    };
  }, []);

  function shouldDecrease() {
    const randomChance = Math.random();

    return randomChance > 0.5;
  }

  return <></>;
};
