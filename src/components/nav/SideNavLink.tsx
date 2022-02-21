import { Link } from "react-router-dom";

function SideNavLink(props: { name: string; route: string; icon: any }) {
  return (
    <div className="w-auto">
      <Link to={props.route} className="nav-link align-self-center">
        <div className="flex">
          {props.icon}
          <span>{props.name}</span>
        </div>
      </Link>
    </div>
  );
}

export default SideNavLink;
