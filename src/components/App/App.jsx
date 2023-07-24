import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import SharedLayout from '../SharedLayout/SharedLayout';

import Container from '@mui/material/Container';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              {/* <Route index element={<Home />} /> */}
              <Route
                index
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Home />}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Register />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Login />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Container>
      )}
    </>
  );
}
