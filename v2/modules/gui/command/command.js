export function togglePlayButton(doc) {
    const buttons = Array.from(doc.children);
    buttons.forEach(button => button.classList.toggle('hidden'))
}




export function getPlayButtonHTMLElement(){
	return document.getElementById("fake-player");
}