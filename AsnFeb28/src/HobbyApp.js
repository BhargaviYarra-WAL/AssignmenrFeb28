import React, { useReducer } from "react";
import { initialState, reducer } from "./Hobby.reducer.js";
import AddHobby from "./AddHobby.js";
import Removeallhobbies from "./Removeallhobbies.js";
import Removehobby from "./Removehobby.js";
const HobbyApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<>
    <AddHobby
      add={text => dispatch({type: "add", text: text})} 
    />
    {state.hobbies.map(t => (
      <Removehobby
        key={t.id}
        hobby={t}
        remove={() => dispatch({type: "remove", id: t.id})}
      />
    ))}
      <Removeallhobbies
        removeall={() => dispatch({type: "removeall"})}
      />
   
  </>);
}
export default HobbyApp;