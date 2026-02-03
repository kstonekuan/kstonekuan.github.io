use leptos::prelude::*;

#[component]
pub fn AsciiArtCard(
    content: &'static str,
    #[prop(default = "")]
    class: &'static str,
) -> impl IntoView {
    let combined_class = if class.is_empty() {
        "card ascii-card".to_string()
    } else {
        format!("card ascii-card {}", class)
    };

    view! {
        <div class=combined_class>
            <div class="ascii-art-container">
                <pre class="ascii-art">{content}</pre>
            </div>
        </div>
    }
}
