package com.local.figure;

abstract public class Figure {
  private String color;

  public Figure(String color){
    this.color = color;
  };

  public void printColor() {
    System.out.println("Color: " + this.color);
  };

  abstract double getArea();
}
