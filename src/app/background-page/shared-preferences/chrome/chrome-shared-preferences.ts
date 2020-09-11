import {SharedPreferences} from "../shared-preferences-interface"

export class ChromeSharedPreferences extends SharedPreferences {
    async load(key: string): Promise<any> {
        return new Promise<any>(resolve => {
            chrome.storage.local.get([key], (result: any) => {
                resolve(result[key])
            })
        })


    }

    async store(key: string, jsonObject: any): Promise<void> {

        return new Promise<void>(resolve => {
            chrome.storage.local.set({[key]: jsonObject}, () => {
                resolve()
            })
        })


    }

}
