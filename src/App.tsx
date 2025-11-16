import { useState } from "react";
import { AsciiArtCard } from "./components/AsciiArtCard";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "./components/ui/dialog";

export default function App() {
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Responsive card container */}
			<div className="card-container p-4 sm:p-8">
				{/* ASCII Art Card */}
				<AsciiArtCard filePath="/ascii.txt" />

				{/* Main Introduction Card */}
				<div className="card main-card">
					<h1 className="mb-6 text-gray-800">Hey, Kingston here.</h1>
					<div className="space-y-4 text-gray-700">
						<p>
							I grew up in Singapore and was a Software Engineer at Jane Street,
							TikTok, and Verkada at some point.
						</p>
						<p>
							Focusing on startup building right now, exciting things to come!
						</p>
					</div>
				</div>

				{/* Follow Card */}
				<div className="card social-card">
					<h4 className="mb-3 text-gray-800">Follow along</h4>
					<div className="flex items-center space-x-3">
						<a
							href="https://linkedin.com/in/kingston-kuan"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 hover:bg-gray-100 transition-colors"
						>
							<img
								src="/LinkedIn_logo.svg"
								alt="LinkedIn"
								className="w-8 h-8"
							/>
						</a>
						<a
							href="https://github.com/kstonekuan"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 hover:bg-gray-100 transition-colors"
						>
							<img src="/GitHub_logo.svg" alt="GitHub" className="w-8 h-8" />
						</a>
						<a
							href="https://x.com/kstonekuan"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 hover:bg-gray-100 transition-colors"
						>
							<img src="/X_logo.svg" alt="X (Twitter)" className="w-8 h-8" />
						</a>
					</div>
				</div>

				{/* Tech Showcase Card */}
				<div className="card tech-card">
					<h4 className="mb-3 text-gray-800">
						Something cool from the latest in tech:
					</h4>
					<Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
						<DialogTrigger asChild>
							<div className="w-full h-32 overflow-hidden rounded border cursor-pointer hover:opacity-90 transition-opacity">
								<ImageWithFallback
									webpSrc="/nano_banana_figurine.webp"
									src="/nano_banana_figurine.png"
									alt="Nano Banana Figurine"
									className="w-full h-full object-cover"
								/>
							</div>
						</DialogTrigger>
						<DialogContent className="max-w-4xl w-full p-0 border-none bg-transparent shadow-none">
							<DialogTitle className="sr-only">
								Nano Banana Figurine - Full Size View
							</DialogTitle>
							<DialogDescription className="sr-only">
								Full size view of the nano banana figurine from the latest in
								tech
							</DialogDescription>
							<div className="relative">
								<ImageWithFallback
									webpSrc="/nano_banana_figurine.webp"
									src="/nano_banana_figurine.png"
									alt="Nano Banana Figurine - Full Size"
									className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
								/>
							</div>
						</DialogContent>
					</Dialog>
				</div>

				{/* Quotes Card */}
				<div className="card quotes-card">
					<h3 className="mb-4 text-gray-800">Quotes to live by:</h3>
					<div className="space-y-3 text-sm text-gray-700">
						<p>"Nothing good happens after 2 am"</p>
						<p>
							"When life gives you lemonade, make lemons. Life will be all like
							'whaaaat?'"
						</p>
						<p>
							"With all due respect, I am gonna completely ignore everything you
							just said."
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
