import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules";
import ModuleItem from "../entities/modules/ModuleItem";

// Initialisations --------
const modules = initialModules;
// State ----------
// Handlers -----------
const handleSelect = () => alert("Item selected");
// View -------------
const ModuleListScreen = () => {
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return (
            <ModuleItem
              key={module.ModuleCode}
              module={module}
              onSelect={handleSelect}
            />
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
