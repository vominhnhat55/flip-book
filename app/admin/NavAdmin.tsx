'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const navItems = [{name: 'Books', path: '/admin/books'}];

const NavAdmin = () => {
  const pathname = usePathname();
  const currentPath = pathname.split('/')[2];
  const active = 'bg-accent';
  return (
    <nav className='p-2'>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`rounded-md hover:bg-accent p-2 cursor-pointer ${
            (currentPath === 'books' && item.name === 'Books') ||
            (pathname === '/admin' && item.name === 'Books') ||
            (currentPath === item.path.split('/')[2] && currentPath !== 'books')
              ? active
              : ''
          }`}
        >
          <Link href={item.path} className='w-full'>
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavAdmin;
