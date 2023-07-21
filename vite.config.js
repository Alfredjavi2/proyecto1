import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

import aliases from "./aliases";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Aliases configuration
    alias: Object.keys(aliases).map((k) => ({
      find: k,
      replacement: path.resolve(__dirname, aliases[k]),
    })),
  },
});
