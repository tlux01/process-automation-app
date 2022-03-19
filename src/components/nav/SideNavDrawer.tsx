import SideNavLink from "./SideNavLink";
import AirIcon from "@mui/icons-material/Air";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import StairsIcon from "@mui/icons-material/Stairs";
import { Authenticator } from "@aws-amplify/ui-react";
function SideNavDrawer() {
  return (
    <div className="w-64 rounded-r-sm bg-white">
      <div className="title-container p-2">
        <h6 className="m-0">Process Automation Tool</h6>
      </div>
      <SideNavLink name="Home" route="/" icon={<HomeIcon />} />
      <SideNavLink name="Customers" route="customers" icon={<PeopleIcon />} />
      <SideNavLink name="Workflows" route="workflows" icon={<AirIcon />} />
      <SideNavLink name="Steps" route="steps" icon={<StairsIcon />} />
      <SideNavLink name="Templates" route="templates" icon={<ArticleIcon />} />
      <Authenticator>
        {({ signOut, user }) => <button onClick={signOut}>Sign out</button>}
      </Authenticator>
    </div>
  );
}

export default SideNavDrawer;
