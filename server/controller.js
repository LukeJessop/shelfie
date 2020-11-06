
const productInv = []
module.exports={
    getInv: (req, res) => {
        return res.status(200).send(productInv)
    },
    addToInv: (req, res) => {
        const {id} = req.params;
        const item = cards.find((card) => card.id === +id)

        personalInventory.push(item)

        return res.status(200).send(productInv)
    }
}