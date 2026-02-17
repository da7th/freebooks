import "./Main.css"
import Card from "../Card/Card";

function Main({genre}) {
  return (
    <main className="content">
      <div className="content-grid">
        <Card genre={genre} />
      </div>
    </main>
  );
}

export default Main;
