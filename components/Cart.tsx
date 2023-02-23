

const Cart = () => {
    return (
        <div className="shrink-0 w-64 p-4 bg-slate-50 opacity-90 rounded text-right flex flex-col justify-between">
            <div>
                <h3>Budget <span>$____________</span></h3>
                <h3>No. of people <span>____________</span></h3>
            </div>
            <button type="submit" className="rounded text-black font-semibold p-2 w-max self-center transition ease-in-out delay-100 bg-rose-400 hover:scale-110 hover:bg-orange-200 duration-300">Send itinerary</button>
        </div>
    )
}

export { Cart }