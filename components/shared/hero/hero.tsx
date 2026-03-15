import { Button } from '@/components/ui/button';

function Hero() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="wrapper max-w-6xl mx-auto px-4 my-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-center">
              Welcome to My Hero Section
            </h1>
            <p className="mt-4 text-lg text-center text-gray-600">
              This is a full-width hero with a centered wrapper.
            </p>
          </div>
          <div className="mt-8">
            <video
              className="mx-auto"
              width="600"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/cube.webm" type="video/webm" />
              {/* Fallback for browsers that don’t support .webm */}
              {/* <source src="/videos/my-hero-video.mp4" type="video/mp4" /> */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
