import { useAppContext } from "./store";
import { Link } from 'react-router-dom';


function BSIndex() {
	const store = useAppContext();

	return (
		<div>
			<div><Link to='/create'> create</Link></div>

			{store.items.map((item) => (<div>{item.title}</div>))}
		</div>
	);
}

export default BSIndex;
