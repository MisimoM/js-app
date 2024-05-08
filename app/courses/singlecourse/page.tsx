import CourseDescription from "@/app/components/courses/singleCourse/courseDescription/CourseDescription";
import CourseHeader from "@/app/components/courses/singleCourse/courseHeader/CourseHeader";
import CourseInfoCard from "@/app/components/courses/singleCourse/courseInfoCard/CourseInfoCard";
import CourseProgram from "@/app/components/courses/singleCourse/courseProgram/CourseProgram";
import "./singleCourse.css";

export default function SingleCourse() {
    return (
        <main>
            <section className="single-course">
                <CourseHeader title="FullStack Web" text="blablabla" reviews={1} likes={2} hours={150} author="Matheo Möll" />
                <div className="wrapper container">
                    <div className="container-left">
                        <CourseDescription description="This is a course" listItem={["Item 1", "Item 2", "Item 3"]} />
                        <CourseProgram programItems={[
                            { title: "Item 1 Title", text: "Item 1 Text" },
                            { title: "Item 2 Title", text: "Item 2 Text" },
                            { title: "Item 3 Title", text: "Item 3 Text" }
                        ]} />
                    </div>
                    <div className="container-right">
                        <CourseInfoCard hours={150} articles={18} downloadResources={10} price={150} />
                    </div>
                </div>
            </section>
        </main>
    );
  }