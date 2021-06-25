import './App.css';
import ChatBody from './component/chatBody/chatBody';
import  NavigationBar from "./component/navigationBar/navigationBar";

function App() {
  return (
    <div className="mainDiv">
      <NavigationBar/>
      <ChatBody/>
    </div>
  );
}

export default App;
