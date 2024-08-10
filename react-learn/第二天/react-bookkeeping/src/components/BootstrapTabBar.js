import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const BootstrapTabBar = () => {
    return (
        <Navbar className="tabbar">
            <Nav className="w-100">
                <LinkContainer to="/month">
                    {/* Nav.Link 组件根据当前的路由路径自动应用 active 类 */}
                    <Nav.Link className="nav-link">
                        <i className="bi bi-house"></i>
                        <div>Month</div>
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/new">
                    <Nav.Link className="nav-link">
                        <i className="bi bi-search"></i>
                        <div>New</div>
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/year">
                    <Nav.Link className="nav-link">
                        <i className="bi bi-bell"></i>
                        <div>Year</div>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
};

export default BootstrapTabBar;
