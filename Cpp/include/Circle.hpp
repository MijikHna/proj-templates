#ifndef __CIRCLE__
#define __CIRCLE__

#include "Figure.hpp"

class Circle: public Figure
{
public:
  Circle(string color, double radius);
  Circle(Circle &&) = default;
  Circle(const Circle &) = default;
  Circle &operator=(Circle &&) = default;
  Circle &operator=(const Circle &) = default;
  ~Circle();

  virtual double getArea() override;

private:
  double radius;
};

#endif // __CIRCLE__
