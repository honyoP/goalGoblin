import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Storage } from './storage'
import { Character } from './types/Character'

function App() {
  const [user, setUser] = useState<Character | null>(null);
  const [count, setCount] = useState(0)

  const character: Character = {
    dexterity: 12,
    experience: 0,
    health: 15,
    intelligence: 10,
    level: 1,
    mana: 15,
    name: "Tadeas",
    shekels: 0,
    skill_points: 0,
    stamina: 15,
    strength: 15,
    total_items_earned: 0,
    total_monsters_slain: 0,
    total_quests_done: 0,
    total_shekels_earned: 0,
    total_time_spent: "",
    vitality: 10,
  }

  useEffect(() => {
    if(user)
    {
      handleUpload(user);
    } else {
      handleUpload(character)
      loadCharacter();
    }
  }, [])

  const handleUpload = async (character: Character) => {
    if (character) {
      try {
        await Storage.set('GoalGoblin_userCharacter', character);
      } catch (error) {
        console.error('Invalid JSON file:', error);
      }
    }
  }

  const loadCharacter = async () => {
    const storedCharacter = await Storage.get<Character>('GoalGoblin_userCharacter');
    setUser(storedCharacter || null);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {user?.name}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
