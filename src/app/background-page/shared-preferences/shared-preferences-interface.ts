export abstract class SharedPreferences {

    abstract async load(key: string): Promise<any>

    abstract async store(key: string, jsonObject: any): Promise<void>
}
