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
import FormAddBook from './FormAddBook';
const AddBookButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Thêm sách</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Thêm sách</DialogTitle>
            <DialogDescription>Thêm một sách vào bộ sưu tập</DialogDescription>
          </DialogHeader>
          <FormAddBook setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddBookButton;
