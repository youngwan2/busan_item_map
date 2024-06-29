import { describe, beforeEach, it, expect, vi } from 'vitest';
import {
  StorageType,
  getLocalStorageItem,
  getSessionStorageItem,
  setStorage,
} from '../storage'; // 실제 경로로 수정하세요

/** 브라우저 로컬 스토로지 단위 테스트 */
describe('getLocalStorageItem', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('key 에 해당하는 아이템을 로컬 스토로지로 부터 가져온다.', () => {
    const key = 'testKey';
    const value = JSON.stringify({ data: 'testData' });
    localStorage.setItem(key, value);

    const retrievedValue = getLocalStorageItem(key);
    expect(retrievedValue).toBe(value);
  });

  it('key 에 해당하는 아이템이 존재하지 않으면 null 을 반환한다.', () => {
    const key = 'nonExistentKey';
    const retrievedValue = getLocalStorageItem(key);
    expect(retrievedValue).toBeNull();
  });

  it('null 을 반환하는 경우 에러가 throw 된다.', () => {
    const key = 'testKey';
    vi.spyOn(window.localStorage, 'getItem').mockImplementation(() => {
      throw new Error('Simulated error');
    });

    const retrievedValue = getLocalStorageItem(key);
    expect(retrievedValue).toBeNull();
  });
});

/** 브라우저 세션 스토로지 단위 테스트 */
describe('getSessionStorageItem', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('key에 해당하는 아이템을 세션 스토로지에 부터 가져온다.', () => {
    const key = 'testKey';
    const value = JSON.stringify({ data: 'testData' });
    sessionStorage.setItem(key, value);

    const retrievedValue = getSessionStorageItem(key);
    expect(retrievedValue).toBe(value);
  });

  it('key에 해당하는 아이템이 세션 스토로지에 없으면 null 을 반환한다.', () => {
    const key = 'nonExistentKey';
    const retrievedValue = getSessionStorageItem(key);
    expect(retrievedValue).toBeNull();
  });

  it('null을 반환하는 경우 에러가 throw 된다.', () => {
    const key = 'testKey';
    vi.spyOn(window.sessionStorage, 'getItem').mockImplementation(() => {
      throw new Error('Simulated error');
    });

    const retrievedValue = getSessionStorageItem(key);
    expect(retrievedValue).toBeNull();
  });
});

/** 브라우저 로컬/세션 스토로지 설정 함수 단위 테스트 */
describe('setStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('유효한 스토어 타입이 아니라면 에러를 반환한다.', () => {
    const key = 'testKey';
    const value = { data: 'textData' };

    expect(() =>
      setStorage({ type: 'INVAILD_TYPE' as StorageType, key, value }),
    ).toThrow('유효한 스토로지 타입이 아님');
  });
});
