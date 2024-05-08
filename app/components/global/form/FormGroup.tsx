import "./formGroup.css";

type FormGroupProps = {
    title: string;
    type?: string;
    placeholder?: string;
    textarea?: boolean
}

export default function FormGroup({
    title,
    type,
    placeholder,
    textarea,
}: FormGroupProps) {
    return (
        <div className="form-group">
            <label>{title}</label>
            {textarea ? (
                <textarea placeholder={placeholder}></textarea>
            ) : (
                <input type={type} placeholder={placeholder}/>
            )}
        </div>
    )
}