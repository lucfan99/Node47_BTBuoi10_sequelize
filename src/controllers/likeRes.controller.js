import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const likeResByResId = async (req, res) => {
  try {
    let { res_id } = req.params;
    let likeRes = await model.like_res.findAll({
      where: {
        res_id,
      },
    });
    return res.status(200).json(likeRes);
  } catch (error) {
    return res.status(500).json({ message: "call api likeRes by res fail" });
  }
};

const likeResByUserId = async (req, res) => {
  try {
    let { user_id } = req.params;
    let likeRes = await model.like_res.findAll({
      where: {
        user_id,
      },
    });
    return res.status(200).json(likeRes);
  } catch (error) {
    return res.status(500).json({ message: "Call API likeRes by user fail" });
  }
};

const likeRes = async (req, res) => {
  try {
    let { user_id, res_id, date_like } = req.body;
    await model.like_res.create({
      user_id,
      res_id,
      date_like,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Create likeRes fail" });
  }
  res.status(200).json({ message: "Create likeRes successfully" });
};

const dislikeRes = async (req, res) => {
  try {
    let { user_id, res_id } = req.params;
    // const deleteOrder =
    await model.like_res.destroy({
      where: {
        user_id,
        res_id,
      },
    });
    // if (!deleteOrder) {
    //   return res.status(404).json({
    //     message: "Like record not found",
    //   });
    // }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Call API dislikeRes fail" });
  }

  return res.status(200).json({ message: "Delete likeRes successfully" });
};

export { likeResByResId, likeResByUserId, likeRes, dislikeRes };
