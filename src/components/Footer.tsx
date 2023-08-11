import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-5 text-center border-gray">
      <p className="text-sm">
        Works by{' '}
        <Link className="font-bold" href="https://www.wupxy.tech">
          Wupxy.
        </Link>
      </p>
    </footer>
  );
}
