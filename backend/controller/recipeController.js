const Recipes=require("../models/recipeModel")


const getRecipes = async (req,res)=>{
    const recipes = await Recipes.find()
    return res.json(recipes)
}

const getRecipe = async (req,res)=>{
    const recipe=await Recipes.findById(req.params.id)
    return res.json(recipe)
}

const adddRecipe = async (req,res)=>{
    const {title,ingredients,instructions,time}=req.body

    if(!title || !ingredients || !instructions){
        res.json({message:"Please enter all Required Fields"});
    }
    const newRecipe= await Recipes.create({
        title,
        ingredients,
        instructions,
        time
    })
    return res.status(200).json({recipe:newRecipe})
}

const editRecipe = async (req,res)=>{
    const {title,ingredients,instructions,time}=req.body
    let recipe=await Recipes.findById(req.params.id)
    try{
        if(!recipe){
        await Recipes.findByIdAndDelete(req.params.id,req.body,{new:true})
        res.json({title,ingredients,instructions,time})
        }
    }catch(err){
        return res.status(404).json({message:"Error in Updating Recipe"})
    }
}

const deleteRecipe = (req,res)=>{
    res.json({message:"Hello World"})
}

module.exports={getRecipes,getRecipe,adddRecipe,editRecipe,deleteRecipe}