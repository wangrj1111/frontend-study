// src/composables/useDarkMode.ts
import { useDark, useToggle } from '@vueuse/core';

export function useDarkMode() {
  const isDark = useDark();
  const toggleDarkMode = useToggle(isDark);

  // 使主题切换立即生效
  toggleDarkMode(isDark.value ? false : true);

  return { isDark, toggleDarkMode };
}