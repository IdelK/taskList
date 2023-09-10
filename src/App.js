import TodoApp from "./todoApp/todoApp";
import WeatherApp from "./weatherApp/weatherApp";
import EmojiPickerApp from "./emojiSelector/EmojiPickerApp";
import './App.css';


export function App() {
  return (
    <div className="App-header" >
      <div>
        <WeatherApp />
      </div>

      <div>
        <TodoApp />
      </div>

      <div>
        <EmojiPickerApp />
      </div>
    </div>
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
