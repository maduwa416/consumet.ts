const { ANIME } = require('./dist/index.js');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Search - Zoro
app.get('/anime/zoro/:query', async (req, res) => {
    try {
        const zoro = new ANIME.Zoro();
        const data = await zoro.search(req.params.query);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// Info - Zoro
app.get('/anime/zoro/info/:id', async (req, res) => {
    try {
        const zoro = new ANIME.Zoro();
        const data = await zoro.fetchAnimeInfo(req.params.id);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

// Watch - Zoro
app.get('/anime/zoro/watch/:episodeId', async (req, res) => {
    try {
        const zoro = new ANIME.Zoro();
        const data = await zoro.fetchEpisodeSources(req.params.episodeId);
        res.json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 7860;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
