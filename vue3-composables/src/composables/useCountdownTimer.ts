import { ref, Ref } from 'vue';


interface UseCountdownTimer {
  timeLeft: Ref<number>;
  isFinished: Ref<boolean>;
  start: () => void;
  stop: () => void;
}

export function useCountdownTimer(duration: number): UseCountdownTimer {
  const timeLeft = ref(duration);
  const isFinished = ref(false);
  let intervalId: number | undefined;

  const start = () => {
    if (intervalId !== undefined) {
      return; // 如果定时器已经在运行，则不做任何操作
    }
    intervalId = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        clearInterval(intervalId as number);
        intervalId = undefined;
        isFinished.value = true;
      }
    }, 1000);
  };

  const stop = () => {
    if (intervalId !== undefined) {
      clearInterval(intervalId as number);
      intervalId = undefined;
    }
  };

  return { timeLeft, isFinished, start, stop };
}