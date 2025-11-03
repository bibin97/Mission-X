// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // ✅ Resolve clean import aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },

  // ✅ Local development server
  server: {
    port: 3000,
    strictPort: true, // Exit if port is taken
    open: true, // Auto-open browser
    host: true, // Expose to LAN (for testing on mobile)
  },

  // ✅ Production build optimization
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // ✅ FIXED: function-based manualChunks for Vite 5+ / Rollup 3+
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },

  // ✅ Optional preview config for "vite preview"
  preview: {
    port: 4173,
    open: true,
  },
});
