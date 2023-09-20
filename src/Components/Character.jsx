import { AttributeList } from './AttributeList'
import { Classes } from './Classes'
import { Skills } from './Skills'

export const Character = ({ character, index, handleAttributeChange, handleSkillChange }) => {
  return (
    <div className='flex justify-center border mb-4 p-4'>
      <AttributeList
        index={index}
        characterAttributeList={character.attributes}
        usedPoints={character.totalAttributesUsedPoints}
        onAttributeChange={handleAttributeChange}
      />
      <Classes characterAttributeList={character.attributes} />
      <Skills
        index={index}
        characterAttributeList={character.attributes}
        characterSkillList={character.skills}
        usedPoints={character.totalSkillUsedPoints}
        onSkillChange={handleSkillChange}
      />
    </div>
  )
}
