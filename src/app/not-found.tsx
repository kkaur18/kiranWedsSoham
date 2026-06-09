import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-[#FFFBF2]">
        <p className="font-sans text-sm tracking-widest uppercase text-maroon/60 mb-4">404</p>
        <h1 className="font-serif text-5xl md:text-6xl text-maroon mb-4">Page not found</h1>
        <p className="font-sans text-gray-500 mb-8 max-w-sm">
          If you&apos;re looking for your personal invite, make sure you&apos;re using the link we sent you.
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-maroon text-white rounded-full font-sans text-sm tracking-widest uppercase hover:bg-maroon-dark transition-colors"
        >
          Go Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
