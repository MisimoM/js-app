import Link from "next/link";
import Image from "next/image";

import CourseItem from "../components/courses/allCourses/courseItem/CourseItem";
import CourseImage from "../../public/images/officeimage.svg";

import "./all-courses.css";

export default function Courses() {
    return (
      <main>
        <section className="all-courses">
            <div className="container">
                <div>
                    <div>
                        <Link href="#">Home</Link><i className="fa-light fa-angles-right"></i><Link href="#">Courses</Link>
                    </div>
                    <div className="title-holder">
                        <h1>Courses</h1>
                        <div className="input-wrapper">
                            <div className="input-holder"><input type="text" /><button><i className="fa-light fa-angle-down"></i></button></div>
                            <div className="input-holder"><input type="search" /><button><i className="fa-light fa-magnifying-glass"></i></button></div>
                        </div>
                    </div>
                    <div className="grid-container">
                        <CourseItem title="HTML/CSS" author="Matheo Möll" price={150} hours={100} likePercentage="95%" likeCount="3k" />
                    </div>
                    <div className="bottom-content">
                        <p>Ready to get started?</p>
                        <h1>Take Your <span>Skills</span> to the Next Level</h1>
                        <button className="btn-theme">Work with us</button>
                        <Image src={CourseImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
      </main>
    );
  }