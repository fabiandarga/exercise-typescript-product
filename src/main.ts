import Product from "./Product";

function main() {
    const product = new Product("Razer One Keyboard", "Best gaming keyboard. High speed.", 49.99, "Gaming");

    console.log(`[${product.category}] ${product.name} - ${product.description} : ${product.price}`);
}

main();