import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
	popularSearches: boolean;
	setPopularSearches: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ popularSearches, setPopularSearches } : Props) {

  return (
  	<div className='flex flex-row w-full p-4 justify-between'>
		<p>logo</p>
		<div>
			<Link to="how-it-works" className="ml-8 text-white/70 hover:underline">How It Works</Link>
			<button onClick={() => setPopularSearches(!popularSearches)} className="ml-8 text-white/70 hover:underline">See What Others Are Searching</button>
		</div>
	</div>
  );
}

export default Header;
