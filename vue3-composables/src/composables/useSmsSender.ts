import { ref } from 'vue';

interface SmsSenderOptions {
  delay?: number;
  successRate?: number;
}

export function useSmsSender(options?: SmsSenderOptions) {
  const smsStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle');
  const smsError = ref<string | null>(null);

  const sendSms = async (phoneNumber: string, message: string): Promise<void> => {
    if (!phoneNumber || !message) {
      throw new Error('Phone number and message are required');
    }

    smsStatus.value = 'sending';
    smsError.value = null;

    try {
      // 模拟网络延迟
      const delay = options?.delay ?? 1500;
      await new Promise((resolve) => setTimeout(resolve, delay));

      // 模拟发送成功率
      if (options?.successRate !== undefined && Math.random() * 100 > options.successRate) {
        throw new Error('Failed to send SMS');
      }

      smsStatus.value = 'success';
    } catch (error: any) {
      smsStatus.value = 'error';
      smsError.value = error instanceof Error ? error.message : 'An unknown error occurred';
    } finally {
      // 重新设置为idle状态
      setTimeout(() => {
        smsStatus.value = 'idle';
      }, 3000);
    }
  };

  return { sendSms, smsStatus, smsError };
}