export const removecar = (oldCar) => {
    console.log("Dispatching REMOVE_CAR action");
    return { type: "REMOVE_CAR", payload: oldCar };
  };