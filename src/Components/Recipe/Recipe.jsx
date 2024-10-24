import PropTypes from 'prop-types';

const Recipe = ({recipe,orderBtn}) => {
    const{recipe_image,calories,preparing_time,
        ingredients,short_description,recipe_name,
        } = recipe;
    
    return (
        <div>
            {/* this is card import from daisy Ui */}
            <div className="card bg-base-100 shadow-xl p-5 border space-y-5">
                <figure>
                    <img className='w-2/3 rounded-sm'
                    src={recipe_image}
                    alt="Shoes" />
                </figure>
                 <div>
                    <h4 className="text-2xl font-bold">{recipe_name}</h4>
                    <p>{short_description}</p>
                    <p className='text-xl'>
                        Ingredients:{
                            ingredients.length
                        }
                    </p>
                    <ul>
                            {
                                ingredients.map((li,idx) =><li className='ml-5 list-disc' key={idx}>{li}</li>)
                            }
                     </ul>
                     <div className='my-3 flex justify-between'>
                        <p className='font-semibold'>{preparing_time}</p>
                        <p className='font-semibold'>{calories}</p>
                     </div>
                     <button onClick={() => orderBtn(recipe)} className='btn-lg bg-green-400 rounded-md text-xl font-bold'>Want to order</button>
                 </div>
                </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe :PropTypes.object,
    orderBtn :PropTypes.func
};

export default Recipe;