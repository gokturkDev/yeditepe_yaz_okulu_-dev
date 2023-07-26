export function togglePlayButton(doc) {
    const buttons = Array.from(doc.children);
    buttons.forEach(button => button.classList.toggle('hidden'))
}