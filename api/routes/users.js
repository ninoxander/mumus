const express = require("express");
const router = express.Router();
const db = require("../models"); 

router.get("/", async (req, res) => {
  try {
    const users = await db.usuarios.findAll(); 
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await db.usuarios.findByPk(req.params.id); 
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const newUser = await db.usuarios.create(req.body); 
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const [updated] = await db.usuarios.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ error: "Usuario no encontrado" });
    const updatedUser = await db.usuarios.findByPk(req.params.id);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deleted = await db.usuarios.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(204).send(); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
