import './App.css'

type CardProps = {
  name: string,
  description: string,
  imageUrl: string,
  age: number
}

function CardHeader (props: {title: string, subtitle?: string}) {
  return <div>
    <h1>{props.title}</h1>
    {/* <p>{props.subtitle}</p> */}
  </div>
}

function CardImage (props: {src: string}) {
  return <img src={props.src} alt="a person" style={{
    width: 100,
    padding: 20
  }} />
}
function CardBody (props: {description:string}){
  return <p>{props.description}</p>
}
function Card(props: CardProps) {
  return <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    border: '5px solid black',
    padding: 20,
    borderRadius: 20,
    maxWidth: 400, // Set a maximum width
    margin: '20px auto' // Center the card horizontally
  }}>
    <div>
    <CardHeader title={props.name}  />
    <CardBody description={props.description} />
    </div>
    <CardImage src={props.imageUrl} />
  </div>
}


function App() {
  return <div style={{
      // display:"flex",
      // flexDirection:"column",
  }}>
    <Card name={
    "Vaibhav Chopra"
  }
    description='SWE @ Microsoft'
    age={23}
    imageUrl='https://www.thispersondoesnotexist.com/' />
    <Card name={
    "Krishi"
  }
    description='SWE @ Microsoft'
    age={22}
    imageUrl='https://www.thispersondoesnotexist.com/' />
    </div>
}

export default App
