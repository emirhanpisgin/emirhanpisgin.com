import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
        name: "Emirhan Pişgin",
        short_name: "Emirhan",
        description: "Self-Study Web Developer from Turkey",
        lang: "en",
		start_url: "/",
		display: "standalone",
		background_color: "#070707",
		theme_color: "#fff",
		icons: [
			{ src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
			{ src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
		],
	};
}
