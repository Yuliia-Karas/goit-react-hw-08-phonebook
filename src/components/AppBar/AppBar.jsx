import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBarContainer } from './AppBar.styled';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <AppBarContainer>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarContainer>
  );
}
