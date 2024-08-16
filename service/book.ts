import {Book} from '@/types/book';
import {createClient} from '@/utils/supabase/client';

export async function getBooks(): Promise<Book[]> {
  const supabase = createClient();
  const {data: books, error} = await supabase.from('books').select('*');
  if (error) {
    throw error;
  }
  return books;
}

export async function createBook(book: Book) {
  const supabase = createClient();
  const {data, error} = await supabase.from('books').insert([book]);
  if (error) {
    throw error;
  }
  return data;
}

export async function updateBook(book: Book) {}

export async function deleteBook(id: string) {
  const supabase = createClient();
  const {data, error} = await supabase.from('books').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  return data;
}
