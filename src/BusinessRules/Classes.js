import { CLASS_LIST } from '../consts.js'

export function CheckClassRequirementsFulfillment(className, characterAttributeList) {
  const characterAttributes = Object.keys(characterAttributeList)
  for (const attribute of characterAttributes) {
    if (characterAttributeList[attribute] < CLASS_LIST[className][attribute]) return false
  }
  return true
}
