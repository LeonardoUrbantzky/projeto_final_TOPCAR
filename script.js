document.addEventListener("DOMContentLoaded", function () {
    const projetos = [
      {
        titulo: "LAND ROVER",
        descricao: "Luxo e refinamento inigualáveis.",
        imagem: "/img/Land.jpg",
      },
      {
        titulo: "JAGUAR",
        descricao: "O equilíbrio perfeito entre potência e eficiência.",
        imagem: "/img/Jaguar.jpg",
      },
      
    ];
  
    const listaProjetos = document.getElementById("lista-projetos");
    const conteudoExibido = document.getElementById("conteudo-exibido");
  
    projetos.forEach((projeto) => {
      const button = document.createElement("button");
      button.textContent = projeto.titulo;
  
      button.addEventListener("click", function () {
        const tituloProjeto = document.createElement("h3");
        tituloProjeto.textContent = projeto.titulo;
  
        const descricaoProjeto = document.createElement("p");
        descricaoProjeto.textContent = projeto.descricao;
  
        const imagemProjeto = document.createElement("img");
        imagemProjeto.setAttribute("src", projeto.imagem);
  
        // Limpa o conteúdo anterior
        conteudoExibido.innerHTML = ''; 
        conteudoExibido.appendChild(tituloProjeto);
        conteudoExibido.appendChild(descricaoProjeto);
        conteudoExibido.appendChild(imagemProjeto);
  
        // Exibe a section
        
      });
  
      listaProjetos.appendChild(button);
    });
  });