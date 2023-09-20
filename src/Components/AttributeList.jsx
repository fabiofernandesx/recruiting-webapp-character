import React from 'react'
import { ATTRIBUTE_LIST } from '../consts.js'
import { CalculateModifier, MaximumNumberOfPoints } from '../BusinessRules/Attributes.js'

export const AttributeList = ({ index, characterAttributeList, usedPoints, onAttributeChange }) => {
  return (
    <div className='flex flex-col w-56'>
      <h2 className='text-center font-bold text-xl'>Attributes:</h2>
      <span className='text-sm text-teal-300 mb-2 text-center'>
        (Used {usedPoints} of {MaximumNumberOfPoints} points)
      </span>
      {ATTRIBUTE_LIST.map((attribute) => (
        <div key={attribute} className='grid grid-cols-2 mb-4'>
          <div>
            <div>
              <span>{attribute} : </span>
              <span className='text-lg font-semibold'>{characterAttributeList[attribute]}</span>
            </div>
            <span className='text-sm'>Modifier ({CalculateModifier(characterAttributeList[attribute])}) </span>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <button
              className='text-center w-6 h-6 mr-2 bg-white text-black'
              onClick={() => onAttributeChange(index, attribute, 'down')}
            >
              -
            </button>
            <button
              className='text-center w-6 h-6 bg-white text-black'
              onClick={() => onAttributeChange(index, attribute, 'up')}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
