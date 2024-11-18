import { Link } from "react-router-dom";
import { data } from "../assets/data/data"
//

function Main() {
    return <ul>
        {data.map(el => <li key={el.id}>
            <Link to={`/detail/${el.id}`}>
            <div>{el.name}</div>
            <img src={el.img} />
            </Link>
        </li>)}
        </ul>
}

export default Main;