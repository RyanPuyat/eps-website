import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

function QuizCard() {
  return (
    <>
      <section className="wrapper my-10">
        <h2 className="h2-bold mb-4">Quiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <Link href="/quiz" className="card-wrapper variant-rotate">
            <Card className="relative z-10 h-full w-full bg-background">
              <CardHeader className="h2-bold justify-items-center">
                <CardTitle>KLT EXAM</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This card now has a conic-gradient rotating behind it.</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/quiz" className="card-wrapper variant-rotate-alt">
            <Card className="relative z-10 h-full w-full bg-background">
              <CardHeader className="h2-bold justify-items-center">
                <CardTitle>KLT EXAM</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This card now has a conic-gradient rotating behind it.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </>
  );
}

export default QuizCard;
