import { useEffect, useState } from 'react'
import './App.css'
import { Storage } from './storage'
import { Character } from './types/Character'
import Adventure from './components/AdventureWindow'
import CharacterCreator from './pages/CharacterCreator'
import CharacterView from './pages/CharacterView'

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
      <Adventure/>
      {user? <CharacterView character={user} /> : <CharacterCreator setCharacter={setUser} />}
    </>
  )
}

export default App
