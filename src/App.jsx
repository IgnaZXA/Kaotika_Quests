import { quests } from './data/quests.js';
import CardQuest from './components/CardQuest.jsx';
import './App.css';

function App() {

  return (
    <div style={{display:'grid',gridTemplateColumns: 'repeat(3, 1fr)', }}>
      {quests.map((quest) => {
        return (<CardQuest key={quest.quest.id} questJson={quest}></CardQuest>);
      })}
    </div>
  )
}

export default App;
