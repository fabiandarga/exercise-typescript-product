const Categories = [ 'hardware', 'software', 'merchandise'];

export default class Product {
    name;
    price;
    description;
    category;

    constructor(name, price, description, category) {
        if (typeof name !== 'string') {
            throw new Error('Illegal type: "name" must be a string');
        }
        if (typeof price !== 'number') {
            throw new Error('Illegal type: "price" must be a number');
        }
        if (typeof description !== 'string') {
            throw new Error('Illegal type: "description" must be a string');
        }
        if (typeof category !== 'string') {
            throw new Error('Illegal type: "category" must be a string');
        }
        if (!Categories.includes(category)) {
            throw new Error('Illegal type: "category" must be one of ' + Categories.join(', '));
        }
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
    }
}