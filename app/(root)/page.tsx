import { Button } from '@/components/ui/button';

// const delay = (ms) => new Promise((resolve) => setInterval(resolve, ms));

export const metadata = {
  title: 'Home',
};

function HomePage() {
  // await delay(2000);
  return (
    <>
      <div className="text-blue-600">Eps Website</div>
      <Button>Green Button</Button>
    </>
  );
}

export default HomePage;
