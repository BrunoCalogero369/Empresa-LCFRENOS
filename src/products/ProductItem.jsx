import PropTypes from 'prop-types';

const ProductItem = ({ image, title, description, link }) => {
  const handleVerEnMercadoLibre = () => {
    // Redirigir al enlace de MercadoLibre
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="producto">
      <img src={image} alt={title} />
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>{title}</p>
      <p>{description}</p>
      <div className="btn-a">
        <button style={{
            backgroundColor: '#007BFF',
            fontSize: '18px',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        onClick={handleVerEnMercadoLibre}>Ver en MercadoLibre</button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProductItem;