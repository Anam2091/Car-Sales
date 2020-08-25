export const totalUpdate = (totUpdate) => {
    console.log("Dispatching TOTAL_UPDATE action");
    return { type: "TOTAL_UPDATE", payload: totUpdate };
  };