// import Logo from './logo';
import Link from 'next/link';
import Menu from './menu';
function Header() {
  return (
    <div className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          {/* <Logo /> */}
          <Link href="/">
            <p className="rounded-lg border border-b-4 border-r-4 border-primary px-2 py-1 text-xl h2-bold text-primary transition-all hover:scale-105 md:block dark:border-primary mr-2">
              EPS Corner
            </p>
          </Link>
        </div>

        <Menu />
      </div>
    </div>
  );
}

export default Header;
