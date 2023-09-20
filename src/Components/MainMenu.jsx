import React from 'react'

export const MainMenu = ({ onReset, onSave, onAddChar }) => {
  return (
    <nav className='flex gap-2'>
      <button
        className='inline-flex items-center p-2
           justify-center bg-gray-100 shadow hover:bg-gray-300'
        onClick={() => {
          onAddChar()
        }}
      >
        Add new Character
      </button>
      <button
        className='inline-flex items-center p-2
           justify-center bg-gray-100 shadow hover:bg-gray-300'
        onClick={() => {
          onSave()
        }}
      >
        Save all Characters
      </button>
      <button
        className='inline-flex items-center p-2
           justify-center bg-gray-100 shadow hover:bg-gray-300'
        onClick={() => {
          onReset()
        }}
      >
        Reset the board
      </button>
    </nav>
  )
}
