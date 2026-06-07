const { ANIME } = require('./dist/index.js');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Search
app.get('/anime/gogoanime/:query', async (req, res) => {
    const gogoanime = new ANIME.Gogoanime();
    const data = await gogoanime.search(req.params.query);
    res.json(data);
});

// Info
app.get('/anime/gogoanime/info/:id', async (req, res) => {
    const gogoanime = new ANIME.Gogoanime();
    const data = await gogoanime.fetchAnimeInfo(req.params.id);
    res.json(data);
});

// Watch
app.get('/anime/gogoanime/watch/:episodeId', async (req, res) => {
    const gogoanime = new ANIME.Gogoanime();
    const data = await gogoanime.fetchEpisodeSources(req.params.episodeId);
    res.json(data);
});

const PORT = process.env.PORT || 7860;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
