export default class ChunkArray<T> {

    private chunkArray: Array<Array<T>>

    private perChunk: number

    private inputArray: Array<T>

    constructor(array: Array<T>) {
        this.inputArray = array ? array : []

    }

    createChunks(perChunk: number): Array<Array<T>> {
        this.perChunk = perChunk
        this.chunkArray = new Array<Array<T>>()
        this.inputArray.forEach(this.makeChunks.bind(this))
        return this.chunkArray
    }


    private makeChunks(value: T, index: number) {
        const chunkIndex = Math.floor(Number(index) / this.perChunk)

        if (!this.chunkArray[chunkIndex]) {
            this.chunkArray[chunkIndex] = new Array<T>()
        }
        this.chunkArray[chunkIndex].push(value)

    }


}
