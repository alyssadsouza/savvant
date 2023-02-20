import { ReactComponent as Icon } from "../assets/tooltip.svg";

type Props = {
	text: string;
	classes?: string;
}

export default function ToolTip({ text, classes }: Props) {
	return (
		<div>
			<Icon className={`peer ${classes}`} />
			<p className="absolute my-2 max-w-[200px] p-2 text-xs rounded-lg opacity-0 transition-all peer-hover:opacity-100 bg-black/90">{text}</p>
		</div>
	)
}