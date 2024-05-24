'use client'

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import CourseItem from "../components/courses/allCourses/courseItem/CourseItem";
import CourseImage from "../../public/images/officeimage.svg";

import "./all-courses.css";
import getCourses from "@/services/courseService/getCourses";

export default function Courses() {
    const [courses, setCourses] = useState<any[]>([]);

    useEffect(() => {
        getCourses(setCourses)
    }, []);


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
                    {courses.map((course) => (
                        <CourseItem
                        key={course.id}
                        id={course.id}
                        imageUrl={course.imageUrl}
                        title={course.title}
                        author={course.authors.map((author: any) => author.name)}
                        price={course.prices.price}
                        hours={course.hours}
                        likeCount={course.likes}
                        likePercentage={course.likesInPercent}
                        />
                    ))}
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