import { useState } from 'react'
import './App.css' 

const fotosDados = [
  { id: 1, titulo: "Notebook de Trabalho", url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80" },
  { id: 2, titulo: "Floresta Nebulosa", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80" },
  { id: 3, titulo: "Café da Manhã", url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80" },
  { id: 4, titulo: "Câmera Antiga", url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" },
  { id: 5, titulo: "Montanhas Rochosas", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80" },
  { id: 6, titulo: "Escritório Moderno", url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&q=80" },
  { id: 7, titulo: "Pôr do Sol no Mar", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80" },
  { id: 8, titulo: "Gato Curioso", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&q=80" },
  { id: 9, titulo: "Cidade à Noite", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&q=80" },
  { id: 10, titulo: "Campo de Girassóis", url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500&q=80" },
  { id: 11, titulo: "Luzes de Neon", url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80" },
  { id: 12, titulo: "Sala de Estar", url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80" }
];

function App() {
  const [busca, setBusca] = useState(""); 

  const fotosFiltradas = fotosDados.filter((foto) => 
    foto.titulo.toLowerCase().includes(busca.toLowerCase()) 
  );

  return (
    <div className="container">
      <header>
        <h1>Galeria de Fotos</h1>
      </header>

      <main>
        <div id="search-area">
          <input 
            type="text" 
            placeholder="Buscar fotos..." 
            value={busca} // vincula o valor do input ao estado busca
            onChange={(e) => setBusca(e.target.value)} 
          />
        </div>

        <section id="gallery-grid"> 
          {fotosFiltradas.length > 0 ? ( 
            fotosFiltradas.map((foto) => ( // mapeia e exibe as fotos filtradas
              <div key={foto.id} className="photo-card"> 
                <img src={foto.url} alt={foto.titulo} />
                <p>{foto.titulo}</p>
              </div>
            ))
          ) : ( // mensagem para quando não há resultados
            <p className="no-results">Nenhuma foto encontrada</p>
          )}
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Galeria de Fotos | Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App