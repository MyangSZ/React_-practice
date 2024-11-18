import { Link, useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp"


function Search() {
    const [searchParams] = useSearchParams()
    const param = searchParams.get("animal")
    const reg = getRegExp(param)

    const filteredData = data.filter((el) => el.name.match(reg))
    return (
    <ul>
    {filteredData.map(el => (<li key={el.id}>
        <Link to={`/detail/${el.id}`}>
        <div>{el.name}</div>
        <img src={el.img} />
        </Link>
    </li>
))}
    </ul>
    )
}

export default Search;