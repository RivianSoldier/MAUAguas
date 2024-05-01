import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <a className="text-white font-bold text-xl">Home</a>
            </Link>
          </div>
          <div>
            <Link href="/sobre">
              <a className="text-white mr-4">Sobre</a>
            </Link>
            <Link href="/contato">
              <a className="text-white">Contato</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
