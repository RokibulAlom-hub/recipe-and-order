import PropTypes from 'prop-types';

const Order = ({orderCart,handleRemove,prepared}) => {
    return (
        <div className='w-1/3 p-1 rounded-md border '>
            <div>
            <h2 className='text-2xl font-bold text-center'>Order foods : {orderCart.length}</h2>
            {/* this is order table */}
            <div className="divider"></div>
            <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead  className='font-bold text-gray-500'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody className='font-semibold text-gray-500 p-0'>
                            {
                                orderCart.map((recipe,index) =>(
                                <tr className='hover p-0' key={index}>
                                    <th className='p-0'>{index+1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                    <td><button onClick={() => handleRemove(recipe.recipe_id)
                                    } className=
                                    ' bg-green-400 rounded-md  font-bold'>Preparing
                                    </button></td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
            </div>
            </div>
            <div>
            <h2 className='text-2xl font-bold text-center'>Preparing : {prepared.length}</h2>
            {/* this is order table */}
            <div className="divider"></div>
            <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead  className='font-bold text-gray-500'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody className='font-semibold text-gray-500 p-0'>
                            {
                                orderCart.map((recipe,index) =>(
                                <tr className='hover p-0' key={index}>
                                    <th className='p-0'>{index+1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
            </div>
            </div>
        </div>
    );
};

Order.propTypes = {
    orderCart:PropTypes.object,
    handleRemove:PropTypes.func,
    prepared:PropTypes.object
};

export default Order;