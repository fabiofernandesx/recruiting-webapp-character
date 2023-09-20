import { CalculateMaximumNumberOfSkillPoints } from './Attributes'
const MaximumPointsExceededErrorMessage = 'Total of skill points used'
const IncrementStepSize = 1

export function SkillAdjustement(data, index, skill, direction) {
  ValidateChange(data, index, direction)
  const newList = [...data]
  const previousValue = newList[index].skills[skill]
  if (direction === 'up') {
    newList[index].skills[skill] += IncrementStepSize
    newList[index].totalSkillUsedPoints += IncrementStepSize
  } else {
    newList[index].skills[skill] = previousValue <= 0 ? 0 : previousValue - IncrementStepSize
    newList[index].totalSkillUsedPoints -= IncrementStepSize
  }
  return newList
}

function ValidateChange(data, index, direction) {
  const maximumNumberOfPoints = CalculateMaximumNumberOfSkillPoints(data[index].attributes)
  if (direction === 'up' && data[index].totalSkillUsedPoints >= maximumNumberOfPoints)
    throw new Error(MaximumPointsExceededErrorMessage)
}
