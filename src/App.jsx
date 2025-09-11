import { questsJson } from './data/quests.js';
import CardQuest from './components/CardQuest.jsx';
import { useState } from 'react';
import './App.css';



function App() {

  const [quests, setQuests] = useState(questsJson);


  const questHandleClick = (questModified) => {
    console.log(quests);

    setQuests([...quests, [questModified]]);
    console.log(quests);

  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', }}>
      {quests.map((quest) => {
        return (<CardQuest key={quest.quest.id} questJson={quest} questHandleClick={questHandleClick}></CardQuest>);
      })}
    </div>
  )
}

export default App;
