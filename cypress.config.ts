import { spawn, type ChildProcess } from "node:child_process";
import { defineConfig } from "cypress";

const PORT = Number(process.env["PORT"] ?? 4321);
const BASE_URL = `http://localhost:${PORT}`;

let server: ChildProcess | undefined;

/** Serves dist/ for the duration of the run, unless something already does. */
async function startServer(): Promise<void> {
  const alreadyRunning = await fetch(BASE_URL)
    .then(() => true)
    .catch(() => false);
  if (alreadyRunning) return;

  server = spawn(process.execPath, ["scripts/serve.mjs"], {
    stdio: "inherit",
    env: { ...process.env, PORT: String(PORT) },
  });
  await new Promise((resolve) => setTimeout(resolve, 500));
}

export default defineConfig({
  e2e: {
    baseUrl: BASE_URL,
    supportFile: false,
    async setupNodeEvents(on, config) {
      await startServer();
      on("after:run", () => {
        server?.kill();
      });
      return config;
    },
  },
});
