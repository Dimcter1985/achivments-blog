import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../requests';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);


  return (
    <header className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-pink-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>Achivments Blog</span>
          </Link>
        </div >
        <nav className='hidden md:float-left md:contents'>
          {
            categories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`}>
                <span className='hover:underline md:float-right mt-2 align-middle text-white ml-4 cursor-pointer'>{cat.name}</span>
              </Link>
            ))
          }
        </nav>
      </div>
    </header>
  )
}

export default Header