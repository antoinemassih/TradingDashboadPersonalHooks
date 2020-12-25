
import {Link} from "react-router-dom";


export default function NavRouterButton(props) {

    return (
        <Link to={props.link}>
            <a href="#" className="TD-btn-nav">{props.title}</a>
        </Link>
    );
}