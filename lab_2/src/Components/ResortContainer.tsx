import ResortCard from "./ResortCard"
import listings from "../data/data"
export default function ResortContainer() {
    return <div className="ResortContainer">
        {listings.map((resort) =>
            <ResortCard
                key={resort.id}
                image={resort.pic}
                ProductName={resort.country}
                Location={resort.location}
                Ratings={resort.rating}
                Price={resort.price}
            />
        )}    
    </div>
}