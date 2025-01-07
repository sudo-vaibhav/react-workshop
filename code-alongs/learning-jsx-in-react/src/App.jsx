import "./App.css"
import CoworkersList from "./CoworkersList"
import SkillsList from "./SkillsList"

function App() {
  const name = "Vaibhav";
  const favNumber = 41
  const favCity = "Chi"
  const coworkers = ["Krishi","Gunjan","Avitash"]
  const numColorClass = favNumber % 2 ? "red" : "green"
  const HeadingTag =  favNumber % 2 ? "h1" : "h5";
  const proficiency = {
    "math": "expert",
    "react": "intermediate",
    "python": "beginner"
  }
  return <div>
    <HeadingTag className={proficiency.math} style={{
      color: numColorClass
    }}>{name} {favNumber+1}</HeadingTag>
    <p>Fav city: <b>{`Ho ${favCity} Minh`}</b></p>
    
    <CoworkersList coworkers={coworkers} />
    {/* never write code like below, but effectively the previous
      line is doing this itself under the hood.
    */}
    {CoworkersList({coworkers})}

    <SkillsList proficiency={proficiency} />
    {today()}
  </div>
}

const today = ()=>{
  return new Date().toLocaleDateString()
}

export default App
