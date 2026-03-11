import { Card, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

function QuizCard() {
  return (
    <>
      <section className="wrapper my-10">
        <h2 className="h2-bold mb-4">Quiz</h2>
        <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="w-full max-w-sm">
            <CardHeader className="p-0 items-center">
              <Link href="/quiz">To Quiz</Link>
            </CardHeader>
          </Card>
        </div>
      </section>
    </>
  );
}

export default QuizCard;
