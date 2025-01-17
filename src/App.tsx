import { useEffect, useState } from 'react'
import './App.css'
import { Storage } from './storage'
import { Character } from './types/Character'
import QuestWindow from './components/QuestWindow'
import CharacterCreator from './pages/CharacterCreator'

function App() {
  const [user, setUser] = useState<Character | null>(null);

  useEffect(() => {
    loadCharacter();
  }, [])

  const loadCharacter = async () => {
    const storedCharacter = await Storage.get<Character>('GoalGoblin_userCharacter');
    setUser(storedCharacter || null);
  }

  return (
    <>
      <QuestWindow/>
      {user?.name}
      {user? null : <CharacterCreator setCharacter={setUser} />}
    </>
  )
}

export default App
