export function langColorMap(lang: string) {
  const colorMap = {
    html: "#e34c26",
    css: "#563d7c",
    ruby: "#701516",
    javascript: "#f1e05a",
    elixir: "#6e4a7e",
    go: "#00ADD8"
  };
  return colorMap[lang.toLowerCase()] || "#CCCCCC";
}

export function kFormatter(num: number) {
  return Math.abs(num) > 999
    ? `${Math.sign(num) * parseInt((Math.abs(num) / 1000).toFixed(1))}k`
    : Math.sign(num) * Math.abs(num);
}
