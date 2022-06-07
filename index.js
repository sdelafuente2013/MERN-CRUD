const { dotenv, express, mongoose, booksRoutes, cors, port, app} = require("./routes/bookModule")

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', booksRoutes);

// Conexión con la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("¡Conexión exitosa con la base de datos!"))
    .catch((error) => console.log(error))

app.listen(port, () => console.log('Server escuchando en el puerto: ' + port));

