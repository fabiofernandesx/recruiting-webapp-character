export const MaximumNumberOfPoints = 70
const MaximumPointsExceededErrorMessage = 'Maximum of points already used'
const IncrementStepSize = 1
const ModifierThreshold = 10
const ModifierStepSize = 2

export function AttributesAdjustement(data, index, attribute, direction) {
  ValidateChange(data, index, direction)
  const newList = [...data]
  const previousValue = newList[index].attributes[attribute]
  if (direction === 'up') {
    newList[index].attributes[attribute] += IncrementStepSize
    newList[index].totalAttributesUsedPoints += IncrementStepSize
  } else {
    newList[index].attributes[attribute] = previousValue <= 0 ? 0 : previousValue - IncrementStepSize
    newList[index].totalAttributesUsedPoints -= IncrementStepSize
  }
  return newList
}

function ValidateChange(data, index, direction) {
  if (direction === 'up' && data[index].totalAttributesUsedPoints >= MaximumNumberOfPoints)
    throw new Error(MaximumPointsExceededErrorMessage)
}

export function CalculateModifier(attributeValue) {
  return Math.floor((attributeValue - ModifierThreshold) / ModifierStepSize)
}

export function CalculateMaximumNumberOfSkillPoints(attributes) {
  return 10 + 4 * CalculateModifier(attributes['Intelligence'])
}
