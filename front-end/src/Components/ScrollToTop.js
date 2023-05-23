import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//SCROLLS TO TOP OF PAGE AFTER NAVIGATE
export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}
