const Cart = ({ cart, count }) => {
    console.log(cart)
    return (
        <div>
            <h1 className="text-4xl">Cart:</h1>
            <div className="border lg:p-3 rounded-2xl">
                <div className="overflow-x-auto space-y-3">
                    <h1 className="text-2xl text-center font-semibold">Want to cook: {count}</h1>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-[16px]">Name</th>
                                <th className="text-[16px]">Time</th>
                                <th className="text-[16px]">Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cart.map((item, index) => (
                                    <tr key={item.id}>
                                        <th className="text-[16px]">{index + 1}</th>
                                        <td className="text-[16px]">{item.name}</td>
                                        <td className="text-[16px]">{item.time}</td>
                                        <td className="text-[16px]">{item.calories}</td>
                                        <div>
                                            <button className="btn bg-[#0BE58A]">Preparing</button>
                                        </div>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
                <div className="overflow-x-auto">
                    <h1 className="text-2xl text-center font-semibold">Currently cooking: 02</h1>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-[16px]">Name</th>
                                <th className="text-[16px]">Time</th>
                                <th className="text-[16px]">Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th className="text-[16px]">1</th>
                                <td className="text-[16px]">Chiken Caesar Salad</td>
                                <td className="text-[16px]">20 minutes</td>
                                <td className="text-[16px]">400 calories</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-end gap-3 mx-">
                        <div>
                            <p className="text-[16px]">Total Time =
                                <br />
                                45 minutes</p>
                        </div>
                        <div>
                            <p className="text-[16px]">Total Calories =
                                <br />
                                1050 calories</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;