import React from "react";
import { useAccountEffect } from "wagmi";

const HookProvider = ({ children }: any) => {
  useAccountEffect({
    onConnect: () => {
      console.log("✨ connected");
    },
    onDisconnect: () => {
      console.log("❌ disconnected");
    },
  });

  return <>{children}</>;
};

export default HookProvider;
