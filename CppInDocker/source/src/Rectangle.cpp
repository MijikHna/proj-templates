#include "../include/Rectangle.hpp"

Rectangle::Rectangle(string color, double width, double height)
    : Figure(color), width(width), height(height) {}

Rectangle::~Rectangle() {}

double Rectangle::getArea() { return this->height * this->width; }
