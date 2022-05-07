function addToCart(productid, quantity) {
    if (quantity === undefined) {
        quantity = 1;
    }
    var ps = [];
    if (sessionStorage.getItem("cart") == null) {
        ps = [{ productId: productid, quantity: quantity }];
    } else {
        ps = JSON.parse(sessionStorage.getItem("cart"));
        dup = ps.findIndex(e => e.productId == productid);
        if (dup >= 0) ps[dup] = { productId: productid, quantity: quantity + ps[dup].quantity };
        else ps.push({ productId: productid, quantity: quantity });
    }
    sessionStorage.setItem("cart", JSON.stringify(ps));

    console.log(JSON.parse(sessionStorage.getItem("cart")));
    var index = getProductIndex(productid);
    alert(productArray[index].name + " \n đã được thêm vào giỏ hàng!");
}

function getCart() {
    return JSON.parse(sessionStorage.getItem("cart"));
}