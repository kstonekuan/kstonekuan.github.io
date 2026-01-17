import asciiArtContent from "/ascii.txt?raw";

interface AsciiArtCardProps {
	className?: string;
}

export function AsciiArtCard({ className = "" }: AsciiArtCardProps) {
	return (
		<div className={`card ascii-card ${className}`}>
			<div className="ascii-art-container">
				<pre className="ascii-art">{asciiArtContent}</pre>
			</div>
		</div>
	);
}
