import { readonly } from '#imports';

export default function useTransition() {
  // No transition to start, set default to true.
  const transitionComplete = useState('transitionFlag', () => false);

  const toggleTransitionComplete = (value) => {
    console.log('toggleTransitionComplete with value, ', value);
    transitionComplete.value = value;
  };

  return {
    transitionComplete: readonly(transitionComplete),
    toggleTransitionComplete,
  };
}
