import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import SharedLayout from './SharedLayout/SharedLayout';

import Container from '@mui/material/Container';
import { PrivateRoute } from './PrivateRoute';



export default function App() {
  return (
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
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
  );
}
