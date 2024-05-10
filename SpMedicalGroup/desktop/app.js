const express = require('express')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser');
//const filmeRoute = require('./src/routes/filmeRoute');

const app = express();
const port= 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(expressLayouts);

layoutPrincipal = 'main'
app.engine('handlebars', engine({
    defaultLayout: layoutPrincipal,
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());

app.use(express.static(`${__dirname}/publico`))

app.use('/', filmeRoute);

app.listen(port, () => {
    console.log(`Servidor respondendo na porta ${port}`);
});