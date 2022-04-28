import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterModel, CharacterSnapshot } from "../character/character"


export const CharacterStoreModel = types
  .model("CharacterStore")
  .props({
    characters: types.optional(types.array(CharacterModel), []),
  })
  .actions((self) => ({
    saveCharacters: (characterSnapshots: CharacterSnapshot[]) => {
      self.characters.replace(characterSnapshots)
    },
  }))

type CharacterStoreType = Instance<typeof CharacterStoreModel>
export interface CharacterStore extends CharacterStoreType {}
type CharacterStoreSnapshotType = SnapshotOut<typeof CharacterStoreModel>
export interface CharacterStoreSnapshot extends CharacterStoreSnapshotType {}
export const createCharacterStoreDefaultModel = () => types.optional(CharacterStoreModel, {})
