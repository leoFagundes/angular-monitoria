type FeijoadaProps = (ingredientes: string) => void;
type IngredientesProps = (ingredientes: string[]) => string;

const feijoada: FeijoadaProps = (ingredientes) => {
  console.log(`A feijoada com: ${ingredientes} está pronta!`);
};

const adicionarIngrediente: IngredientesProps = (ingredientes) => {
  return ingredientes.join(", ");
};

feijoada(adicionarIngrediente(["Feijão", "Arroz", "Laranja"]));
