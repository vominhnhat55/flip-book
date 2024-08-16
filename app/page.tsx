import DeployButton from '../components/DeployButton';
import AuthButton from '../components/AuthButton';
import SignUpUserSteps from '@/components/tutorial/SignUpUserSteps';
import Header from '@/components/Header';
import {getBooks} from '@/service/book';
import Script from 'next/script';
import {useQuery} from '@tanstack/react-query';
import BookCard from '@/components/BookCard';
import {createClient} from '@/utils/supabase/server';

export default async function Index() {
  const supabase = createClient();
  const {data: books, error} = await supabase.from('books').select('*');
  console.log(books);
  return (
    <div className='flex-1 w-full flex flex-col gap-20 items-center'>
      <nav className='w-full flex justify-center border-b border-b-foreground/10 h-16'>
        <div className='w-full max-w-4xl flex justify-between items-center p-3 text-sm'>
          <DeployButton />
          <AuthButton />
        </div>
      </nav>
      <div className='flex gap-2 justify-between '>
        {books?.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>

      <footer className='w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs'>
        <p>
          Powered by{' '}
          <a
            href='https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs'
            target='_blank'
            className='font-bold hover:underline'
            rel='noreferrer'
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
