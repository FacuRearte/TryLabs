const express = require("express");
const router = express.Router();

// Controllers
const clienteController = require("../controllers/clienteController");
const productosController = require("../controllers/productosController");
const pedidosController = require("../controllers/pedidosController");

module.exports = function () {
  // agregar clientes POST
  router.post("/clientes", clienteController.nuevoCliente);

  // obtener todos los clientes
  router.get("/clientes", clienteController.mostrarClientes);

  // obtener cliente en específico
  router.get("/clientes/:idCliente", clienteController.mostrarCliente);

  // actualizar datos de cliente
  router.put("/clientes/:idCliente", clienteController.actualizarCliente);

  // eliminar un cliente
  router.delete("/clientes/:idCliente", clienteController.eliminarCliente);

  // PRODUCTOS //

  // agregar productos
  router.post(
    "/productos",
    productosController.subirArchivo,
    productosController.nuevoProducto
  );

  // muestra todos los productos
  router.get("/productos", productosController.mostrarProductos);

  // mostrar producto en especifico por ID
  router.get("/productos/:idProducto", productosController.mostrarProducto);

  // actualizar Productos
  router.put(
    "/productos/:idProducto",
    productosController.subirArchivo,
    productosController.actualizarProducto
  );

  // eliminar Productos
  router.delete("/productos/:idProducto", productosController.eliminarProducto);

  // PEDIDOS //

  // agrega nuevos pedidos
  router.post("/pedidos", pedidosController.nuevoPedido);

  // mostrar todos los pedidos
  router.get("/pedidos", pedidosController.mostrarPedidos);

  // mostrar un pedido por su ID
  router.get("/pedidos/:idPedido", pedidosController.mostrarPedido);

  // actualizar pedidos
  router.put("/pedidos/:idPedido", pedidosController.actualizarPedido);

  // eliminar pedido
  router.delete("/pedidos/:idPedido", pedidosController.eliminarPedido);

  return router;
};
