export const findCharacterWithMap = (text: string, character: string) => {

    const arrCharacters: string[] = text.toLowerCase().split("")
    let index: number[] = []

    arrCharacters.map((element, idx) => {
        if (element === character.toLowerCase()) {
            index.push(idx)
        }
    })
    return {
        Found: index.length,
        Index: index
    }
}
