var appServicios = angular.module("appServicios",[]);
//
// appServicios.provider("MiProveedor", function(){
//
//   this.$get = function()
//   {
//      return "ValorProvider";
//   };
// });

// appServicios.factory("MiProveedor", function(){
//    console.log("MiProveedor.$get() called");
//    return "Valor Fabrica";
//
// });

// function MyObject(){
//   this.getValue = function(){
//       return "Mi Valor del Objeto";
//   };
// };

// var MyObject = function(){
//   this.getValue = function(){
//       return "Mi Valor del Objeto";
//   };
// };

// appServicios.factory("MiProveedor", function(){
//   //  console.log("MiProveedor.$get() called");
//   //  return "Valor Fabrica";
//   //  console.log("Factory funcion  called");
//   //  return new MyObject;
//    console.log("Factory funcion  called");
//       // return new MyObject;
//    return new function(){
//      this.getValue = function(){
//          return "Mi Valor del Objeto";
//      };
//    };
// });


// appServicios.service("MiProveedor", function(){
//
//   this.getValue = function()
//   {
//       console.log("Service funcion  called");
//      return "ValorService";
//   };
// });

// appServicios.provider("MiProveedor", function(){
//   this.value = "Mi Valor";
//   this.setValue = function(newValue){
//     this.value = newValue;
//   };
//   this.$get = function(){
//     console.log("provider");
//     return this.value;
//   };
// });
//
// appServicios.config(function(MiProveedorProvider){
//   MiProveedorProvider.setValue("Nuevo Valor");
// });

// function Person(name)
// {
//   this.name = name;
// };
//
// appServicios.factory("MiProveedor", function(){
//   console.log("factory function called");
//   return new Person("Name Prueba");
// });

appServicios.value("MiProveedor","Value ... mi Valor");

appServicios.controller("MiControlador", function(MiProveedor){
  console.log("MiProveedor " + MiProveedor );
});

appServicios.controller("MiControlador2", function(MiProveedor){
  console.log("MiProveedor " + MiProveedor );
});
