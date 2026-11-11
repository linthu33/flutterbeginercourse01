const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const todoroute= require("./routes/todoroute")
const cors = require('cors');

app.use(cors()); // CORS request အားလုံးကို ခွင့်ပြုပေးမည်
app.use(express.json()); // JSON Body parsing အတွက် ထည့်ပေးရန် လိုအပ်သည်
app.use(express.static(path.join(__dirname, 'public')));
// Root Route တွင် index.html ကို ပို့ပေးခြင်း
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Phase Routes
app.get('/phase1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'phase1.html'));
});

app.get('/phase2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'phase2.html'));
});

app.get('/phase3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'phase3.html'));
});
app.get('/phase4', (req, res) => res.sendFile(path.join(__dirname, 'public', 'phase4.html')));
app.get('/phase5', (req, res) => res.sendFile(path.join(__dirname, 'public', 'phase5.html')));
app.get('/phase6', (req, res) => res.sendFile(path.join(__dirname, 'public', 'phase6.html')));
app.get('/api', (req, res) => res.sendFile(path.join(__dirname, 'public', 'apibloc.html')));
app.get('/ui', (req, res) => res.sendFile(path.join(__dirname, 'public', 'ui.html')));


app.get('/apiget', (req, res) => res.sendFile(path.join(__dirname, 'public', 'apiget.html')));
app.get('/apipost', (req, res) => res.sendFile(path.join(__dirname, 'public', 'apipost.html')));
app.get('/apidelete', (req, res) => res.sendFile(path.join(__dirname, 'public', 'apidelete.html')));

app.get('/data-structure', (req, res) => res.sendFile(path.join(__dirname, 'public', 'datastructure.html')));
app.get('/sdlc', (req, res) => res.sendFile(path.join(__dirname, 'public', 'sdl.html')));
app.get('/big-o-notations', (req, res) => res.sendFile(path.join(__dirname, 'public', 'on2.html')));

app.use('/api/test',todoroute );
app.listen(PORT, () => {
  app.get('/state', (req, res) => res.sendFile(path.join(__dirname, 'public', 'statetech.html')));
  console.log(`Server is running at http://localhost:${PORT}`);
});