export declare class Cloneable {
    /**
     * Clone a model instance
     *
     * @param {Partial<T>} partial
     * @return {Model}
     */
    static clone<T extends Cloneable>(partial: Partial<T>): Cloneable;
}
