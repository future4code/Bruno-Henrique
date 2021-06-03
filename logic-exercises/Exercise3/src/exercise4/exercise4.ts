export const houseRobbery = (
    thiefList: number[],
    listOfHouses: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
): number | string => {

    const lastHouse: number = listOfHouses.length - 1
    let money: number = 0
    let house: number = 0

    money = thiefList.reduce((acc, value) => {
        console.log(value);
        
        if (value > lastHouse) {
            return 0
        }
        if (acc === 0) {
            house = value - 1
            acc = listOfHouses[house]
        } else if (Math.abs((value - 1) - house) !== 1 && acc >= 0) {
            house = value - 1
            acc += listOfHouses[house]
        } else {
            acc = -1
        }

        return acc
    }, 0)

    if (money < 0) {
        return "Alarme foi acionado!"
    }

    return money > 0 ? money : "Lista de assalto errada"
}