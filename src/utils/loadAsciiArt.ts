export async function loadAsciiArt(filePath: string): Promise<string> {
	const response = await fetch(filePath);
	if (!response.ok) {
		throw new Error(`Failed to load ASCII art: ${response.statusText}`);
	}
	return await response.text();
}
