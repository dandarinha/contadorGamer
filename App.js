//Importação para o menu lateral funcionar
import "react-native-gesture-handler";

//Importar o container da navegação
// ele controla todas as telas do app
import { NavigationContainer } from "@react-navigation/native";

// importar o menu lateral (DRAWER)
import { createDrawerNavigator } from "@react-navigation/drawer";

//Importar as telas
import Player01 from "./components/player01";
import Player02 from "./components/player02";


// Cria o Drawer
const Drawer = createDrawerNavigator();

// componente principal do APP
export default function APP() {
  // o que esta dentro do return aparece na tela
  return (
    // Container Principal da navegação
    <NavigationContainer>
      {/* menu lateral */}
      <Drawer.Navigator>
        {/* Tela do Jogador1 */}
        <Drawer.Screen
          // nome que aparece no menu
          name="Player 01"
          // componente que será aberto
          component={Player01}
        />
        <Drawer.Screen
          // nome que aparece no menu
          name="Player 02"
          // componente que será aberto
          component={Player02}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
