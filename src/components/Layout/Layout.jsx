import {  Outlet } from "react-router-dom";
import { Container, List, LayoutLink } from "./Layout.styled";


const Layout = () => {
    return (
        <Container>
    <List>
          
            <li>
              <LayoutLink  to="/">Home</LayoutLink >
            </li>
            <li>
        <LayoutLink to="/movies">Movies</LayoutLink >
        </li>
            
        </List>
        <main>
        <Outlet />
      </main>
            </Container>);
}
export default Layout;