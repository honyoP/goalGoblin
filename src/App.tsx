import { useEffect, useState } from 'react'
import './App.css'
import { Storage } from './storage'
import { Character } from './types/Character'
import CharacterView from './pages/CharacterView'
import Adventure from './components/AdventureWindow'
import { MemoryRouter as Router, Routes, Route } from 'react-router'

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
    <Router>
      <Routes>
        <Route path='/' element={<CharacterView character={user} setCharacter={setUser} />} />
        <Route path='/adventure' element={<Adventure />} />
      </Routes>
    </Router>
  )
}

export default App
