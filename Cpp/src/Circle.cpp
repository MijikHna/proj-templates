#include "Circle.hpp"
#include <math.h>

Circle::Circle(string color, double radius): Figure(color), radius(radius) {}

Circle::~Circle(){}

double Circle::getArea() {
  return M_PI * this->radius * this->radius;
}
