import './Widget.scss';

const Widget = () => {
  return (
    <div className="widget-container">
      <div className="card-principal">
        <img 
          src="https://th.bing.com/th/id/OIG1.6E7FJ7qeAJA9sq2wVNw1?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" 
          className="image" 
          alt="TrustCare" 
        />
        <div className="card-content">
          <span className="card-title">TrustCare: o melhor cuidado para sua saúde e bem-estar</span>
          <span className="card-description">A telemedicina permite que você tenha acesso a cuidados de saúde de alta qualidade, onde quer que esteja.</span>
        </div>
      </div>
      <div className="cards-wrapper">
        <div className="card">
          <img 
            src="https://th.bing.com/th/id/OIG3.7JPGW0kXRNIgOW0yiR1l?w=1024&h=1024&rs=1&pid=ImgDetMain" 
            className="image" 
            alt="Consulta Online" 
          />
          <div className="card-content">
            <span className="card-title">Consulta Online</span>
            <span className="card-description">Realize consultas com especialistas através de vídeo chamadas, sem sair de casa.</span>
          </div>
        </div>
        <div className="card">
          <img 
            src="https://th.bing.com/th/id/OIG4.izGjxIlHrxrGQZPSp1kb?w=1024&h=1024&rs=1&pid=ImgDetMain" 
            className="image" 
            alt="Monitoramento Remoto" 
          />
          <div className="card-content">
            <span className="card-title">Monitoramento Remoto</span>
            <span className="card-description">Acompanhe sua saúde com dispositivos que enviam dados diretamente para seus médicos.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
