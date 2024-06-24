

export enum StorageType {
    LOCAL = 'LOCAL',
    SESSION = 'SESSION'
}
interface SetStorageType {
    type: StorageType
    key: string
    value: any
}

/** 브라우저 캐싱 */
export function setStorage({ type, key, value }: SetStorageType) {
    try {
        const serializedValue = JSON.stringify(value);

        if (type === StorageType.LOCAL) {
            window.localStorage.setItem(key, serializedValue);
        } else if (type === StorageType.SESSION) {
            window.sessionStorage.setItem(key, serializedValue);
        } else {
            throw new Error('유효한 스토로지 타입이 아님');
        }
    } catch (error) {
        console.error('set Storage 실패:', error);
        throw error;
    }
}


export function getLocalStorageItem(key: string): string | null {
    try {
        return window.localStorage.getItem(key);
    } catch (error) {
        console.error('get Storage 실패:', error);
        return null;
    }
}

export function getSessionStorageItem(key: string): string | null {
    try {
        return window.sessionStorage.getItem(key);
    } catch (error) {
        console.error('get Storage 실패:', error);
        return null;
    }
}


/**
 * 스토로지에 저장된 데이터를 읽어온다.
 * @param type 스토로지 타입
 * @param key 스토로지에 저장된 데이터의 키
 * @returns 데이터 반환
 */
export function getStoreage(type: StorageType, key: string) {
    try {
        if (type === StorageType.LOCAL) {
            const value = getLocalStorageItem(key)
            if (value) return JSON.parse(value)

        }
        if (type === StorageType.SESSION) {
            const value = getSessionStorageItem(key)
            if (value) return JSON.parse(value)
        }

        throw new Error(`현재 저장소에 존재하지 않는 키를 전달하였습니다. 전달된 키는 "${key}" 입니다.`)
    } catch {
        // console.error(error)
        return ''
    }





}