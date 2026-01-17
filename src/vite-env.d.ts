/// <reference types="vite/client" />

declare module "*.txt?raw" {
	const content: string;
	export default content;
}

declare module "/ascii.txt?raw" {
	const content: string;
	export default content;
}
