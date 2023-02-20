import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

type Props = {
	popularSearches: boolean;
	setPopularSearches: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ popularSearches, setPopularSearches } : Props) {

  return (
  	<div className='flex flex-row w-full p-4 justify-between items-center'>
		<img src={Logo} className='h-10' alt="Savvant" />
		<div>
			<Link to="how-it-works" className="ml-8 text-white/70 hover:underline">How It Works</Link>
			<button onClick={() => setPopularSearches(!popularSearches)} className="ml-8 text-white/70 hover:underline">{!popularSearches ? "See" : "Hide"} What Others Are Searching</button>
		</div>
	</div>
  );
}

export default Header;
