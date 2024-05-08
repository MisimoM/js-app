import Image from "next/image";
import "./courseHeader.css";

type CourseHeaderProps = {
    image?: string;
    title: string;
    text: string;
    reviews: number;
    likes: number;
    hours: number;
    author: string;
    authorImage?: string;
}

export default function CourseHeader({
    image,
    title,
    text,
    reviews,
    likes,
    hours,
    author,
    authorImage
}: CourseHeaderProps) {
    return (
        <div className="course-header">
            {/* <Image src={image} /> */}
            <div className="container">
                <div className="text-holder">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <div className="meta-info">
                    <p>{reviews} reviews</p>
                    <p>{likes} likes</p>
                    <p>{hours} Hours</p>
                </div>
                <div>
                    <div>
                        {/* <Image src={authorImage} /> */}
                    </div>
                    <div>
                        <p>Created by</p>
                        <p>{author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}