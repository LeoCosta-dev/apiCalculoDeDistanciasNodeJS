// Chamo express declarando ele como uma constante cujo o valor é a própria requisição.
const express = require("express");
// Chamo o gerenciador de módulos consign declarando ele como uma constante cujo o valor é a própria requisição.
const consign = require("consign");
// Exporto a configuração do express como módulo para ser usado em arquivo separado deste, atribuindo como valor a ele uma callback que executa a própria configuração.
const cors = require("cors");

module.exports = () => {
    app.use(cors())
    // Declaro uma constante para execução do express.
    const app = express();
    // informo o formato de arquivo aceito no corpo da requisição pela aplicação com o método nativo ao invés da biblioteca externa body-parse que caiu em desuso.
    app.use(express.json());
    
    consign() // chamo o gerenciador.
        .include('/src/controllers') // informo o que eu quero que o gerenciador inclua.
        .into(app) // informo onde eu quero que o gerenciador inclua.

    return app
}
