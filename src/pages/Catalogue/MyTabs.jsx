import {
  useFilterByCategory,
  usePaginationAll,
  usePaginationWhitCategory,
} from "../../hooks";
import { ProductsList } from "../Catalogue";

import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { CardKeychains } from "./CardKeychains";
import { Pagination } from "../../components/Pagination";

export default function MyTabs({ products }) {
  const categories = ["Todos"];
  const { productsFilterByCategory, handleChangeFilter } = useFilterByCategory({
    products,
  });
  const { nextPage, prevPage, arr } = usePaginationAll({
    products,
  });
  const { next, back, arrFilteredByCategory } = usePaginationWhitCategory({
    productsFilterByCategory,
  });
  return (
    <Tabs colorScheme="primary">
      <TabList>
        {categories.map((category) => (
          <Tab
            key={category}
            value={category.toLowerCase()}
            onClick={handleChangeFilter}
          >
            {category}
          </Tab>
        ))}
      </TabList>
      <TabPanels p="2rem">
        <TabPanel>
          <ProductsList products={arr} />
          <Pagination next={nextPage} back={prevPage} />
        </TabPanel>
        <TabPanel>
          <Flex direction="row" gap={2} justify="space-between">
            <CardKeychains
              products={productsFilterByCategory}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              textButton="Empresas"
              prop1="minimo 20 unidades"
              prop2="poseer un branding ya diseñado"
              prop3="imagen png del logo"
            />
            <CardKeychains
              products={productsFilterByCategory}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              textButton="Personalizado"
              prop1="minimo 2 unidades"
              prop2="detallar el diseño"
            />
          </Flex>
        </TabPanel>
        {categories.slice(2, 5).map((category) => (
          <TabPanel key={category}>
            {productsFilterByCategory.length >= 6 ? (
              <>
                <ProductsList products={arrFilteredByCategory} />
                <Pagination back={back} next={next} />
              </>
            ) : (
              <ProductsList products={productsFilterByCategory} />
            )}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
