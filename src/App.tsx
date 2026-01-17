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
			<main>
				{/* Responsive card container */}
				<div className="card-container p-4 sm:p-8">
					{/* ASCII Art Card */}
					<AsciiArtCard />

					{/* Main Introduction Card */}
					<div className="card main-card">
						<h1 className="mb-6 text-gray-800">Hey, Kingston here.</h1>
						<div className="space-y-4 text-gray-800">
							<p>
								I grew up in Singapore and was a Software Engineer at Jane
								Street, TikTok, and Verkada at some point.
							</p>
							<p>Building on my own right now, exciting things to come!</p>
						</div>
					</div>

					{/* Follow Card */}
					<div className="card social-card">
						<h2 className="mb-3 text-gray-800">Follow along</h2>
						<div className="flex items-center space-x-3">
							<a
								href="https://linkedin.com/in/kingston-kuan"
								target="_blank"
								rel="noopener"
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
								rel="noopener"
								className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 hover:bg-gray-100 transition-colors"
							>
								<img src="/GitHub_logo.svg" alt="GitHub" className="w-8 h-8" />
							</a>
							<a
								href="https://x.com/kstonekuan"
								target="_blank"
								rel="noopener"
								className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 hover:bg-gray-100 transition-colors"
							>
								<img src="/X_logo.svg" alt="X (Twitter)" className="w-8 h-8" />
							</a>
						</div>
					</div>

					{/* Tech Showcase Card */}
					<div className="card tech-card">
						<h2 className="mb-3 text-gray-800">
							Something cool from the latest in tech:
						</h2>
						<Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
							<DialogTrigger asChild>
								<button
									type="button"
									className="w-full h-32 overflow-hidden rounded border cursor-pointer hover:opacity-90 transition-opacity"
								>
									<ImageWithFallback
										webpSrc="/nano_banana_pro-400w.webp"
										src="/nano_banana_pro-400w.webp"
										srcSet="/nano_banana_pro-400w.webp 400w, /nano_banana_pro-800w.webp 800w"
										sizes="(max-width: 640px) 326px, 400px"
										alt="Nano Banana Pro"
										width={400}
										height={400}
										className="w-full h-full object-cover"
									/>
								</button>
							</DialogTrigger>
							<DialogContent className="max-w-4xl w-full p-0 border-none bg-transparent shadow-none">
								<DialogTitle className="sr-only">
									Nano Banana Pro - Full Size View
								</DialogTitle>
								<DialogDescription className="sr-only">
									Full size view of the nano banana pro example from the latest
									in tech
								</DialogDescription>
								<div className="relative">
									<ImageWithFallback
										webpSrc="/nano_banana_pro.webp"
										src="/nano_banana_pro.webp"
										alt="Nano Banana Pro - Full Size"
										width={2048}
										height={2048}
										className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
									/>
								</div>
							</DialogContent>
						</Dialog>
					</div>

					{/* Quotes Card */}
					<div className="card quotes-card">
						<h2 className="mb-4 text-gray-800">Quotes to live by:</h2>
						<div className="space-y-3 text-sm text-gray-800">
							<p>"Nothing good happens after 2 am"</p>
							<p>
								"When life gives you lemonade, make lemons. Life will be all
								like 'whaaaat?'"
							</p>
							<p>"Fun? I was never fun. You take that back."</p>
						</div>
					</div>

					{/* Projects Card */}
					<div className="card projects-card">
						<h2 className="mb-3 text-gray-800">Check these out</h2>
						<div className="space-y-3 text-sm text-gray-800">
							<div>
								<p className="text-gray-800">Tambourine</p>
								<p className="text-gray-800">
									Your personal voice interface into any app.
								</p>
								<a
									href="https://github.com/kstonekuan/tambourine-voice"
									target="_blank"
									rel="noopener"
									className="font-medium text-gray-800 hover:underline"
								>
									https://github.com/kstonekuan/tambourine-voice
								</a>
							</div>
							<div>
								<p className="text-gray-800">Simple Chromium AI</p>
								<p className="text-gray-800">
									Use local LLM in Chromium browsers.
								</p>
								<a
									href="https://github.com/kstonekuan/simple-chromium-ai"
									target="_blank"
									rel="noopener"
									className="font-medium text-gray-800 hover:underline"
								>
									https://github.com/kstonekuan/simple-chromium-ai
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
