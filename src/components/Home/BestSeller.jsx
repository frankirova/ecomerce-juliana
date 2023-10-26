import { HStack } from "@chakra-ui/react";
import { CardProducts } from "../../pages/Catalogue/CardProducts";
import { ProductsList } from "../../pages/Catalogue/ProductsList";
import { H2 } from '../H2'
export const BestSeller = () => {
  const BestSellerProducts = [
    {
      id: 2,
      title: "prod",
      price: 34,
      image: '//placehold.it/240x240',
      stock: 2,
    },
    {
      id: 3,
      title: "prod3",
      price: 34,
      image: "//placehold.it/240x240",
      stock: 2,
    },
    {
      id: 4,
      title: "prod4",
      price: 34,
      image: "//placehold.it/240x240",
      stock: 2,
    },
  ];
  return (
    <section>
      <H2>MAS VENDIDOS</H2>
      <ProductsList products={BestSellerProducts}/>
      {/* <HStack justifyContent='center'>
        {BestSellerProducts.map((product) => (
          <CardProducts
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            stock={product.stock}
          />
        ))}
      </HStack> */}
    </section>
  );
};
