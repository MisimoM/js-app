import "./courseAuthor.css"

type CourseAuthorProps = {
    imageUrl: string;
    name: string;
    text: string;
}

export default function CourseAuthor({
    imageUrl,
    name,
    text
}: CourseAuthorProps) {
    return (
      <div className="course-author">
        <img className="author-img" src={imageUrl} alt="" />
        <div className="author-content">
            <p>Learn from the best</p>
            <h4>{name}</h4>
            <p>{text}</p>
        </div>
      </div>
    )
}