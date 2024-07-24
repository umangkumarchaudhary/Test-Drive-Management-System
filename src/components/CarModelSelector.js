import React from 'react';

const CarModelSelector = ({ selectedModel, setSelectedModel, availableModels }) => {
  return (
    <div>
      <label htmlFor="carModel">Select Car Model:</label>
      <select
        id="carModel"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        {availableModels.map((model) => (
          <option key={model.name} value={model.name} disabled={!model.available}>
            {model.name} {model.available ? '' : '(Unavailable)'}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CarModelSelector;
