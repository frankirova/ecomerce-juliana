import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Catalogue,
  Contact,
  DetailProductContainer,
  Home,
  Login,
  Signup,
  ProductCustomForm,
  ProductEnterpriseForm,
} from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Catalogo" element={<Catalogue />} />
      <Route
        path="/Catalogo/prod/:prodId"
        element={<DetailProductContainer />}
      />
      <Route path="/Contacto" element={<Contact />} />
      <Route path="/Sobre nosotros" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="catalogo/empresas" element={<ProductEnterpriseForm />} />
      <Route path="catalogo/personalizado" element={<ProductCustomForm />} />
    </Routes>
  );
};
