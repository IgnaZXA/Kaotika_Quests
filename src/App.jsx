import { quests } from './data/quests.js';
import CardQuest from './components/CardQuest.jsx';

import './App.css';

function App() {

  return (
    <>
      <CardQuest questJson={quests[0]}/>
      <CardQuest questJson={quests[1]}/>

    </>
  )
}

export default App;
