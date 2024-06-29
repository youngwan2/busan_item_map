import { describe, vi, test, beforeEach, afterEach, expect } from 'vitest';
import { debounce } from '../helpers';

const mock = vi.fn(() => console.log('실행됨'));

/** 디바운스 함수 단위 테스트 */
describe('Debounce function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('1초가 지나기 전에는 함수가 호출되지 않는다..', () => {
    const debounceCloser = debounce(mock, 1000);
    debounceCloser(null);

    expect(mock).not.toHaveBeenCalled();

    vi.runAllTimers();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  test('1초가 지난 후 함수가 호출된다.', () => {
    const debounceCloser = debounce(mock, 1000);
    debounceCloser(null);
    vi.advanceTimersToNextTimer();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  test('1초 동안 여러번 호출해도 한 번만 호출된다.', () => {
    const debounceCloser = debounce(mock, 1000);
    debounceCloser(null);
    vi.advanceTimersByTime(500); // 500ms 후 호출
    debounceCloser(null);
    vi.advanceTimersByTime(500); // 500ms 후 호출

    expect(mock).not.toHaveBeenCalledTimes(1);

    debounceCloser(null);
    vi.advanceTimersByTime(1001); // 1001ms 후 호출

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
