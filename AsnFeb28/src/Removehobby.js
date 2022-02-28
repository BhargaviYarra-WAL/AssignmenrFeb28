const Removehobby = ({ hobby, remove}) => { 
  return (
    <div className="Hobby">
      <div>
      <span >{hobby.text}</span>
      <button className="btn1" onClick={remove}>Remove</button>
      </div>  
    </div>
    
  );
}
export default Removehobby;