export const initialState = {
    counter: 2,
    hobbies: [{
      id: 1,
      text: "Intial hobby 1",
    }, {
      id: 2,
      text: "Intial hobby 2",
    }],
  };
  export const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        {
          const newCounter = state.counter + 1;
          const newHobby = {
            id: newCounter,
            text: action.text,
          };
          return {
            counter: newCounter,
            hobbies: [...state.hobbies, newHobby],
          };
        }
      case "remove":
        {
          const idx = state.hobbies.findIndex(t => t.id === action.id);
          const hobbies = Object.assign([], state.hobbies);
          hobbies.splice(idx, 1);
          return {
            counter: state.counter,
            hobbies: hobbies,
          };
        }
      case "removeall":
        {
          return{
            counter:0,
            hobbies:[]
          }
        }
      default:
        return state;
    }
  };