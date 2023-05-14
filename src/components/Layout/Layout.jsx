import { Link, Outlet } from "react-router-dom";
import { List } from "./Layout.styled";


const Layout = () => {
    return (
        <div>
    <List>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        
            </nav>
        </List>
        <main>
        <Outlet />
      </main>
            </div>);
}
export default Layout;