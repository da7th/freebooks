import "./Main.css"
import Card from "../Card/Card";

function Main({genre, search}) {
  return (
    <main className="content">
      <div className="content-grid">
        <Card genre={genre} search={search}/>
      </div>
    </main>
  );
}

export default Main;
