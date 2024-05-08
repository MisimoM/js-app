import Link from "next/link";
import "./courseItem.css";

type CourseItemProps = {
    image?: string;
    title: string;
    author: string;
    price: number;
    hours: number;
    likePercentage: string;
    likeCount: string;
}

export default function CourseItem({
    image,
    title,
    author,
    price,
    hours,
    likePercentage,
    likeCount
}: CourseItemProps) {
    return (
        <Link href="courses/singlecourse">
            <div className="course-item">
                <div><img src={image} alt="" /></div>
                <div className="text-holder">
                    <div className="top-holder">
                        <h5>{title}</h5>
                        <p className="author">{author}</p>
                        <p className="price">{price}</p>
                    </div>
                    <div className="bottom-holder">
                        <div className="time">
                            <i className="fa-light fa-clock"></i>
                            <p>{hours}</p>
                        </div>
                        <div className="rating">
                            <i className="fa-light fa-thumbs-up"></i>
                            <p>{likePercentage} {likeCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}