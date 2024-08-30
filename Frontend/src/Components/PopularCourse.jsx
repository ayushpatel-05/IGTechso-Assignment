import Course from "./Course";

export default function PopularCourse() {
  return (  
    <div className="flex flex-col items-center my-32 gap-16">
      <div className="flex flex-col items-center">
        <h1 className="font-dm-sans text-[#EF9E48] ">QUALITY FEATURES</h1>
        <h1 className="text-3xl font-bold">Popular Designing Course</h1>
      </div>


      <div className="flex flex-col flex-wrap gap-7 w-[1000px]">
        {courseList.map((course, index) => {
            return (
                <Course rating={course.rating} reviewCount={course.reviewCount} views={course.views}
                title={course.title}
                description={course.description}
                numVideos={course.numVideos}
                totalHours={course.totalHours}
                key={index}></Course>
            )
        })}
      </div>

    </div>
  );
}










const courseList = [
    {
        rating: 4,
        reviewCount: 203,
        views:2000,
        title:"Title of the course is this",
        description:"Description of the course is this",
        numVideos:8,
        totalHours:10
    },
    {
        rating: 4,
        reviewCount: 203,
        views:2000,
        title:"Title of the course is this",
        description:"Description of the course is this",
        numVideos:8,
        totalHours:10
    },
    {
        rating: 4,
        reviewCount: 203,
        views:2000,
        title:"Title of the course is this",
        description:"Description of the course is this",
        numVideos:8,
        totalHours:10
    },
    {
        rating: 4,
        reviewCount: 203,
        views:2000,
        title:"Title of the course is this",
        description:"Description of the course is this",
        numVideos:8,
        totalHours:10
    },
    {
        rating: 4,
        reviewCount: 203,
        views:2000,
        title:"Title of the course is this",
        description:"Description of the course is this",
        numVideos:8,
        totalHours:10
    }
]