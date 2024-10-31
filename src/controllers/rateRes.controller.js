import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const rateResByRes = async (req, res) => {
  try {
    let { res_id } = req.params;
    let rateRes = await model.rate_res.findAll({
      where: {
        res_id,
      },
    });
    return res.status(200).json(rateRes);
  } catch (error) {
    return res.status(500).json({ message: "Error for API get " });
  }
};

const rateResByUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let rateRes = await model.rate_res.findAll({
      where: {
        user_id,
      },
    });
    return res.status(200).json(rateRes);
  } catch (error) {
    return res.status(500).json({ message: "Internal server" });
  }
};

const createRateRes = async (req, res) => {
  try {
    let { user_id, res_id, amount, date_rate } = req.body;
    await model.rate_res.create({
      user_id,
      res_id,
      amount,
      date_rate,
    });
  } catch (error) {
    return res.status(500).json({ message: "Create rateRes fail" });
  }
  res.status(200).json({ message: "Create rateRes Successfully" });
};

export { rateResByRes, rateResByUser, createRateRes };
