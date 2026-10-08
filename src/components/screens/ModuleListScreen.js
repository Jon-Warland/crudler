import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entities/modules/ModuleList";
import RendderCount from "../UI/RenderCount";

import initialModules from "../../data/modules";
import RenderCount from "../UI/RenderCount";

const ModuleListScreen = () => {
  // Initialisations --------
  // State ----------
  const [modules, setModules] = useState(initialModules);
  // Handlers -----------
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  // View -------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
