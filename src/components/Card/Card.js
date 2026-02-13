import './Card.css'

function Card() {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src="https://placehold.co/600x400" alt="Produto" />
      </div>
      <div className="card-info">
        <span className="card-category">Categoria</span>
        <h3 className="card-title">Nome do Produto de Exemplo</h3>
        <button className="card-button">Acessar conteúdo</button>
      </div>
    </div>
  );
}

export default Card;