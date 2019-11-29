export const productColourSelector = (colour, products) => {
    if (!colour || colour === "all") {
        return products;
    }
    return products.filter(product => {
        return product['colour'] === colour;
    });
};
