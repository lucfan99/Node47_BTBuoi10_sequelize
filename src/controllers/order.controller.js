import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const order = async (req, res) => {
  try {
    let { food_id, user_id, amount, arr_sub_id } = req.body;
    await model.orders.create({ food_id, user_id, amount, arr_sub_id });
  } catch (error) {
    return res.status(500).json({ message: "Error API create order" });
  }
  res.status(200).json({ message: "Create new order successfully" });
};

export { order };
