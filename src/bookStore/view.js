import { Link } from "react-router-dom";

function View() {
  return (
    <div>
      <div>
        <Link to="/create"> create</Link>  
      </div>
      <div>View</div>
    </div>
  ); 
}

export default View;
