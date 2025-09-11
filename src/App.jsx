import { quests } from './data/quests.js';
import CardQuest from './components/CardQuest.jsx';


import './App.css';

function App() {

  return (
    <>
      {quests.map((quest) => {
        return (<CardQuest key={quest.quest.id} questJson={quest}></CardQuest>);
      })}

    </>
  )
}

export default App;
