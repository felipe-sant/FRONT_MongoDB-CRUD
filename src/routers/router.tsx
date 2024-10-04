import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import Page_LivroCadastro from "../pages/LivroCadastro";
import Page_Clientes from "../pages/Clientes";
import Page_ClienteCadastro from "../pages/ClienteCadastro";
import Page_Livros from "../pages/Livros";
import Page_NotFound from "../pages/NotFound";
import Page_Home from "../pages/Home";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Page_Home />} />
        <Route path="/clientes" element={<Page_Clientes />} />
        <Route path="/clientes/cadastro" element={<Page_ClienteCadastro />} />
        <Route path="/livros" element={<Page_Livros />} />
        <Route path="/livros/cadastro" element={<Page_LivroCadastro />} />
        <Route path="*" element={<Page_NotFound />} />
      </Switch>
    </BrowserRouter>  
  );
}