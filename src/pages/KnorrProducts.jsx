import ProductItem from '../products/ProductItem';

const KnorrProducts = () => {

  const products = [

    {
      image: 'valvula-4-circuitos-apu-k014374-mbenz-atego-1315-1418-1518-1718-2425-2533-o500todos-los-modelos-of1319-of1418-of1519-of1.jpg',
      title: '4 Circuitos Knorr',
      description: '4 Circuitos Knorr - Compatible con todo modelo de camión marca Iveco, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
      link: 'https://articulo.mercadolibre.com.ar/MLA-929581931-valvula-4-circuitos-tipo-knorr-_JM#position=12&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
    },
    {
        image: 'rep-pedalera-knorr.jpg',
        title: 'Juego de rep. Pedalera tipo Knorr',
        description: 'Juego de rep. Pedalera tipo Knorr mod. viejo - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
        link: 'https://articulo.mercadolibre.com.ar/MLA-1132053773-juego-de-reparacion-de-pedalera-knorr-_JM#position=27&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
      },
      {
        image: 'midi-servo-tipo-knorr.jpg',
        title: 'Midi Servo tipo Knorr',
        description: 'Midi Servo tipo Knorr - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
        link: 'https://articulo.mercadolibre.com.ar/MLA-924484542-midi-servo-tipo-knorr-_JM#position=34&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
      },
      {
        image: 'frenodemano-knorr.jpg',
        title: 'Freno de Mano tipo Knorr',
        description: 'Freno de Mano tipo Knorr mod. nuevo - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
        link: 'https://articulo.mercadolibre.com.ar/MLA-1137375749-freno-de-mano-knorr-modelo-nuevo-_JM#position=28&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
      },
      {
        image: 'entretapa-88mm-knorr.jpg',
        title: 'Entretapa 88mm compresor Knorr',
        description: 'Entretapa 88mm compresor Knorr - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
        link: 'https://articulo.mercadolibre.com.ar/MLA-1383743653-entretapa-compresor-knorr-88-_JM#position=24&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
      },
      {
        image: 'rep-distrib-knorr.jpg',
        title: 'Juego de rep. Distribuidora Knorr',
        description: 'Juego de rep. Distribuidora Knorr - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
        link: 'https://articulo.mercadolibre.com.ar/MLA-1103494733-juego-de-preparacion-de-valvula-distribuidora-knorr-_JM#position=20&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
      },
  ];

  return (
    <section id="knorr-section" className="productos-container">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          image={product.image} 
          title={product.title}
          description={product.description}
          link={product.link}
        />
      ))}
    </section>
  );
};

export default KnorrProducts;