import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['/sb-preview/runtime.js'],
  plugins: [react()],
});
