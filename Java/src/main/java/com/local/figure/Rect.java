package com.local.figure;

/**
 * Rect
 */
public class Rect extends Figure {
  private double width;
  private double height;

  public Rect(String color, double width, double height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  @Override
  public double getArea() {
    return this.height * this.width;
  }
}
