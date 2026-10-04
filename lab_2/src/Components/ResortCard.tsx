interface ResortCardProps{
    image: string
    ProductName: string
    Location: string
    Ratings: number
    Price: number
}
export default function ResortCard(props: ResortCardProps){
    return <div className="ResortCard">
        <img src={props.image} alt=""/>
        <h2>{props.ProductName}</h2>
        <h3>{props.Location}</h3>
        <h3 style={{color: props.Ratings > 4.0 ? "green" : "red"}}>{props.Ratings}★</h3>
        <p>${props.Price}/night</p>

    </div>
}