import React, {useState} from "react";
const AddHobby= ({add}) => {
  const [text, setText] = useState("");
  return (
    <div >
      <input value={text} onChange={e => setText(e.target.value)}  placeholder="Enter hobby"/>
      <button className="btn1" onClick={() => {add(text); setText("")}}>Add Hobby</button><br/>
    </div>
  );
}
export default AddHobby;