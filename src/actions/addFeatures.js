    //step 4 create actions for what you want to do on the actual webpage
    export const addCar = (newCar) => {
    console.log("Dispatching ADD_CAR action");
    return { type: "ADD_CAR", payload: newCar };
  };