import { quests } from './data/quests.js';
import CardQuest from './components/CardQuest.jsx';

import ItemComponent from './components/ItemComponent.jsx';



import './App.css';

function App() {

  return (
    <>
      {quests.map((quest) => {
        return (<CardQuest key={quest.quest.id} questJson={quest}></CardQuest>);
      })}

      <ItemComponent itemJson={quests[0].quest.rewards.items[0]}/>

    </>
  )
}

export default App;
