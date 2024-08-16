import {createClient} from '@/utils/supabase/server';
import {redirect} from 'next/navigation';
import Logo from './Logo';
import NavAdmin from './NavAdmin';
import {Button} from '@/components/ui/button';

export default async function ({children}: {children: React.ReactNode}) {
  const supabase = createClient();
  const {
    data: {user},
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect('/login');
  }
  return (
    <section className='w-full h-screen'>
      <div className='grid grid-cols-[1.5fr,10fr] border-b '>
        <div className='border-r'>
          <Logo />
        </div>
        <div className='ml-auto'>
          <div className='flex items-center h-full'>
            <Button>Trang chủ</Button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-[1.5fr,10fr] h-full'>
        <div className='border-r'>
          <NavAdmin />
        </div>
        <div className='p-4'>{children}</div>
      </div>
    </section>
  );
}
