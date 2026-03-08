import Logo from './logo';
import Menu from './menu';
function Header() {
  return (
    <div className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Logo />
        </div>

        <Menu />
      </div>
    </div>
  );
}

export default Header;
