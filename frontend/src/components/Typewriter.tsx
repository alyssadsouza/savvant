import { useState, useEffect } from 'react';

export default function Typewriter(setPlaceholder:React.Dispatch<React.SetStateAction<string>>, placeholders: Array<string>) {
	const [adding, setAdding] = useState(true);
	const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholders[0]);
	const [index, setIndex] = useState(0);
	const [placeholderIndex, setPlaceholderIndex] = useState(
	  placeholders.length === 1 ? 0 : 1
	);
  
	useEffect(() => {
	  if (adding) {
		if (index <= currentPlaceholder.length) {
		  setPlaceholder(currentPlaceholder.slice(0, index));
		  setTimeout(() => setIndex(index + 1), 75);
		}
		if (index === currentPlaceholder.length) {
		  setTimeout(() => {
			setAdding(false);
			setIndex(index - 1);
		  }, 3000); // hold on full header for 3 seconds
		}
	  } // there's a period between adding still being true but index > text length where text holds for a few seconds
	  else {
		if (index >= 0) {
		  setPlaceholder(currentPlaceholder.slice(0, index));
		  if (index === 0) {
			setAdding(true);
			setCurrentPlaceholder(placeholders[placeholderIndex]);
			if (
			  placeholders.length === 1 ||
			  placeholderIndex === placeholders.length - 1
			) {
			  setPlaceholderIndex(0);
			} else {
			  setPlaceholderIndex(placeholderIndex + 1);
			}
			setTimeout(() => setIndex(index + 1), 300);
		  } else {
			setTimeout(() => setIndex(index - 1), 75);
		  }
		}
	  }
	}, [index]);
}