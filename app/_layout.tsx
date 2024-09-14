import { Stack } from "expo-router";
import CadastroProduto from "./Componentes/Adaptadores/CadastroProduto";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"teste"}}  />
      <Stack.Screen name="cadastro"   />
    </Stack>
  );
}
