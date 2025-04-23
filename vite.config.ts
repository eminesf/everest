/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const isTest = mode === "test";

  return {
    base: "/everest/",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    ...(isTest && {
      test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./src/setupTests.ts",
      },
    }),
  };
});
