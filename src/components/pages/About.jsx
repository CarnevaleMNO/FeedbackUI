import Card from "../shared/Card";

export default function About() {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>
          This is a react app to study the foundational skills you need to
          create a react app
        </p>
        <p>version 1.0.0</p>
        <p>
          <a href="/">Home</a>
        </p>
      </div>
    </Card>
  );
}
