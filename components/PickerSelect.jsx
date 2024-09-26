import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerSelect = ({
  title,
  selectedValue,
  handleValueChange,
  items,
  otherStyles,
  mode = "dropdown", // You can use 'dropdown' or 'dialog'
  enabled = true, // To enable or disable the picker
  prompt = "", // Android specific: Text to show in the header of the dialog
  ...props
}) => {
  const pickerRef = useRef();

  const openPicker = () => {
    pickerRef.current.focus();
  };

  const displayColor = selectedValue ? "#000000" : "#7B7B8B";
  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className="text-base font-pmedium">{title}</Text>

      <TouchableOpacity
        className="w-full h-16 px-4 rounded-xl border-2 border-black focus:border-primary flex flex-row items-center"
        onPress={openPicker}
      >
        <Text className="flex-1  font-psemibold text-base" style={{ color: displayColor }}>
          {selectedValue
            ? items.find(item => item.value === selectedValue)?.label
            : "Select an option"}
        </Text>
      </TouchableOpacity>

      <Picker
        ref={pickerRef}
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
        enabled={enabled}
        mode={mode}
        prompt={prompt}
        style={{ display: "none" }} // Hides the Picker itself, only using it programmatically
        {...props}
      >
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default PickerSelect;
