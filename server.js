const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const CONFIG_FILE = path.join(__dirname, 'config.json');
const PROGRESS_FILE = path.join(__dirname, 'progress.json');

// Default Exam Configuration starting August 26
const defaultConfig = {
  startDate: '2026-08-26',
  zeroProblemDates: [
    '2026-09-08', '2026-09-09', '2026-09-10', '2026-09-11', '2026-09-12',
    '2026-11-12', '2026-11-13', '2026-11-14', '2026-11-15', '2026-11-16'
  ],
  oneProblemRanges: [
    { start: '2026-11-19', end: '2026-11-24' },
    { start: '2026-11-27', end: '2026-12-15' }
  ]
};

function readJson(filePath, defaultData) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
  }
  return defaultData;
}

function writeJson(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err.message);
  }
}

app.get('/api/config', (req, res) => {
  const config = readJson(CONFIG_FILE, defaultConfig);
  res.json(config);
});

app.post('/api/config', (req, res) => {
  const newConfig = req.body;
  writeJson(CONFIG_FILE, newConfig);
  res.json({ success: true, config: newConfig });
});

app.get('/api/progress', (req, res) => {
  const completedIds = readJson(PROGRESS_FILE, []);
  res.json({ completedIds });
});

app.post('/api/progress/toggle', (req, res) => {
  const { problemId, completedIds: incomingArr } = req.body;
  
  let completedIds = readJson(PROGRESS_FILE, []);
  
  if (Array.isArray(incomingArr)) {
    completedIds = incomingArr;
  } else if (typeof problemId === 'number') {
    const index = completedIds.indexOf(problemId);
    if (index > -1) {
      completedIds.splice(index, 1);
    } else {
      completedIds.push(problemId);
    }
  }

  writeJson(PROGRESS_FILE, completedIds);
  res.json({ success: true, completedIds });
});

app.post('/api/progress/reset', (req, res) => {
  writeJson(PROGRESS_FILE, []);
  res.json({ success: true, completedIds: [] });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Striver A2Z DSA Engine running on http://localhost:${PORT}`);
  console.log(`====================================================`);
});
