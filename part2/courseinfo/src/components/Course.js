const Header = ({ name }) =>
  <h2>{name}</h2>

const Part = ({ name, exercises }) =>
  <p>{name} {exercises}</p>

const Content = ({ parts }) =>
  <div>
    {parts.map(part => 
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}
  </div>

const Total = ({ parts }) => {
  const total = parts.reduce((prev, curr) => prev + curr.exercises, 0)
  return (
    <p><b>total of {total} exercises</b></p>
  ) 
}

const Course = ({ courses }) => 
  <div>
    {courses.map(course =>
      <div key={course.id}>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )}
  </div>
  
export default Course
