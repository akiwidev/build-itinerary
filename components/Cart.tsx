

const Cart = () => {
    return (
        <div className="w-64 p-4 bg-slate-50 opacity-90 rounded text-right flex flex-col justify-between">
            <div>
                <h3>Budget <span>$____________</span></h3>
                <h3>No. of people <span>____________</span></h3>
            </div>
            <button type="submit" className="rounded font-semibold p-2 w-max self-center transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-300 duration-300">Send itinerary</button>
        </div>
    )
}

export { Cart }