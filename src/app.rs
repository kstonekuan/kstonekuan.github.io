use crate::components::{AsciiArtCard, Dialog, ImageWithFallback};
use leptos::prelude::*;

// Embed ASCII art at compile time (replaces Vite's ?raw import)
const ASCII_ART: &str = include_str!("../public/ascii.txt");

#[component]
pub fn App() -> impl IntoView {
    // Signal replaces useState
    let (is_modal_open, set_modal_open) = signal(false);

    view! {
        <div class="min-h-screen bg-gray-50">
            <main>
                // Responsive card container
                <div class="card-container p-4 sm:p-8">
                    // ASCII Art Card
                    <AsciiArtCard content=ASCII_ART />

                    // Main Introduction Card
                    <div class="card main-card">
                        <h1 class="mb-6 text-gray-800">"Hey, Kingston here."</h1>
                        <div class="space-y-4 text-gray-800">
                            <p>
                                "I grew up in Singapore and was a Software Engineer at Jane Street, TikTok, and Verkada at some point."
                            </p>
                            <p>"Building on my own right now, exciting things to come!"</p>
                        </div>
                    </div>

                    // Follow Card
                    <div class="card social-card">
                        <h2 class="mb-3 text-gray-800">"Follow along"</h2>
                        <div class="flex items-center space-x-3">
                            <SocialLink
                                href="https://linkedin.com/in/kingston-kuan"
                                icon="/public/LinkedIn_logo.svg"
                                alt="LinkedIn"
                            />
                            <SocialLink
                                href="https://github.com/kstonekuan"
                                icon="/public/GitHub_logo.svg"
                                alt="GitHub"
                            />
                            <SocialLink
                                href="https://x.com/kstonekuan"
                                icon="/public/X_logo.svg"
                                alt="X (Twitter)"
                            />
                        </div>
                    </div>

                    // Tech Showcase Card
                    <div class="card tech-card">
                        <h2 class="mb-3 text-gray-800">
                            "Something cool from the latest in tech:"
                        </h2>
                        <button
                            type="button"
                            class="w-full h-32 overflow-hidden rounded border cursor-pointer hover:opacity-90 transition-opacity"
                            on:click=move |_| set_modal_open.set(true)
                        >
                            <ImageWithFallback
                                webp_src="/public/nano_banana_pro-400w.webp"
                                src="/public/nano_banana_pro-400w.webp"
                                srcset="/public/nano_banana_pro-400w.webp 400w, /public/nano_banana_pro-800w.webp 800w"
                                sizes="(max-width: 640px) 326px, 400px"
                                alt="Nano Banana Pro"
                                class="w-full h-full object-cover"
                            />
                        </button>

                        <Dialog
                            open=is_modal_open
                            on_close=Callback::new(move |()| set_modal_open.set(false))
                        >
                            <ImageWithFallback
                                webp_src="/public/nano_banana_pro.webp"
                                src="/public/nano_banana_pro.webp"
                                alt="Nano Banana Pro - Full Size"
                                class="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                            />
                        </Dialog>
                    </div>

                    // Quotes Card
                    <div class="card quotes-card">
                        <h2 class="mb-4 text-gray-800">"Quotes to live by:"</h2>
                        <div class="space-y-3 text-sm text-gray-800">
                            <p>"\"Nothing good happens after 2 am\""</p>
                            <p>"\"When life gives you lemonade, make lemons. Life will be all like 'whaaaat?'\""</p>
                            <p>"\"Fun? I was never fun. You take that back.\""</p>
                        </div>
                    </div>

                    // Projects Card
                    <div class="card projects-card">
                        <h2 class="mb-3 text-gray-800">"Check these out"</h2>
                        <div class="space-y-3 text-sm text-gray-800">
                            <ProjectItem
                                title="Tambourine"
                                description="Your personal voice interface into any app."
                                url="https://github.com/kstonekuan/tambourine-voice"
                            />
                            <ProjectItem
                                title="Simple Chromium AI"
                                description="Use local LLM in Chromium browsers."
                                url="https://github.com/kstonekuan/simple-chromium-ai"
                            />
                            <ProjectItem
                                title="Blog"
                                description="My adventures in tech."
                                url="https://kingstonkuan.com/blog"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    }
}

#[component]
fn SocialLink(href: &'static str, icon: &'static str, alt: &'static str) -> impl IntoView {
    view! {
        <a
            href=href
            target="_blank"
            rel="noopener"
            class="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 hover:bg-gray-100 transition-colors"
        >
            <img src=icon alt=alt class="w-8 h-8" />
        </a>
    }
}

#[component]
fn ProjectItem(title: &'static str, description: &'static str, url: &'static str) -> impl IntoView {
    view! {
        <div>
            <p class="text-gray-800">{title}</p>
            <p class="text-gray-800">{description}</p>
            <a
                href=url
                target="_blank"
                rel="noopener"
                class="font-medium text-gray-800 hover:underline"
            >
                {url}
            </a>
        </div>
    }
}
