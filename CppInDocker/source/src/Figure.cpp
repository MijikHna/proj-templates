#include "../include/Figure.hpp"

#include <cstddef>
#include <iostream>

using std::cout;
using std::endl;

Figure::Figure(string color) : color(color) {}

Figure::~Figure() {}

auto Figure::printColor() -> void { cout << this->color << endl; }
