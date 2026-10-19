import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entities/modules/ModuleList";
import RendderCount from "../UI/RenderCount";

import initialModules from "../../data/modules";
import RenderCount from "../UI/RenderCount";

const ModuleListScreen = ({ navigation, route }) => {
  // Initialisations --------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  // State ----------
  const [modules, setModules] = useState(initialModules);
  // Handlers -----------
  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete });
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };
  // View -------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
