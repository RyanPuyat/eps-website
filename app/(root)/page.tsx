import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Home',
};

function HomePage() {
  return (
    <>
      <div className="text-blue-600">Eps Website</div>
      <Button variant="success">Green Button</Button>
    </>
  );
}

export default HomePage;
