import Link from 'next/link';

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="px-8 py-4 border-b border-gray-300">
      <Link href="/">
        <a
          className="text-gray-800 font-semibold text-4xl"
        >
          Next.js and Prisma Ecommerce
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
