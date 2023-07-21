import React from "react";
import LanguageSelectorLogic from "./LanguageSelector.logic";
import { Select } from "@components/_exports";

const LanguageSelector = () => {
  const { language, onLanguageChange } = LanguageSelectorLogic();
  return (
    <Select
      width="120px"
      value={language}
      onChange={onLanguageChange}
      options={[
        { value: "es", label: "Spanish" },
        { value: "en", label: "English" },
      ]}
    />
  );
};

export default LanguageSelector;
