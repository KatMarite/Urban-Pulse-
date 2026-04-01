import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes
  app.get("/api/routes", (req, res) => {
    // Simulate dynamic data
    const now = Date.now();
    const routes = [
      { 
        id: 'A1', 
        name: 'Menlyn Central', 
        via: 'VIA HATFIELD STATION', 
        time: `${Math.max(1, Math.floor(2 + Math.sin(now / 10000) * 2))} Min AWAY`, 
        status: 'On Time', 
        color: 'bg-emerald-500', 
        bus: 'B-7448', 
        progress: 70 + Math.floor(Math.sin(now / 5000) * 10) 
      },
      { 
        id: 'M2', 
        name: 'Brooklyn Hub', 
        via: 'VIA PRETORIA EAST', 
        time: `${Math.max(1, Math.floor(5 + Math.cos(now / 15000) * 3))} Min AWAY`, 
        status: 'Delayed', 
        color: 'bg-secondary-container animate-pulse', 
        bus: 'B-2109', 
        alert: 'Minor traffic delay near Garsfontein Rd. Updates every 60s.' 
      },
      { 
        id: 'X5', 
        name: 'Pretoria CBD', 
        via: 'EXPRESS SERVICE', 
        time: `${Math.max(1, Math.floor(12 + Math.sin(now / 20000) * 5))} Min AWAY`, 
        status: 'On Time', 
        color: 'bg-emerald-500', 
        bus: 'B-9923' 
      },
    ];
    res.json(routes);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
