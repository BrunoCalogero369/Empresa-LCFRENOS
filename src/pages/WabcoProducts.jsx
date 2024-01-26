import ProductItem from "../products/ProductItem";


const WabcoProducts = () => {

  const products = [

    {
      image: 'HTB1MiX2e75E3KVjSZFCq6zuzXXaP.jpg',
      title: 'Servo Embrague Wabco',
      description: 'Servo Embrague Wabco - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
      link: 'https://articulo.mercadolibre.com.ar/MLA-1396107005-servo-de-embrague-tipo-wabco-para-mb-1634-_JM#position=39&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
    },
    {
        image: 'compresor-wabco-85mm-mb-om906-atego-orig-wabco-4111540051.jpg',
        title: 'Tapa 85mm',
        description: 'Tapa 85mm - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
        link: 'https://articulo.mercadolibre.com.ar/MLA-1132210692-tapa-y-entretapa-compresor-wabco-tapa-chica-om-906-85-mm-_JM#position=15&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
      },
      {
        image: '500056401-PROTECTORA-NS-WABCO.jpg',
        title: '6 Circuitos Wabco',
        description: '6 Circuitos Wabco - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
        link: 'https://articulo.mercadolibre.com.ar/MLA-919698063-valvula-6-vias-tipo-wabco-_JM#position=16&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
      },
      {
        image: 'kit-de-reparacion-para-el-compresor-75mm-wabco.jpg',
        title: 'Juntas Para Compresor Wabco 75mm',
        description: 'Juntas Para Compresor Wabco 75mm - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
        link: 'https://articulo.mercadolibre.com.ar/MLA-1383698169-juntas-para-compresor-wabco-75mm-_JM#position=33&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
      },
      {
        image: 'rep-pedalera-wabco.jpg',
        title: ' Juego de rep. Pedalera Wabco',
        description: 'Juego de rep. Pedalera Wabco - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
        link: 'https://articulo.mercadolibre.com.ar/MLA-1103495330-juego-de-reparacion-de-valvula-pedalera-wabco-_JM#position=37&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
      },
      {
        image: 'rep-4circuitos.jpg',
        title: 'Juego de rep. 4 Circuitos Wabco',
        description: 'Juego de rep. 4 Circuitos Wabco - Compatible con todo modelo de camión marca Volkswagen, Mercedes y Ford, ante cualquier duda consultar antes de comprar.',
        link: 'https://articulo.mercadolibre.com.ar/MLA-1103489715-juego-de-reparacion-de-valvula-4-circuitos-wabco-_JM#position=36&search_layout=stack&type=item&tracking_id=b1161929-abc8-44b8-b88a-53972b4dc29f',
      },
  ];

  return (
    <section id="wabco-section" className="productos-container">
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


export default WabcoProducts;