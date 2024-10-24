import { useState } from "react";
import Order from "./Components/Orders/Order"
import Recipes from "./Components/recipes/Recipes"

function App() {
  const [orderCart,setorderCart] = useState([]);
  const[prepared,setprepared] = useState([]);
  const orderBtn = (recipe) =>{
    const isExist = orderCart.find(
      previousCart => previousCart.recipe_id === recipe.recipe_id
    )
    isExist ? alert('this recipe is already added')
      : setorderCart([...orderCart,recipe]);
  }

  // remove prepared
  const handleRemove = id => {
    const deletedRecipe = orderCart.find(recipe => recipe.recipe_id === id)
    // remove from want to cook 
    const updatedCart = orderCart.filter(recipe => recipe.recipe_id !== id)
    setorderCart(updatedCart);
    setprepared([...prepared,deletedRecipe]);
  }
  
  return (
    <>
      <main className="w-8/12 mx-auto mt-7">
        <div>
          <h2 className="text-4xl font-bold text-center mb-2">Our Recipes</h2>
          <p className="text-center">Our Most-Requested Recipe Tool Is Finally Here—And Its <br /> Going to Make Dinner So Much Easie</p>
        </div>
        <div className="flex flex-cols md:flex-row mt-5 gap-7">
          {/* its recipes section */}
            <Recipes orderBtn={orderBtn} ></Recipes>
          {/* this is order section */}
            <Order orderCart={orderCart} handleRemove={handleRemove} prepared={prepared}></Order>
        </div>
      </main>
    </>
  )
}

export default App
