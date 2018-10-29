function Model() {
  this.accelerometer = {
    x : ko.observable(0.0),
    y : ko.observable(0.0),
    z : ko.observable(0.0)
  };

  this.location = {
    latitude : ko.observable(47.480433),
    longitude : ko.observable(19.067104)
  };
}