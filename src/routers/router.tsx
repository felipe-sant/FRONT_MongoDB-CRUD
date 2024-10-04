import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import PageHome from "../pages/Home";
import PageClientes from "../pages/Clientes";
import PageClienteCadastro from "../pages/ClienteCadastro";
import PageLivros from "../pages/Livros";
import PageLivroCadastro from "../pages/LivroCadastro";
import PageNotFound from "../pages/NotFound";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<PageHome />} />
        <Route path="/clientes" element={<PageClientes />} />
        <Route path="/clientes/cadastro" element={<PageClienteCadastro />} />
        <Route path="/livros" element={<PageLivros />} />
        <Route path="/livros/cadastro" element={<PageLivroCadastro />} />
        <Route path="*" element={<PageNotFound />} />
      </Switch>
    </BrowserRouter>  
  );
}