function calcTextSize(c: CanvasRenderingContext2D | OffscreenRenderingContext | null, text: string, font?: string) {
  const canvas = new OffscreenCanvas(100, 100);
  const ctx = canvas.getContext("2d");
  const calcCtx = (c || ctx) as CanvasRenderingContext2D;
  calcCtx.save();
  calcCtx.font = font || '60px ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';
  const textMetrics = calcCtx.measureText(text);
  const textWidth = textMetrics.actualBoundingBoxLeft + textMetrics.actualBoundingBoxRight;
  const textHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
  const lineHeight = textMetrics.fontBoundingBoxAscent + textMetrics.fontBoundingBoxDescent;
  calcCtx.restore();

  return {
    // 如果 textWidth 为 0，说明 text 为空字符串，此时使用 textMetrics.width 作为宽度
    width: textWidth || textMetrics.width,
    height: textHeight,
    lineHeight,
  };
}

export { calcTextSize };
