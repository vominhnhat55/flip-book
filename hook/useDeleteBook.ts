import {deleteBook} from '@/service/book';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import toast from 'react-hot-toast';

const useDeleteBook = () => {
  const queryClient = useQueryClient();
  const {mutate, isPending} = useMutation({
    mutationFn: deleteBook,
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
};

export default useDeleteBook;
