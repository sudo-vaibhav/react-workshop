import Card from './Card';


// Example usage
const ExampleCard = () => {
  return (
    <Card className="card">
      <Card.Image
        src="https://www.thispersondoesnotexist.com/"
        alt="Example image"
      />
      <Card.Header
        title="Component Composition"
        subtitle="Learn about React component composition"
      />
      <Card.Content>
        <p>
          This is an example of component composition in React.
          Each part of this card is a separate component that can be
          used independently or composed together.
        </p>
      </Card.Content>
      <Card.Footer>
        <button className="button">
          Learn More
        </button>
      </Card.Footer>
    </Card>
  );
};
function App() {

  return (
    <>
      <ExampleCard />
    </>
  )
}

export default App
