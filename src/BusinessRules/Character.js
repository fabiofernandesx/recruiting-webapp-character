import { ATTRIBUTE_LIST, SKILL_LIST } from '../consts.js'
const initialAttributeValue = 10
const initialSkillValue = 0

export function GenerateStartCharacterSheet() {
  const attributes = ATTRIBUTE_LIST.reduce(
    (acc, attribute) => ({
      ...acc,
      [attribute]: initialAttributeValue,
    }),
    {}
  )
  const skills = SKILL_LIST.reduce(
    (acc, { name }) => ({
      ...acc,
      [name]: initialSkillValue,
    }),
    {}
  )
  return {
    attributes,
    skills,
    totalAttributesUsedPoints: 60,
    totalSkillUsedPoints: 0,
  }
}

export function CalculateUsedPoints(character) {
  const totalAttributesUsedPoints = Object.values(character.attributes).reduce((acc, val) => acc + val, 0)
  const totalSkillUsedPoints = Object.values(character.skills).reduce((acc, val) => acc + val, 0)
  return { ...character, totalAttributesUsedPoints, totalSkillUsedPoints }
}
