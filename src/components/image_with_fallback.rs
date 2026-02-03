use leptos::prelude::*;

const ERROR_IMG_SRC: &str = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

#[component]
pub fn ImageWithFallback(
    src: &'static str,
    alt: &'static str,
    #[prop(optional)] webp_src: Option<&'static str>,
    #[prop(optional)] srcset: Option<&'static str>,
    #[prop(optional)] sizes: Option<&'static str>,
    #[prop(default = "")] class: &'static str,
) -> impl IntoView {
    let (did_error, set_did_error) = signal(false);

    let error_fallback = {
        let class = class.to_string();
        move || {
            let fallback_class =
                format!("inline-block bg-gray-100 text-center align-middle {class}");
            view! {
                <div class=fallback_class>
                    <div class="flex items-center justify-center w-full h-full">
                        <img src=ERROR_IMG_SRC alt="Error indicator" />
                    </div>
                </div>
            }
        }
    };

    view! {
        <Show
            when=move || !did_error.get()
            fallback=error_fallback
        >
            {match webp_src {
                Some(webp) => {
                    let srcset_value = srcset.unwrap_or(webp);
                    let sizes_value = sizes.unwrap_or("");
                    view! {
                        <picture class="block w-full h-full">
                            <source
                                srcset=srcset_value
                                type="image/webp"
                                sizes=sizes_value
                            />
                            <img
                                src=src
                                alt=alt
                                class=class
                                loading="lazy"
                                decoding="async"
                                on:error=move |_| set_did_error.set(true)
                            />
                        </picture>
                    }.into_any()
                },
                None => view! {
                    <img
                        src=src
                        alt=alt
                        class=class
                        loading="lazy"
                        decoding="async"
                        on:error=move |_| set_did_error.set(true)
                    />
                }.into_any(),
            }}
        </Show>
    }
}
