import { reactive } from "vue";

// No transition to start, set default to true.



export const useTransitionComposable = () => {
  const transitionState = reactive({
    transitionComplete: false,
  });
  
  const toggleTransitionComplete = (value) => {
    transitionState.transitionComplete = value;
  };

  return {
    transitionState,
    toggleTransitionComplete,
  };
};
