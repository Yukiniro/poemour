function calcTextSize(
  text: string,
  style: { fontFamily: string; fontSize: string; fontWeight: string; fontStyle: string; lineHeight: string },
) {
  const box = document.createElement("div");
  box.style.position = "absolute";
  box.style.visibility = "hidden";
  box.style.display = "inline-block";
  box.style.fontFamily = style.fontFamily;
  box.style.fontSize = style.fontSize;
  box.style.fontWeight = style.fontWeight;
  box.style.fontStyle = style.fontStyle;
  box.style.lineHeight = style.lineHeight;
  box.innerHTML = text;
  document.body.appendChild(box);
  const { width, height } = box.getBoundingClientRect();
  document.body.removeChild(box);
  return { width, height };
}

export { calcTextSize };
