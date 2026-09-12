/**
 * Odstráni úvodzovky, ktoré už sú súčasťou textu citátu — obal ich pridáva sám,
 * inak by sa v zobrazení zdvojili („„text““). Rieši slovenské typografické
 * („ “), rovné (") aj francúzske (» «) úvodzovky na okrajoch reťazca.
 */
export function bezUvodzoviek(text: string): string {
  return text
    .trim()
    .replace(/^[„“"'»]+/, '')
    .replace(/[„“"'«]+$/, '')
    .trim()
}
