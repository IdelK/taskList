import TodoApp from "../todoApp/todoApp";
import WeatherApp from "../weatherApp/weatherApp";
import EmojiPickerApp from "../emojiSelector/EmojiPickerApp";


export default function RoutesApp ()  {
  return (
  
          <div className="App-header">
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
};
