// Placeholder for API calls
// These functions can be implemented to make actual API calls once the backend is ready

export const fetchAvailableModels = async (date, time) => {
    // Implement API call to fetch available car models for the given date and time
    return [
      { name: 'A200', available: true },
      { name: 'C200', available: true },
      { name: 'C200d', available: false },
    ];
  };
  
  export const scheduleTestDrive = async (date, time, model) => {
    // Implement API call to schedule a test drive
    return { success: true };
  };
  