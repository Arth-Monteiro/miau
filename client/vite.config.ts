import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(), 
		svgr({ include: "**/*.svg" }),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@components": "/src/components",
			"@pages": "/src/pages",
			"@lib": "/src/lib",
			"@assets": "/src/assets",
		},
	},
});
