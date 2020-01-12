const orm = require("../config/orm");

let burger = {
  selectAll: () => {
    return orm.selectAll("burgers");
  },
  //  The variables cols and vals are arrays.

  insertOne: burgerName => {
    return orm.insertOne("burgers", "burger_name", burgerName);
  },
  updateOne: (updateObject, id) => {
    return orm.updateOne("burgers", updateObject, id);
  }
};

// Export the database functions for the controller(burgers_controller.js).

module.exports = burger;
