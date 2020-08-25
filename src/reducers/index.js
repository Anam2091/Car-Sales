
//former state from app.js 
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
    //"step 1, create reducer which takes action and updates state"
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CAR":
       return {
         ...state,
          car:{
            ...state.car,
            features: [...state.car.features, action.payload]
          }
       };

       //if feature is what you "x'd out then dont return it"
      case "REMOVE_CAR":
        return{
          ...state,
          car:{
           ...state.car,
           features: state.car.features.filter(feature => feature.name !== action.payload.name)
          }
        }

        
             
       
      default:
        return state;
    }
  };
  