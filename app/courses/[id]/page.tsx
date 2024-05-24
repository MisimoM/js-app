'use client'

import { useState, useEffect } from "react";

import CourseDescription from "@/app/components/courses/singleCourse/courseDescription/CourseDescription";
import CourseHeader from "@/app/components/courses/singleCourse/courseHeader/CourseHeader";
import CourseInfoCard from "@/app/components/courses/singleCourse/courseInfoCard/CourseInfoCard";
import CourseProgram from "@/app/components/courses/singleCourse/courseProgram/CourseProgram";
import "./singleCourse.css";
import getCourseById from "@/services/courseService/getCourseById";
import CourseAuthor from "@/app/components/courses/singleCourse/courseAuthor/CourseAuthor";

export default function SingleCourse({ params }: {
    params: { id: string}
}) {
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(params.id)

  useEffect(() => {
    const fetchCourse = async () => {
        try {
            const courseData = await getCourseById(params.id);
            setCourse(courseData);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchCourse();
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <main>
            <section className="single-course">
                <CourseHeader imageUrl={course.imageUrl} title={course.title} text={course.text} reviews={course.reviews} likes={course.likes} hours={course.hours} author={course.authors.map((author: any) => author.name)} authorImage={course.authors.map((author: any) => author.imageUrl)}/>
                <div className="container">
                <div className="wrapper">
                    <div className="container-left">
                        <CourseDescription description={course.description} listItem={course.descriptionList} />
                        <CourseProgram programItems={course.programDetails} />
                    </div>
                    <div className="container-right">
                        <CourseInfoCard hours={course.hours} articles={course.articles} downloadResources={course.downloadeableResources} price={course.prices.price} />
                    </div>
                </div>
                <CourseAuthor imageUrl={course.authors.map((author: any) => author.imageUrl)} name={course.authors.map((author: any) => author.name)} text={course.authors.map((author: any) => author.text)} />
                </div>
            </section>
        </main>
    );
}