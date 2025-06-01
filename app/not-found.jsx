import Link from 'next/link';
import FuzzyText from './components/FuzzyText/FuzzyText';

export default function NotFound() {
  const items = [
    { label: "", href: "/" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen text-center">
      <div className='pr-8'>
        <FuzzyText
          baseIntensity={0.2}
          color='black'
        >
          404
        </FuzzyText>
      </div>
      <p className="mt-4 font-bold text-xl font-mono">The page was not found</p>
      <Link
        className="group relative inline-block text-sm font-semibold text-black focus:outline-none"
        href="/"
      >
        <span className="absolute inset-0 border rounded-lg border-primary"></span>
        <span
          className="block border border-primary rounded-lg bg-primary px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
        >
        Back to the homepage
        </span>
      </Link>
    </div>
  );
}
