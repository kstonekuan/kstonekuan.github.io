use leptos::prelude::*;
use leptos::html::Dialog as HtmlDialog;

#[component]
pub fn Dialog(
    open: ReadSignal<bool>,
    on_close: Callback<()>,
    children: Children,
) -> impl IntoView {
    let dialog_ref = NodeRef::<HtmlDialog>::new();

    // Sync dialog open state with signal
    Effect::new(move |_| {
        if let Some(dialog) = dialog_ref.get() {
            if open.get() {
                let _ = dialog.show_modal();
            } else {
                dialog.close();
            }
        }
    });

    view! {
        <dialog
            node_ref=dialog_ref
            class="backdrop:bg-black/50 bg-transparent border-none p-0 max-w-4xl w-full"
            on:close=move |_| on_close.run(())
            on:click=move |ev| {
                // Close on backdrop click
                if let Some(dialog) = dialog_ref.get() {
                    let rect = dialog.get_bounding_client_rect();
                    let x = ev.client_x() as f64;
                    let y = ev.client_y() as f64;
                    if x < rect.left() || x > rect.right() || y < rect.top() || y > rect.bottom() {
                        on_close.run(());
                    }
                }
            }
        >
            <div class="relative">
                {children()}
                <button
                    type="button"
                    class="absolute top-4 right-4 rounded opacity-70 hover:opacity-100 text-white bg-black/50 w-8 h-8 flex items-center justify-center transition-opacity"
                    on:click=move |_| on_close.run(())
                >
                    <XIcon />
                    <span class="sr-only">"Close"</span>
                </button>
            </div>
        </dialog>
    }
}

#[component]
fn XIcon() -> impl IntoView {
    view! {
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="M6 6 18 18" />
        </svg>
    }
}
