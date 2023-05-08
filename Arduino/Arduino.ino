void setup() {
  pinMode(BUILTIN_LED, OUTPUT);
}

void loop() {
  digitalWrite(BUILTIN_LED, HIGH);

  delay(3000)   ;

  digitalWrite(BUILTIN_LED, LOW);

  delay(1000);
}
