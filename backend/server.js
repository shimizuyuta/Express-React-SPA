const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const expressSession = require('express-session');

const router = require('./router')



app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const sessionStore = new expressSession.MemoryStore();
const session = expressSession({
  store: sessionStore,
  secret: 'catIsKawaii', // 環境変数で設定などする。今回は省略して固定値
  resave: false,
  saveUninitialized: false,
  rolling: true,
  proxy: false, // reverse proxy経由などの場合はtrueにする。環境で分けるようにする。今回は省略
  cookie: {
    secure: false, // httpsならtrueにする。環境で分けるなどする。今回は省略
    httpOnly: true,
    rolling: true,
    maxAge: 3600000, // ミリ秒で指定。環境変数で設定するべきだが、今回は省略
  },
});

app.use(session);



app.use('/api/v1/', router)

app.listen(port,()=>console.log('start server'))