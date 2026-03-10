import Hero from '@/components/shared/hero/hero';

// const delay = (ms) => new Promise((resolve) => setInterval(resolve, ms));

export const metadata = {
  title: 'Home',
};

function HomePage() {
  // await delay(2000);
  // console.log(sampleData);
  return (
    <>
      <Hero />
    </>
  );
}

export default HomePage;
