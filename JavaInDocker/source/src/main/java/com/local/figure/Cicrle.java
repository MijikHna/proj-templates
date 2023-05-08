package com.local.figure;

/**
 * Cicrle
 */
public class Cicrle extends Figure {
  private double radius;

  public Cicrle(String color, double radius) {
    super(color);
    this.radius = radius;
  }

  /**
   * @return
   */
  @Override
  public double getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
