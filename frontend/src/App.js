import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import OrderScreen from './screens/OrderScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import AboutScreen from './screens/AboutScreen';
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SearchScreen from './screens/SearchScreen';
import Footer from './components/footer/Footer';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
      >
        <ToastContainer position="top-right" limit={3} />
        <header>
          <Navbar className="navbar-Cl" variant="dark" expand="lg">
            <Container>
              <Button
                style={{
                  marginRight: 15,
                }}
                className="buttonSide"
                variant="outline-light"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>{' '}
              <LinkContainer to="/">
                <Navbar.Brand>Funky-Jewels</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox />
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown
                      title={userInfo.name}
                      id="basic-nav-dropdown"
                      menuVariant="dark"
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item drop-menu"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Login/Register
                    </Link>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown
                      title="Admin"
                      id="admin-nav-dropdown"
                      menuVariant="dark"
                    >
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/productlist">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orderlist">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/userlist">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/userlist"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/productlist"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/orderlist"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
