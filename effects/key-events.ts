import { useEffect } from "react";

export default function useGlobalKeyUpEvent(
  callback: (ev: KeyboardEvent) => void
) {
  useEffect(() => {
    window.addEventListener("keyup", callback, false);

    return () => {
      window.removeEventListener("keyup", callback, false);
    };
  }, [callback]);
}
