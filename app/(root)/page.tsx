import Hero from '@/components/shared/hero/hero';
import QuizCard from '@/components/shared/quiz/quiz-card';

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
      <QuizCard />
    </>
  );
}

export default HomePage;
