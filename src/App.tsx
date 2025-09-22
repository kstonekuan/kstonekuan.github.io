import { Github, Linkedin, Twitter } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Responsive card container */}
      <div className="card-container p-4 sm:p-8">

        {/* Quotes Card */}
        <div className="card quotes-card">
          <h3 className="mb-4 text-gray-800">Quotes to live by:</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p>"Nothing good happens after 2 am"</p>
            <p>"When life gives you lemonade, make lemons. Life will be all like 'whaaaat?'"</p>
            <p>"With all due respect, I am gonna completely ignore everything you just said."</p>
          </div>
        </div>

        {/* Main Introduction Card */}
        <div className="card main-card">
          <h1 className="mb-6 text-gray-800">Hey, Kingston Kuan here.</h1>
          <div className="space-y-4 text-gray-700">
            <p>I grew up in Singapore and was a Software Engineer at Jane Street, TikTok, and Verkada at some point.</p>
            <p>Focusing on startup building right now, exciting things to come!</p>
          </div>
        </div>

        {/* Follow Card */}
        <div className="card social-card">
          <h4 className="mb-3 text-gray-800">Follow along</h4>
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Linkedin className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Github className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Twitter className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Tech Showcase Card */}
        <div className="card tech-card">
          <h4 className="mb-3 text-gray-800">Something cool from the latest in tech:</h4>
          <div className="w-full h-32 overflow-hidden rounded border">
            <ImageWithFallback
              src="/nano_banana_figurine.png"
              alt="Nano Banana Figurine"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}