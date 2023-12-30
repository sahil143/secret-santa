import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import postcssJitProps from "postcss-jit-props";
import postcssNesting from "postcss-nesting";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssNesting(),
        postcssJitProps({
          files: [
            path.resolve(
              __dirname,
              "node_modules/open-props/open-props.min.css"
            ),
          ],
        }),
      ],
    },
  },
  assetsInclude: ["/sb-preview/runtime.js"],
  plugins: [react()],
});
