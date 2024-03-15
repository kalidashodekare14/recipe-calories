const Cart = ({ cart, count, handleDelete, shows }) => {
    console.log(cart)
    return (
        <div className="">
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
                                        <th className="text-[16px] text-[#000000b4] font-semibold">{index + 1}</th>
                                        <td className="text-[16px] text-[#000000b4] font-semibold">{item.name}</td>
                                        <td className="text-[16px] text-[#000000b4] font-semibold">{item.time}</td>
                                        <td className="text-[16px] text-[#000000b4] font-semibold">{item.calories}</td>
                                        <div>
                                            <button onClick={() => handleDelete(item, item)} className="btn bg-[#0BE58A]">Preparing</button>
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

                            {
                                shows.map((item, index) => (
                                    <tr key={item.id}>
                                        <th className="text-[16px] text-[#000000b4] font-semibold">{index + 1}</th>
                                        <td className="text-[16px] text-[#000000b4] font-semibold">{item.name}</td>
                                        <td className="text-[16px] text-[#000000b4] font-semibold">{item.time}</td>
                                        <td className="text-[16px] text-[#000000b4] font-semibold">{item.calories}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="flex justify-end gap-3 mx-">
                        <div>
                            <p className="text-[16px] text-[#000000b4] font-semibold">Total Time =
                                <br />
                                45 minutes
                                {
                                    cart.reduce((p,c)=> p+c.time,0)
                                }
                                </p>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#000000b4] font-semibold">Total Calories =
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