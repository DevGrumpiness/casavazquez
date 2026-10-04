interface FeatureFlags {
  chatbot: {
    enabled: boolean;
  };
}

// Sommelier-Chat: per VITE_ENABLE_CHATBOT=false in website/.env abschaltbar.
export const features: FeatureFlags = {
  chatbot: {
    enabled: import.meta.env.VITE_ENABLE_CHATBOT !== 'false',
  },
};
