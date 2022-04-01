const Entity = require("../db/db").entity;

const getAllEntitys = async (req, res) => {
  try {
    const entitys = await Entity.findAll();
    return res.status(200).send(entitys);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createEntity = async (req, res) => {
  try {
    const entity = await Entity.create(req.body);
    return res.status(201).send(entity);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateEntity = async (req, res) => {
  const body = req.body;
  if (body.hasOwnProperty("id")) {
    Entity.update(body, {
      where: {
        id: body.id,
      },
    });
    res.send(body);
  } else {
    res.status(422).send("Error! Params not correct");
  }
};

const deleteEntity = async (req, res) => {
  const id = req.query.id;
  if (id) {
    Entity.destroy({
      where: {
        id: id,
      },
    })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
  } else {
    res.status(422).send("Error! Params not correct");
  }
};

module.exports = {
  getAllEntitys,
  createEntity,
  updateEntity,
  deleteEntity,
};
