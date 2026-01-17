import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/",
	plugins: [react(), tailwindcss()],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		target: "esnext",
		outDir: "build",
		minify: "terser",
		terserOptions: {
			compress: {
				drop_console: true,
			},
		},
		rollupOptions: {
			output: {
				manualChunks: {
					"react-vendor": ["react", "react-dom"],
					"radix-vendor": ["@radix-ui/react-dialog", "@radix-ui/react-slot"],
				},
			},
		},
	},
	server: {
		port: 3000,
		open: true,
	},
});
