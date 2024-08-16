'use client';
import {getBooks} from '@/service/book';
import {columns} from './columns';
import {DataTable} from './data-table';
import {useQuery} from '@tanstack/react-query';
import FormAddBook from './FormAddBook';
import AddBookButton from './AddBookButton';
import Image from 'next/image';
import Script from 'next/script';
import BookCard from '@/components/BookCard';

export default function BookPage() {
  const {isLoading, error, data} = useQuery({
    queryKey: ['books'],
    queryFn: () => getBooks(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className='container mx-auto py-10 space-y-10'>
        <div className='flex justify-between'>
          <div></div>
          <AddBookButton />
        </div>
        <DataTable columns={columns} data={data ? data : []} />

        {data?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}
