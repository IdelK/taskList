import RoutesApp from "./components/routesApp";
import "./App.css";
import {
  Routes /*En React-router-dom V6 es Routes en vez de Switch */,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

export function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<RoutesApp />} />
      </Routes>
    </Router>
  );
}

// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// import BSIndex from './bookStore/Index';
// import Create from './bookStore/create';
// import View from './bookStore/view';
// import Store from './bookStore/store';

// export function App() {
// 	return (
// 		<Store>
// 			<Router>
// 				<Routes>
// 					<Route
// 						path='/'
// 						element={<BSIndex />}
// 					/>
// 					<Route
// 						path='create'
// 						element={<Create />}
// 					/>
// 					<Route
// 						path='view/:bookID'
// 						element={<View />}
// 					/>
// 				</Routes>
// 			</Router>
// 		</Store>
// 	);
// }
