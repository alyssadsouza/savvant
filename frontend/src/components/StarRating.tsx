import { ReactComponent as Star } from "../assets/star.svg";

type Props = {
	rating: number;
	classes?: string;
}

export default function StarRating({ rating, classes }: Props) {
	return (
		<div className={`inline-flex gap-1 ${classes}`}>
			{Array.from(Array(Math.round(rating)).keys()).map(index => <Star key={index} className="w-8 text-[#F1C117]" />)}
			{Array.from(Array(5 - Math.round(rating)).keys()).map(index => <Star key={index} className="w-8 text-white/50" />)}
		</div>
	)
}