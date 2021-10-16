const generateTab = () => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
  const lignes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

  return letters.map(lettre => [lignes.map(ligne => `${lettre}${ligne}`)])
}

export default generateTab
