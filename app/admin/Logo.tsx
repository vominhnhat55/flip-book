import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='w-full flex justify-center items-center cursor-pointer'>
      <Link href='/'>
        <Image src='/logo.jpg' alt='logo' width={60} height={60} />
      </Link>
    </div>
  );
};

export default Logo;
