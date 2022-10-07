const createWoodBlock = () => {
    // Return an object with 4 properties.
    const woodObject = {
            wood: "Mahogany",
            maker: "Bob",
            weight: 45.6,
            shape: "Dragon"

    }

    return woodObject


}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    const stringRep = `${woodObject.maker} carved this beautiful ${woodObject.wood} ${woodObject.shape}, weighing in at ${woodObject.weight}lbs.`

    return stringRep
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)