import {DropdownMenuItem} from '@/components/ui/dropdown-menu';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import {Book} from '@/types/book';
import useDeleteBook from '@/hook/useDeleteBook';
import toast from 'react-hot-toast';

export default function DropdownDeleteItem({book}: {book: Book}) {
  const [open, setOpen] = useState(false);
  const {mutate, isPending} = useDeleteBook();
  const handleDelete = () => {
    const toastId = toast.loading('Đang xoá sách');
    if (!book.id) {
      toast.error('Không thể xoá sách', {
        id: toastId,
      });
      return;
    }
    mutate(book.id, {
      onSuccess: () => {
        setOpen(false);
        toast.success('Xoá sách thành công', {
          id: toastId,
        });
      },
      onError: (error) => {
        toast.error('Xoá sách thất bại', {
          id: toastId,
        });
      },
    });
  };
  return (
    <>
      <DropdownMenuItem
        onClick={() => setOpen(true)}
        onSelect={(e) => e.preventDefault()}
      >
        Xoá
      </DropdownMenuItem>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Xoá sách</DialogTitle>
            <DialogDescription>
              Bạn có chắc chắn muốn xoá sách {book.name}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type='submit'
              onClick={handleDelete}
              variant='destructive'
              disabled={isPending}
            >
              {isPending ? 'Đang xoá...' : 'Xoá sách'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
