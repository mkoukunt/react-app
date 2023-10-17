import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Comment from './components/comment';
import Clock from './components/clock';

const comment={
  date:new Date(),
  text:'learing React',
  author:{
    name:'Nitish',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}
function App() {
  return (
    <div>
   <Clock />
    </div>
  );
}

export default App;
