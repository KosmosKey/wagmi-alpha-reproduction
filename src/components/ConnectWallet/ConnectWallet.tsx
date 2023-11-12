import React, { Fragment } from "react";
import { useConnectors, useAccountEffect, useConnect } from "wagmi";

const ConnectWallet = () => {
  const connectors = useConnectors();
  const { connectAsync } = useConnect();

  if (!connectors.length) {
    return <h1>Please install some connectors that supports EIP6963</h1>;
  }

  return (
    <Fragment>
      {connectors.map((connector) => (
        <button
          style={{
            display: "flex",
            alignItems: "center",
            background: "#d6cfcf",
            marginTop: "16px",
            padding: "6px 20px",
            borderRadius: "8px",
            maxWidth: "fit-content",
            cursor: "pointer",
          }}
          onClick={() => connectAsync({ connector })}
        >
          <img
            src={connector.icon || ""}
            style={{ maxWidth: "28px" }}
            alt="eip6963"
          />
          <p style={{ marginLeft: "12px" }}>{connector.name}</p>
        </button>
      ))}
    </Fragment>
  );
};

export default ConnectWallet;
