import '../../App.css'
const Cart = ({ cart, count, handleDelete, shows, count2 }) => {
    console.log(cart)
    return (
        <div className="">
            <div className="border lg:p-3 rounded-2xl">
                <div className="overflow-x-auto space-y-3">
                    <h1 className="text-2xl text-[#000000c4] text-center font-semibold fonts-lexend">Want to cook: {count}</h1>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-[16px] fira-sans">Name</th>
                                <th className="text-[16px] fira-sans">Time</th>
                                <th className="text-[16px] fira-sans">Calories</th>
                            </tr>
                        </thead>
                        <tbody className="m-5">
                            {/* row 1 */}

                            {
                                cart.map((item, index) => (
                                    <tr className="bg-[#F8F8F8]" key={item.id}>
                                        <th className="text-[16px] text-[#0000008d] font-semibold fira-sans">{index + 1}</th>
                                        <td className="text-[16px] text-[#0000008d] font-semibold fira-sans">{item.name}</td>
                                        <td className="text-[16px] text-[#0000008d] font-semibold fira-sans">{item.time} minutes</td>
                                        <td className="text-[16px] text-[#0000008d] font-semibold fira-sans">{item.calories} calories</td>
                                        <div className="mt-2">
                                            <button onClick={() => handleDelete(item, item)} className="btn p-0 p-1 bg-[#0BE58A] fonts-lexend">Preparing</button>
                                        </div>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
                <div className="overflow-x-auto space-y-3 mt-5">
                    <h1 className="text-2xl text-[#000000c4] text-center font-semibold fonts-lexend">Currently cooking: {count2}</h1>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-[16px] ">Name</th>
                                <th className="text-[16px] ">Time</th>
                                <th className="text-[16px] ">Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                shows.map((item, index) => (
                                    <tr className="bg-[#F8F8F8]" key={item.id}>
                                        <th className="text-[16px] text-[#000000b4] font-semibold">{index + 1}</th>
                                        <td className="text-[16px] text-[#000000b4] font-semibold">{item.name}</td>
                                        <td className="text-[16px] text-[#000000b4] font-semibold">{item.time} minutes</td>
                                        <td className="text-[16px] text-[#000000b4] font-semibold">{item.calories} calories</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="flex justify-end gap-10">
                        <div>
                            <p className="text-[16px] text-[#000000b4] font-semibold">Total Time = {
                                    shows.reduce((p,c)=> p+c.time,0)
                                } <br /> minutes
                                </p>
                        </div>
                        <div className="mr-11">
                            <p className="text-[16px] text-[#000000b4] font-semibold">Total Calories =
                            {
                                shows.reduce((p,c)=> p+c.calories,0)
                            } <br /> calories</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;