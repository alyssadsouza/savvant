import { useState } from 'react';

function SearchBar() {
	
  const [placeholder, setPlaceholder] = useState("iPhone 14");

  return (
    <form>
		<input type="text" placeholder={placeholder} className='px-4 py-2 my-4 w-[32rem] text-3xl text-black rounded-[100px]' />
	</form>
  );
}

export default SearchBar;
