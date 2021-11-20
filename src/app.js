const customExpress = require("./config/customExpress");
const cors = require("cors")
const app = customExpress();
const PORT = process.env.PORT || 3000;
app.use(cors())

app.listen(PORT, () => {
    console.log(`Servido rodadando na porta ${port}.`)
})
