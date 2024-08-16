import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Book} from '@/types/book';
import {createBook} from '@/service/book';
import toast from 'react-hot-toast';

export default function useCreateBook() {
  const queryClient = useQueryClient();
  const {mutate, isPending} = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      });
    },
  });
  return {
    mutate,
    isPending,
  };
}
