"use client";
import { animationCreate } from "@/utils/utils";
import { useEffect } from "react";

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    // Load bootstrap JS only on the client
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch(() => {});

    timer = setTimeout(() => {
      animationCreate();
    }, 120);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
};

export default Wrapper;