import { useState } from 'react'
import { CLASS_LIST } from '../consts.js'
import { CheckClassRequirementsFulfillment } from '../BusinessRules/Classes.js'

export const Classes = ({ characterAttributeList }) => {
  const [showRequirements, setShowRequirements] = useState(null)
  return (
    <div className='flex flex-col w-60'>
      <h2 className='text-center font-bold text-xl mb-2'>Classes:</h2>
      {Object.keys(CLASS_LIST).map((className) => (
        <div className='flex flex-col text-left' key={className}>
          <div>
            {className}{' '}
            <span className={!CheckClassRequirementsFulfillment(className, characterAttributeList) ? 'hidden' : ''}>
              ✅
            </span>
          </div>
          <button onClick={() => setShowRequirements(className)} className='text-sm mb-4 text-left'>
            (Show Requirements)
          </button>
        </div>
      ))}
      {showRequirements && (
        <div className='text-center mt-5 border border-orange-300'>
          <h3 className='text-orange-300 text-lg'>{showRequirements}</h3>
          <div className='text-orange-300 pb-2 border-b border-orange-300'>Attributes Requirements</div>
          <div className='mt-4'>
            {Object.entries(CLASS_LIST[showRequirements]).map(([attribute, value]) => (
              <div key={attribute}>
                {attribute}: {value}
              </div>
            ))}
          </div>
          <button
            className='bg-orange-200 w-full text-black mt-4 hover:bg-orange-400'
            onClick={() => setShowRequirements(null)}
          >
            ❌Close
          </button>
        </div>
      )}
    </div>
  )
}
