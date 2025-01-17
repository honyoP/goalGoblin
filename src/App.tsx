import { useEffect, useState } from 'react'
import './App.css'
import { Storage } from './storage'
import { Character } from './types/Character'
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
      {user?.name}
      {user? null : <CharacterCreator />}
    </>
  )
}

export default App
