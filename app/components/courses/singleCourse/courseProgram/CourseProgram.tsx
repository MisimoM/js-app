type CourseProgramItem = {
    title: string;
    text: string;
}

type CourseProgramProps = {
    programItems: CourseProgramItem[];
}

export default function CourseProgram({
    programItems
}: CourseProgramProps) {
    return (
        <div>
            <h1>Program Details</h1>
            <div>
                {programItems.map((item, index) => (
                    <div key={index}>
                        <div>
                            {index}
                        </div>
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}