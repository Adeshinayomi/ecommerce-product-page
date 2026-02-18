import deleteIcon from "../assets/images/icon-delete.svg"
export function Cart({cart,deleteItem}){

    const deletecart=()=>{
        deleteItem()
    }

    const total=cart.price * cart.quantity

    return (
        <div className="px-4 py-2 grid gap-4">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src={cart.image} alt="product-image" width={50} className="rounded-lg"/>
                    <h2 className="grid text-sm text-Grayishblue">
                        {cart.name}
                        <span>${cart.price} x {cart.quantity} <strong>${total}</strong></span>
                    </h2>
                </div>
                <button onClick={deletecart}>
                    <img src={deleteIcon} alt="delete-icon" />
                </button>
            </div>
            <button className="bg-Orange py-2 text-balck text-md rounded-lg">Checkout</button>
        </div>
    )
}