import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
