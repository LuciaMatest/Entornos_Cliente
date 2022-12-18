export class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    }

    agregarProducto(producto) {
        if (this.contadorProductosAgregados < Orden.MAX_PRODUCTOS) {
            this.productos.push(producto);
            this.contadorProductosAgregados++;
        } else {
            console.log('Como máximo se pueden ordenar ' + Orden.MAX_PRODUCTOS + ' productos.');
        }
    }

    //no se porque no me pone el total...
    calcularTotal() {
        let precioTotal;
        precioTotal = this.productos.reduce((total, producto) =>
            total += producto.precio, 0);
        return precioTotal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    }

    mostrarOrden() {
        return `
______________________________
Orden : ${this.idOrden.toString().padStart(3, "0")}
        ${this.productos.reduce((nombre, producto) => nombre += `
        ${producto.toString()}`)}
------------------------------
Total: ${this.calcularTotal()}`;
    }
}
