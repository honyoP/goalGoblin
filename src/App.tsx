import { useEffect, useState } from 'react'
import './App.css'
import { Storage } from './storage'
import { Character } from './types/Character'
import CharacterView from './pages/CharacterView'
import Adventure from './pages/AdventureWindow'
import { MemoryRouter as Router, Routes, Route } from 'react-router'
import CombatView from './pages/CombatView'
import { Enemy } from './types/Enemy'
import BackpackView from './pages/BackpackView'

function App() {
  const [user, setUser] = useState<Character | null>(null);
  const [enemy, setEnemy] = useState<Enemy | null>(null);

  useEffect(() => {
    loadCharacter();
  }, [])

  useEffect(() => {
    saveCharacter();
  }, [user])
  const saveCharacter = async () => {
    await Storage.set('GoalGoblin_userCharacter', user);
  }
  const loadCharacter = async () => {
    const storedCharacter = await Storage.get<Character>('GoalGoblin_userCharacter');
    setUser(storedCharacter || null);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<CharacterView character={user} setCharacter={setUser} />} />
        <Route path='/adventure' element={<Adventure setEnemy={setEnemy} />} />
        <Route path='/combat' element={<CombatView character={user!} enemy={enemy!} setCharacter={setUser}/>} />
        <Route path='/backpack' element={<BackpackView />} />
      </Routes>
    </Router>
  )
}

export default App
