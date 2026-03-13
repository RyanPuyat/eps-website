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
            <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl h2-bold text-primary transition-all hover:translate-y-0.5 md:block dark:border-white mr-2">
              E
            </p>
          </Link>
          <h2 className="h2-bold text-primary">PS CORNER</h2>
        </div>

        <Menu />
      </div>
    </div>
  );
}

export default Header;
