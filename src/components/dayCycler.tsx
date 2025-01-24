import { Dispatch, SetStateAction, useEffect } from "react";
import { msPerMin } from "../constants/constants";

type props = {
  setIsDay: Dispatch<SetStateAction<boolean>>;
};

export const DayCycler = ({ setIsDay }: props) => {
  function updateIsDay() {
    const now = Date.now();
    const hour = new Date(now).getHours();
    const isDay = hour >= 8 && hour <= 20;

    setIsDay(isDay);
  }

  useEffect(() => {
    const dayCheckTimer = setInterval(updateIsDay, 30 * msPerMin);

    return () => {
      clearInterval(dayCheckTimer);
    };
  }, []);

  return <></>;
};
