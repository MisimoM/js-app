import "./button.css";

type ButtonProps = {
    className: string;
    title: string;
    type?: string;
}

export default function Button({
    className,
    title,
}: ButtonProps) {
    return (
        <button className={className}>
            {title}
        </button>
    )
}