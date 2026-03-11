import { Button } from '@/components/ui/button';

function Hero() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="wrapper max-w-6xl mx-auto px-4 my-10">
        <h1 className="text-5xl font-bold text-center">
          Welcome to My Hero Section
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          This is a full-width hero with a centered wrapper.
        </p>
        {/* <Button>Get Started</Button> */}
        {/* <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"></button> */}
      </div>
    </section>
  );
}

export default Hero;
