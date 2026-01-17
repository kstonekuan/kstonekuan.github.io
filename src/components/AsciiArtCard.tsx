import { useEffect, useState } from "react";
import { loadAsciiArt } from "../utils/loadAsciiArt";

interface AsciiArtCardProps {
	filePath: string;
	className?: string;
}

export function AsciiArtCard({ filePath, className = "" }: AsciiArtCardProps) {
	const [asciiArt, setAsciiArt] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		loadAsciiArt(filePath)
			.then((art) => {
				setAsciiArt(art);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, [filePath]);

	if (isLoading) {
		return (
			<div className={`card ascii-card min-h-[200px] ${className}`}>
				<div className="text-center text-gray-700">Loading...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className={`card ascii-card min-h-[200px] ${className}`}>
				<div className="text-center text-gray-700">
					Failed to load ASCII art
				</div>
			</div>
		);
	}

	return (
		<div className={`card ascii-card ${className}`}>
			<div className="ascii-art-container">
				<pre className="ascii-art">{asciiArt}</pre>
			</div>
		</div>
	);
}
