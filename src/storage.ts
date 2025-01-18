type StorageKey = 'GoalGoblin_userCharacter' | 'GoalGoblin_backpack' | 'GoalGoblin_activeQuest';

export const Storage = {
    set: <T>(key: StorageKey, value: T): Promise<void> => {
        return new Promise((resolve, reject) => {
            chrome.storage.local.set({ [key]: value }, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            })
        });
    },
    get: <T>(key: StorageKey): Promise<T | undefined> => {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get([key], (result) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(result[key] as T);
                }
            });
        });
    },

    remove: (key: StorageKey): Promise<void> => {
        return new Promise((resolve, reject) => {
            chrome.storage.local.remove([key], () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });
    }
}