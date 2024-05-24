import "./courseProgram.css"

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
        <div className="course-program">
            <h1>Program Details</h1>
            <div className="program-list">
                {programItems.map((item, index) => (
                    <div className="program-list-row" key={index}>
                        <div className="number-display">
                            {index + 1}
                        </div>
                        <div className="text-holder">
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}