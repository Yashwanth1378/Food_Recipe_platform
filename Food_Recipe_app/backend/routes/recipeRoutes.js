const express=require("express");
const { getRecipes,getRecipe,adddRecipe,editRecipe,deleteRecipe } = require("../controller/recipeController");
const router=express.Router()

router.get("/",getRecipes)
router.get("/:id",getRecipe)
router.post("/",adddRecipe)
router.put("/:id",editRecipe)
router.delete("/:id",deleteRecipe)

module.exports=router;