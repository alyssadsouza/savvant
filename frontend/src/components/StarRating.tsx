import { ReactComponent as Star } from "../assets/star.svg";

type Props = {
	rating: number;
	classes?: string;
}

export default function StarRating({ rating, classes }: Props) {
	return (
		<div className={`inline-flex gap-1 ${classes}`}>
			{Array(Math.round(rating)).fill(0).map(index => <Star className="w-8 text-[#F1C117]" />)}
			{Array(5 - Math.round(rating)).fill(0).map(index => <Star className="w-8 text-white/50" />)}
		</div>
	)
}