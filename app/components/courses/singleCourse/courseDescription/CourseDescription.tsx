type CourseDescriptionProps = {
    description: string;
    listItem: string[];
}

export default function CourseDescription({
    description,
    listItem
}: CourseDescriptionProps) {
    return (
        <div>
            <h1>Course Description</h1>
            <p>{description}</p>

            <h3>What you'll learn</h3>
            <ul>
                {listItem.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}