import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import useCreateBook from '@/hook/useCreateBook';
import {Textarea} from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(1, {message: 'Vui lòng nhập tên sách'}).max(200),
  link: z.string().min(1, {message: 'Vui lòng nhập link'}),
  description: z.string().min(1, {message: 'Vui lòng nhập mô tả'}).max(200),
});

export default function FormAddBook({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      link: '',
      description: '',
    },
  });

  const {mutate, isPending} = useCreateBook();

  function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading('Đang thêm sách...');
    const srcRegex = /<img[^>]+src="([^"]+)"/;
    const match = values.link.match(srcRegex);
    const dataHrefRegex = /<img[^>]+data-href="([^"]+)"/;
    const dataHrefMatch = values.link.match(dataHrefRegex);
    const srcValue = match ? match[1] : '';
    const dataHrefValue = dataHrefMatch ? dataHrefMatch[1] : '';
    const newBook = {
      name: values.name,
      image: srcValue,
      description: values.description,
      data: dataHrefValue,
    };

    console.log(srcValue);
    mutate(newBook, {
      onSuccess: () => {
        toast.success('Thêm sách thành công', {
          id: toastId,
        });
        form.reset();
        setOpen(false);
      },
      onError: (error) => {
        console.error(error);
        toast.error('Có lỗi xảy ra, vui lòng thử lại', {
          id: toastId,
        });
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='name'
          render={({field}) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input placeholder='tên sách' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='link'
          render={({field}) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='dán link vào đấy'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({field}) => (
            <FormItem>
              <FormLabel>Mô tả</FormLabel>
              <FormControl>
                <Input placeholder='Mô tả' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex'>
          <Button type='submit' className='ml-auto' disabled={isPending}>
            {isPending ? 'Đang thêm...' : 'Thêm sách'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
