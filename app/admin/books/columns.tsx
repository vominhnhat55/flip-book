'use client';

import {Book} from '@/types/book';
import {ColumnDef} from '@tanstack/react-table';
import {MoreHorizontal} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DropdownDeleteItem from './DropdownDeleteItem';
import Image from 'next/image';

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: 'link',
    header: 'Hình',
    cell: ({row}) => {
      const book = row.original;
      return (
        <Image
          src={book.image}
          alt={book.name}
          className=' object-fit rounded-md'
          width={80}
          height={80}
        />
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'Tên',
  },
  {
    accessorKey: 'description',
    header: 'Mô tả',
  },
  {
    id: 'actions',
    header: 'hành động',
    cell: ({row}) => {
      const book = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start' className='font-medium'>
            <DropdownDeleteItem book={book} />
            <DropdownMenuItem>Sửa</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
