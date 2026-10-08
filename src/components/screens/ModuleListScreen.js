import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules";
import ModuleList from "../entities/modules/ModuleList";

// Initialisations --------
const modules = initialModules;
// State ----------
// Handlers -----------
const handleSelect = (module) => alert(`Item ${module.ModuleCode} selected`);
// View -------------
const ModuleListScreen = () => {
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
