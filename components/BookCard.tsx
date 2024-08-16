import {Book} from '@/types/book';
import Script from 'next/script';
import React from 'react';

const BookCard = ({book}: {book: Book}) => {
  return (
    <div>
      <img
        alt={book.name}
        width={100}
        height={100}
        src={book.image}
        data-rel='fh5-light-box-demo'
        data-href={book.data}
        data-width={1100}
        data-height={850}
        data-title=''
        key={book.id}
      />
      <Script
        src='https://static.fliphtml5.com/web/js/plugin/LightBox/js/fliphtml5-light-box-api-min.js'
        strategy='afterInteractive'
        // onLoad={() => console.log('FlipHTML5 script loaded successfully')}
        // onError={() => console.log('Failed to load FlipHTML5 script')}
      />
    </div>
  );
};

export default BookCard;
