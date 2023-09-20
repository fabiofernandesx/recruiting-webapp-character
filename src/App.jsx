import axios from 'axios'
import { useEffect, useState } from 'react'
import { MainMenu } from './Components/MainMenu.jsx'
import { GenerateStartCharacterSheet, CalculateUsedPoints } from './BusinessRules/Character.js'
import { AttributesAdjustement } from './BusinessRules/Attributes.js'
import { SkillAdjustement } from './BusinessRules/Skills.js'
import { Character } from './Components/Character.jsx'

function App() {
  const [characterList, setCharacterList] = useState([])
  const [ignoreData, setIgnoreData] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://recruiting.verylongdomaintotestwith.ca/api/fabiofernandesx/character`)
      .then(({ data }) => {
        if (data.message || ignoreData) {
          console.log('initial')
          setCharacterList([GenerateStartCharacterSheet()])
        } else {
          let characters = []
          data.body.characterList.forEach((char) => {
            characters.push(CalculateUsedPoints(char))
          })
          setCharacterList(characters)
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(setLoading(false))
  }, [ignoreData])

  async function handleSaveCharacters() {
    await axios
      .post(
        'https://recruiting.verylongdomaintotestwith.ca/api/fabiofernandesx/character',
        {
          characterList,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .catch((err) => console.log(err))
  }
  function handleAddCharacter() {
    const newChars = [...characterList]
    newChars.push(GenerateStartCharacterSheet())
    setCharacterList(newChars)
  }

  function handleAttributeChange(index, attribute, direction) {
    try {
      const newCharactersList = AttributesAdjustement(characterList, index, attribute, direction)
      setCharacterList(newCharactersList)
    } catch (error) {
      console.log(error.message)
    }
  }
  function handleSkillChange(index, skill, direction) {
    try {
      const newCharactersList = SkillAdjustement(characterList, index, skill, direction)
      setCharacterList(newCharactersList)
    } catch (error) {
      console.log(error.message)
    }
  }

  function handleReset() {
    setIgnoreData(true)
    setCharacterList([GenerateStartCharacterSheet()])
  }
  return (
    <div className='bg-zinc-900'>
      <nav className='bg-slate-900 p-2 flex items-center justify-between'>
        <div>
          <h1 className='text-white text-2xl font-semibold'>React Coding Exercise</h1>
          <span className='text-white text'>Fabio Fernandes</span>
        </div>
        <div>
          <MainMenu onReset={handleReset} onSave={handleSaveCharacters} onAddChar={handleAddCharacter} />
        </div>
      </nav>
      <main className='bg-zinc-900 text-white min-h-screen p-4 flex'>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div className='flex flex-col'>
            {characterList.map((character, index) => (
              <Character
                key={index}
                index={index}
                character={character}
                handleAttributeChange={handleAttributeChange}
                handleSkillChange={handleSkillChange}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
