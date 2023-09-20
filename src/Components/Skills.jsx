import { SKILL_LIST } from '../consts.js'
import { CalculateModifier, CalculateMaximumNumberOfSkillPoints } from '../BusinessRules/Attributes.js'

export const Skills = ({ index, characterAttributeList, characterSkillList, usedPoints, onSkillChange }) => {
  return (
    <div className='flex flex-col'>
      <h2 className='text-center font-bold text-xl mb-2'>Skills:</h2>
      <span className='text-sm text-teal-300 mb-2 text-center'>
        (Used {usedPoints} of {CalculateMaximumNumberOfSkillPoints(characterAttributeList)} points)
      </span>
      {SKILL_LIST.map((skill) => (
        <div key={skill.name} className='grid grid-cols-3 mb-4'>
          <div>
            <div>
              {skill.name}: {characterSkillList[skill.name]}
            </div>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <button
              className='text-center w-6 h-6 mr-2 bg-white text-black'
              onClick={() => onSkillChange(index, skill.name, 'down')}
            >
              -
            </button>
            <button
              className='text-center w-6 h-6 bg-white text-black'
              onClick={() => onSkillChange(index, skill.name, 'up')}
            >
              +
            </button>
          </div>
          <div>
            <div>
              Modifier ({skill.attributeModifier}): {CalculateModifier(characterAttributeList[skill.attributeModifier])}{' '}
              Total:{' '}
              {characterSkillList[skill.name] + CalculateModifier(characterAttributeList[skill.attributeModifier])}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
