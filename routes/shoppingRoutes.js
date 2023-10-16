const { Router } = require("express");
const router = Router();

const shoppingList = [
  {
    id: 1,
    item: "rice",
    price: 5000,
  },
  {
    id: 2,
    item: "beans",
    price: 3000,
  },
  {
    id: 3,
    item: "yam",
    price: 4500,
  },
];

router
  .route("/items")
  .get((req, res) => res.json(shoppingList))
  .post((req, res) => {
    shoppingList.push(req.body);
    return res.json({ message: "Added" });
  });

router
  .route("/items/:id")
  .get((req, res) => {
    const { id } = req.params;
    const shopItem = shoppingList.find((item) => item.id === +id);
    return res.send(shopItem);
  })
  .patch((req, res) => {
    const { id } = req.params;
    const shopItem = shoppingList.find((item) => item.id === +id);
    shopItem.item = req.body.item;
    return res.json({ message: "Updated" });
  })
  .delete((req, res) => {
    const { id } = req.params;
    const itemIndex = shoppingList.findIndex((item) => item.id === +id);
    shoppingList.splice(itemIndex, 1);
    return res.json({ message: "Deleted" });
  });

module.exports = router;
