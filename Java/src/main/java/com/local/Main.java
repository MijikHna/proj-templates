package com.local; 

import com.local.figure.Cicrle;
import com.local.figure.Rect;

public class Main {
  public static void main(String[] args) {
    Cicrle circle = new Cicrle("red", 8);     
    Rect rect = new Rect("blue", 10, 7) ;
    
    circle.printColor();
    System.out.println("Area: " + circle.getArea());

    rect.printColor();
    System.out.println("Area: " + rect.getArea());
  }
}

