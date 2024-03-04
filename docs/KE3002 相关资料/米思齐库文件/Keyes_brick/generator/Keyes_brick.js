'use strict';

goog.provide('Blockly.Arduino.keyes');

goog.require('Blockly.Arduino');

Blockly.Arduino.ke_a_Write = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_val = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'analogWrite('+dropdown_pin+','+dropdown_val+');\n'
  return code;
};

Blockly.Arduino.ke_led_r = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.ke_led_y = Blockly.Arduino.ke_led_r

Blockly.Arduino.ke_led_w = Blockly.Arduino.ke_led_r

Blockly.Arduino.ke_led4 = Blockly.Arduino.ke_led_r

Blockly.Arduino.ke_jg = Blockly.Arduino.ke_led_r

Blockly.Arduino.ke_qcd = Blockly.Arduino.ke_led_r

Blockly.Arduino.ke_led_g = Blockly.Arduino.ke_led_r


Blockly.Arduino.ke_dual = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat1 = this.getFieldValue('STAT1');
  var dropdown_stat2 = this.getFieldValue('STAT2');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+');\ndigitalWrite('+dropdown_pin2+','+dropdown_stat2+');\n'
  return code;
};

////////////////////RGB01////////////////////
Blockly.Arduino.ke_rgb1_1 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin3 = Blockly.Arduino.valueToCode(this, 'PIN3',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat1 = this.getFieldValue('STAT1');
  var dropdown_stat2 = this.getFieldValue('STAT2');
  var dropdown_stat3 = this.getFieldValue('STAT3');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin3] = 'pinMode('+dropdown_pin3+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+');\ndigitalWrite('+dropdown_pin2+','+dropdown_stat2+');\ndigitalWrite('+dropdown_pin3+','+dropdown_stat3+');\n'
  return code;
};


//////////////////////////RGB//////////////////////////////
  Blockly.Arduino.ke_rgb1_2 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'R',Blockly.Arduino.ORDER_ATOMIC);
  var red_pwm = Blockly.Arduino.valueToCode(this, 'r', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'G',Blockly.Arduino.ORDER_ATOMIC);
  var green_pwm = Blockly.Arduino.valueToCode(this, 'g', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var dropdown_pin3 = Blockly.Arduino.valueToCode(this, 'B',Blockly.Arduino.ORDER_ATOMIC);
  var blue_pwm = Blockly.Arduino.valueToCode(this, 'b', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin3] = 'pinMode('+dropdown_pin3+', OUTPUT);';

  var code = 'analogWrite('+dropdown_pin1+',255-'+red_pwm+');\nanalogWrite('+dropdown_pin2+',255-'+green_pwm+');\nanalogWrite('+dropdown_pin3+',255-'+blue_pwm+');\n'
  return code;
};

////////////////////RGB2////////////////////
Blockly.Arduino.ke_rgb2_1 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin3 = Blockly.Arduino.valueToCode(this, 'PIN3',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat1 = this.getFieldValue('STAT1');
  var dropdown_stat2 = this.getFieldValue('STAT2');
  var dropdown_stat3 = this.getFieldValue('STAT3');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin3] = 'pinMode('+dropdown_pin3+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+');\ndigitalWrite('+dropdown_pin2+','+dropdown_stat2+');\ndigitalWrite('+dropdown_pin3+','+dropdown_stat3+');\n'
  return code;
};


//////////////////////////RGB2//////////////////////////////
  Blockly.Arduino.ke_rgb2_2 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'R',Blockly.Arduino.ORDER_ATOMIC);
  var red_pwm = Blockly.Arduino.valueToCode(this, 'r', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'G',Blockly.Arduino.ORDER_ATOMIC);
  var green_pwm = Blockly.Arduino.valueToCode(this, 'g', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var dropdown_pin3 = Blockly.Arduino.valueToCode(this, 'B',Blockly.Arduino.ORDER_ATOMIC);
  var blue_pwm = Blockly.Arduino.valueToCode(this, 'b', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin3] = 'pinMode('+dropdown_pin3+', OUTPUT);';

  var code = 'analogWrite('+dropdown_pin1+','+red_pwm+');\nanalogWrite('+dropdown_pin2+','+green_pwm+');\nanalogWrite('+dropdown_pin3+','+blue_pwm+');\n'
  return code;
};


Blockly.Arduino.ke_w_buzzer1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.ke_w_buzzer2=function(){
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var code="tone("+dropdown_pin+","+fre+");\n";
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   return code;
};

Blockly.Arduino.ke_w_buzzer3=function(){
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var dur = Blockly.Arduino.valueToCode(this, 'DURATION',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var code="tone("+dropdown_pin+","+fre+","+dur+");\n";
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   return code;
};

////////////////////蜂鸣器//////////////////////
Blockly.Arduino.ke_tone01 = function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ke_buzzer=function(){
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var dur = Blockly.Arduino.valueToCode(this, 'DURATION',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   Blockly.Arduino.setups_['setup_output'] = 'pinMode('+dropdown_pin+', OUTPUT);';

   var dropdown_type = this.getFieldValue('beat1');

   var code = 'tone('+dropdown_pin+','+fre+');\ndelay('+dropdown_type+');\n'; 
   /*if(window.isNaN(dropdown_pin)){
      code = code+'pinMode('+dropdown_pin+', OUTPUT);\n';
   }else{
      Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   }*/
   //code += "tone("+dropdown_pin+","+fre+");\n";
   return code;
};

Blockly.Arduino.ke_controls_tone2=function(){
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var dur = Blockly.Arduino.valueToCode(this, 'DURATION',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var code = ""; 
   if(window.isNaN(dropdown_pin)){
      code = code+'pinMode('+dropdown_pin+', OUTPUT);\n';
   }else{
      Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   }
   code += "tone("+dropdown_pin+","+fre+","+dur+");\n";
   return code;
};

//////////////////////////music///////////////////////////
Blockly.Arduino.ke_music = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_music'] = 'pinMode('+dropdown_pin+', OUTPUT);';
  Blockly.Arduino.definitions_['include_birthday'] = 'void birthday()\n{\n  tone('+dropdown_pin+',294);\n  delay(250);\n  tone('+dropdown_pin+',440);\n  delay(250);\n  tone('+dropdown_pin+',392);\n  delay(250);\n  tone('+dropdown_pin+',532);\n  delay(250);\n  tone('+dropdown_pin+',494);\n  delay(500);\n  tone('+dropdown_pin+',392);\n  delay(250);\n  tone('+dropdown_pin+',440);\n  delay(250);\n  tone('+dropdown_pin+',392);\n  delay(250);\n  tone('+dropdown_pin+',587);\n  delay(250);\n  tone('+dropdown_pin+',532);\n  delay(500);\n  tone('+dropdown_pin+',392);\n  delay(250);\n  tone('+dropdown_pin+',784);\n  delay(250);\n  tone('+dropdown_pin+',659);\n  delay(250);\n  tone('+dropdown_pin+',532);\n  delay(250);\n  tone('+dropdown_pin+',494);\n  delay(250);\n  tone('+dropdown_pin+',440);\n  delay(250);\n  tone('+dropdown_pin+',698);\n  delay(375);\n  tone('+dropdown_pin+',659);\n  delay(250);\n  tone('+dropdown_pin+',532);\n  delay(250);\n  tone('+dropdown_pin+',587);\n  delay(250);\n  tone('+dropdown_pin+',532);\n  delay(500);\n}\n';
  Blockly.Arduino.definitions_['include_tone'] = '//tone\n#define D0 -1\n#define D1 262\n#define D2 293\n#define D3 329\n#define D4 349\n#define D5 392\n#define D6 440\n#define D7 494\n#define M1 523\n#define M2 586\n#define M3 658\n#define M4 697\n#define M5 783\n#define M6 879\n#define M7 987\n#define H1 1045\n#define H2 1171\n#define H3 1316\n#define H4 1393\n#define H5 1563\n#define H6 1755\n#define H7 1971\n\n#define WHOLE 1\n#define HALF 0.5\n#define QUARTER 0.25\n#define EIGHTH 0.25\n#define SIXTEENTH 0.625\n ';
  
  Blockly.Arduino.definitions_['include_tune'] = '\nint tune[]= \n{\n  M3,M3,M4,M5,\n  M5,M4,M3,M2,\n  M1,M1,M2,M3,\n  M3,M2,M2,\n  M3,M3,M4,M5,\n  M5,M4,M3,M2,\n  M1,M1,M2,M3,\n  M2,M1,M1,\n  M2,M2,M3,M1,\n  M2,M3,M4,M3,M1,\n  M2,M3,M4,M3,M2,\n  M1,M2,D5,D0,\n  M3,M3,M4,M5,\n  M5,M4,M3,M4,M2,\n  M1,M1,M2,M3,\n  M2,M1,M1\n};';
  Blockly.Arduino.definitions_['include_durt'] = '\nfloat durt[]= \n {\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n  1,1,1,1,\n  1,0.5,0.5,1,1,\n  1,0.5,0.5,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,0.5,0.5,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n };';
  Blockly.Arduino.definitions_['include_io1'] = '\n int length;\n int tonepin='+dropdown_pin+'; \n';
  Blockly.Arduino.definitions_['include_Ode_to_Joy'] = 'void Ode_to_Joy()\n{\n  for(int x=0;x<length;x++)\n  {\n    tone(tonepin,tune[x]);\n    delay(300*durt[x]);   \n  }\n}\n';

  Blockly.Arduino.setups_['setup_output_Ode'] = 'length=sizeof(tune)/sizeof(tune[0]);\n';
  var dropdown_type = this.getFieldValue('play');
  
  var code = '';
  if (dropdown_type == "Birthday") code += 'birthday();\n';
  if (dropdown_type == "Ode to Joy") code += 'Ode_to_Joy();\n';
  //if (dropdown_type == "City of Sky") code += 'digitalRead(8)';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ke_notone=function(){
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.setups_['setup_output'] = 'pinMode('+dropdown_pin+', OUTPUT);';
   var code='';
   code += "noTone("+dropdown_pin+");\n";
   return code;
};

//////////////////music/////////////////////////



Blockly.Arduino.ke_relay = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.ke_motor = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat1 = this.getFieldValue('STAT1');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat2 = this.getFieldValue('STAT2');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+');\ndigitalWrite('+dropdown_pin2+','+dropdown_stat2+');\n'
  return code;
};

Blockly.Arduino.ke_motor001 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var data_a = this.getFieldValue('STAT1');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  var value_pwmb = Blockly.Arduino.valueToCode(this, 'pwmb', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var code = 'digitalWrite('+dropdown_pin1+','+data_a+');\nanalogWrite('+dropdown_pin2+','+value_pwmb+');\n'
  return code;
};


Blockly.Arduino.ke_motor2 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat1 = this.getFieldValue('STAT1');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat2 = this.getFieldValue('STAT2');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+');\ndigitalWrite('+dropdown_pin2+','+dropdown_stat2+');\n'
  return code;
};

Blockly.Arduino.ke_motor002 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var data_a = this.getFieldValue('STAT1');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  var value_pwmb = Blockly.Arduino.valueToCode(this, 'pwmb', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var code = 'digitalWrite('+dropdown_pin1+','+data_a+');\nanalogWrite('+dropdown_pin2+','+value_pwmb+');\n'
  return code;
};

///////////////////////////TB96612/////////////////////////////
Blockly.Arduino.ke_tb6612 = function() {
  var dropdown_MA = Blockly.Arduino.valueToCode(this, 'MA',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat1 = this.getFieldValue('STAT1');
  Blockly.Arduino.setups_['setup_output_'+dropdown_MA] = 'pinMode('+dropdown_MA+', OUTPUT);';
  
  var dropdown_MB = Blockly.Arduino.valueToCode(this, 'MB',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat2 = this.getFieldValue('STAT2');
  Blockly.Arduino.setups_['setup_output_'+dropdown_MB] = 'pinMode('+dropdown_MB+', OUTPUT);';

  var dropdown_PWMA = Blockly.Arduino.valueToCode(this, 'PWMA',Blockly.Arduino.ORDER_ATOMIC);
  var value_pwma = Blockly.Arduino.valueToCode(this, 'pwma', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_PWMA] = 'pinMode('+dropdown_PWMA+', OUTPUT);';
  
  var dropdown_PWMB = Blockly.Arduino.valueToCode(this, 'PWMB',Blockly.Arduino.ORDER_ATOMIC);
  var value_pwmb = Blockly.Arduino.valueToCode(this, 'pwmb', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_PWMB] = 'pinMode('+dropdown_PWMB+', OUTPUT);';

  
  var code = 'digitalWrite('+dropdown_MA+','+dropdown_stat1+');\ndigitalWrite('+dropdown_MB+','+dropdown_stat2+');\nanalogWrite('+dropdown_PWMA+','+value_pwma+');\nanalogWrite('+dropdown_PWMB+','+value_pwmb+');'
  return code;
};


  //舵机
  Blockly.Arduino.ke_servo = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['include_Servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.ke_servo_r = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_Servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');';
  
  var code = 'servo_'+dropdown_pin+'.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//////////////////////////数字传感器////////////////////////////////

Blockly.Arduino.ke_ir_g = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/////////////////火焰传感器////////////////
Blockly.Arduino.ke_flame = Blockly.Arduino.ke_ir_g


/////////////////霍尔传感器////////////////
Blockly.Arduino.ke_hall = Blockly.Arduino.ke_ir_g


/////////////////碰撞传感器////////////////
Blockly.Arduino.ke_crash = Blockly.Arduino.ke_ir_g
  

/////////////////按键传感器////////////////
Blockly.Arduino.ke_button = Blockly.Arduino.ke_ir_g


/////////////////电容触摸传感器////////////////
Blockly.Arduino.ke_tuoch = Blockly.Arduino.ke_ir_g

/////////////////敲击传感器////////////////
Blockly.Arduino.ke_knock = Blockly.Arduino.ke_ir_g


/////////////////倾斜传感器////////////////
Blockly.Arduino.ke_tilt = Blockly.Arduino.ke_ir_g


/////////////////振动传感器////////////////
Blockly.Arduino.ke_shake = Blockly.Arduino.ke_ir_g


/////////////////干簧管传感器////////////////
Blockly.Arduino.ke_reed_s = Blockly.Arduino.ke_ir_g


/////////////////循迹传感器////////////////
Blockly.Arduino.ke_track = Blockly.Arduino.ke_ir_g


/////////////////避障传感器////////////////
Blockly.Arduino.ke_avoid = Blockly.Arduino.ke_ir_g

/////////////////光折断传感器////////////////
Blockly.Arduino.ke_light_b = Blockly.Arduino.ke_ir_g

/////////////////烟雾数字传感器/////////////////
Blockly.Arduino.ke_smoke_D = Blockly.Arduino.ke_ir_g

/////////////////////酒精数字传感器///////////////
Blockly.Arduino.ke_alcohol_D = Blockly.Arduino.ke_ir_g







////////////////////////////////////////////////////////
//////////////////////模拟传感器/////////////////////////
////////////////////////////////////////////////////////

Blockly.Arduino.ke_sound = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

  //LM35 Temperature
Blockly.Arduino.ke_lm35 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead(' + dropdown_pin + ')*0.488';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ke_shouzhi = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['alpha'] = 'double alpha = 0.75;';
  Blockly.Arduino.definitions_['period'] = 'int period = 20;';
  Blockly.Arduino.definitions_['shouzhi1'] = 'int shouzhi()\n{\n  static double oldValue = 0;\n  static double oldChange = 0;\n  int rawValue = analogRead('+dropdown_pin+');\n  double value = alpha * oldValue + (1 - alpha) * rawValue;\n  oldValue = value;\n  delay(period);\n  return value;\n}\n';
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'shouzhi()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};




Blockly.Arduino.ke_analog_t = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_light = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_water = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_soil = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_potentiometer = Blockly.Arduino.ke_sound;


Blockly.Arduino.ke_slide_potentiometer = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_temt6000 = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_steam = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_film_p = Blockly.Arduino.ke_sound;


Blockly.Arduino.ke_smoke = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_alcohol = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_mq135 = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_18b20 = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_dht11 = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_bmp180 = Blockly.Arduino.ke_sound;

Blockly.Arduino.ke_fire2 = Blockly.Arduino.ke_sound;

///////////////////////////////////////////////////
///////////////////传感器/////////////////////////
////////////////////////////////////////////////////

////////////////ADKey///////////////////////
Blockly.Arduino.ke_ADKey = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

////////////////魔术光杯//////////////
Blockly.Arduino.ke_msgb_led = Blockly.Arduino.ke_ir_g

Blockly.Arduino.ke_msgb_sor = Blockly.Arduino.ke_ir_g



///////////////////////超声波//////////////////////
Blockly.Arduino.ke_sr01 = function () {
    var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', INPUT);';
    var funcName = 'checkdistance_' + dropdown_pin1 + '_' + dropdown_pin2;
    var code = 'float' + ' ' + funcName + '() {\n'
  + '  digitalWrite(' + dropdown_pin1 + ', LOW);\n' + '  delayMicroseconds(2);\n'
  + '  digitalWrite(' + dropdown_pin1 + ', HIGH);\n' + '  delayMicroseconds(10);\n'
  + '  digitalWrite(' + dropdown_pin1 + ', LOW);\n'
  + '  float distance = pulseIn(' + dropdown_pin2 + ', HIGH) / 58.00;\n'
  + '  delay(10);\n' + '  return distance;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
};

///////////////////18B20////////////////////////////
Blockly.Arduino.ke_18b20 = function () {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var unit = this.getFieldValue('UNIT');
    Blockly.Arduino.definitions_['include_OneWire'] = '#include <OneWire.h>';
    Blockly.Arduino.definitions_['include_DallasTemperature'] = '#include <DallasTemperature.h>';
    Blockly.Arduino.definitions_['var_OneWire_oneWire_' + dropdown_pin] = 'OneWire oneWire_' + dropdown_pin + '(' + dropdown_pin + ');';
    Blockly.Arduino.definitions_['var_DallasTemperature_sensors_' + dropdown_pin] = 'DallasTemperature sensors_' + dropdown_pin + '(&oneWire_' + dropdown_pin + ');';
    Blockly.Arduino.definitions_['var_DeviceAddress_insideThermometer'] = 'DeviceAddress insideThermometer;';
    Blockly.Arduino.setups_['setup_sensors_' + dropdown_pin + '_getAddress'] = 'sensors_' + dropdown_pin + '.getAddress(insideThermometer, 0);';
    Blockly.Arduino.setups_['setup_sensors_' + dropdown_pin + '_setResolution'] = 'sensors_' + dropdown_pin + '.setResolution(insideThermometer, 9);';
    var funcName = 'ds18b20_' + dropdown_pin + '_getTemp';
    var code = 'float' + ' ' + funcName + '(int w) {\n'
  + '  sensors_' + dropdown_pin + '.requestTemperatures();\n'
  + '  if(w==0) {\nreturn sensors_' + dropdown_pin + '.getTempC(insideThermometer);\n}\n'
  + '  else {\nreturn sensors_' + dropdown_pin + '.getTempF(insideThermometer);\n}\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return ['ds18b20_' + dropdown_pin + '_getTemp(' + unit + ')', Blockly.Arduino.ORDER_ATOMIC];
}

//////////////////////////DHT11///////////////////////////
Blockly.Arduino.ke_dht11 = function () {
    var sensor_type = this.getFieldValue('TYPE');
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var what = this.getFieldValue('WHAT');
    Blockly.Arduino.definitions_['include_dht'] = '#include <dht.h>';
    Blockly.Arduino.definitions_['var_dht_' + dropdown_pin] = 'dht myDHT_' + dropdown_pin + ';';
    var funcName = 'dht_' + dropdown_pin + '_get' + what;
    var code = 'int' + ' ' + funcName + '() {\n'
  + '  int chk = myDHT_' + dropdown_pin + '.read' + sensor_type + '(' + dropdown_pin + ');\n'
  + '  int value = myDHT_' + dropdown_pin + '.' + what + ';\n'
  + '  return value;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
}

//传感器-重力感应块-获取数据
Blockly.Arduino.ke_adxl345 = function() {
  Blockly.Arduino.definitions_['include_ADXL345'] = '#include <ADXL345.h>';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_I2Cdev'] = '#include <I2Cdev.h>';
  Blockly.Arduino.definitions_['var_ADXL345'] = 'ADXL345 accel;';
  Blockly.Arduino.setups_['setup_ADXL345-A'] = 'Wire.begin();';
  Blockly.Arduino.setups_['setup_ADXL345-B'] = 'accel.initialize();';
  var dropdown_type = this.getFieldValue('ADXL345_PIN');
  var code = '';
  //if (dropdown_type == "xa") code += 'accel.X_angle()';
  //if (dropdown_type == "ya") code += 'accel.Y_angle()';
  if (dropdown_type == "x") code += '(accel.getAccelerationX()*3.9)/1000';
  if (dropdown_type == "y") code += '(accel.getAccelerationY()*3.9)/1000';
  if (dropdown_type == "z") code += '(accel.getAccelerationZ()*3.9)/1000';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/////////////////////////BMP280////////////////////////////
Blockly.Arduino.ke_bmp280 = function() {
  Blockly.Arduino.definitions_['include_BMP280'] = '#include <Adafruit_BMP280.h>';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_spi'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['include_Sensor'] = '#include <Adafruit_Sensor.h>';

  Blockly.Arduino.definitions_['include_SCK'] = '#define BMP_SCK 13';
  Blockly.Arduino.definitions_['include_MISO'] = '#define BMP_MISO 12';
  Blockly.Arduino.definitions_['include_MOSI'] = '#define BMP_MOSI 11';
  Blockly.Arduino.definitions_['include_CS'] = '#define BMP_CS 10';

  Blockly.Arduino.definitions_['include_bme'] = 'Adafruit_BMP280 bme; // I2C';

  Blockly.Arduino.definitions_['readPressure'] = 'int readPressure()\n{\n long int  pressure = 0;\n  int temp = 0;\n  temp = bme.readTemperature();\n  pressure = bme.readPressure();\n  return pressure;\n}\n';

  Blockly.Arduino.definitions_['readAltitude'] = 'int readAltitude()\n{\nint temp = 0;\n  temp = bme.readTemperature();\n  int altitude1 = 0;\n  altitude1 = (101325-bme.readPressure()) * 0.09;\n  return altitude1;\n}\n';

  Blockly.Arduino.setups_['setup_!bme'] = 'bme.begin();\n';

  var dropdown_type = this.getFieldValue('BMP280_PIN');
  var code = '';

  if (dropdown_type == "T") code += 'bme.readTemperature()';
  if (dropdown_type == "P")  code += 'bme.readPressure();bme.readTemperature()';
  if (dropdown_type == "A") code += 'readAltitude()'; 

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};




///////////////////////BMP180温度大气压/////////////////////////////
Blockly.Arduino.ke_bmp180 = function() {
  Blockly.Arduino.definitions_['define_bmp180'] = '#define BMP180ADD 0xEE>>1';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['char_OSS'] = 'unsigned char OSS;';
  Blockly.Arduino.definitions_['int'] = 'int ac1,ac2,ac3,b1,b2,mb,mc,md;';
  Blockly.Arduino.definitions_['unsight_int'] = 'unsigned int ac4,ac5,ac6;';
  Blockly.Arduino.definitions_['float'] = 'float temperature;';
  Blockly.Arduino.definitions_['double'] = 'double pressure,pressure2,altitude;';
  Blockly.Arduino.definitions_['long'] = 'long b5;';

  //Blockly.Arduino.definitions_['calculate'] = 'void calculate()\n{\n  temperature = bmp180GetTemperature(bmp180ReadUT());\ntemperature = temperature*0.1;\npressure = bmp180GetPressure(bmp180ReadUP());\npressure2 = pressure/101325;\npressure2 = pow(pressure2,0.19029496);\naltitude = 44330*(1-pressure2);\n}';

 //Blockly.Arduino.definitions_['show'] = 'void show()\n{\n  Serial.print("Temperature: ");\nSerial.print(temperature, 1);\nSerial.println(" C");\nSerial.print("Pressure: ");\nSerial.print(pressure, 0);\nSerial.println(" Pa");\nSerial.print("altitude:");\nSerial.print(altitude);\nSerial.println("m");\n}';

  Blockly.Arduino.definitions_['BMP180start'] = 'void BMP180start()\n{\nac1 = bmp180ReadDate(0xAA);\nac2 = bmp180ReadDate(0xAC);\nac3 = bmp180ReadDate(0xAE);\nac4 = bmp180ReadDate(0xB0);\nac5 = bmp180ReadDate(0xB2);\nac6 = bmp180ReadDate(0xB4);\nb1  = bmp180ReadDate(0xB6);\nb2  = bmp180ReadDate(0xB8);\nmb  = bmp180ReadDate(0xBA);\nmc  = bmp180ReadDate(0xBC);\nmd  = bmp180ReadDate(0xBE);\n}';

  Blockly.Arduino.definitions_['bmp180GetTemperature'] = 'short bmp180GetTemperature(unsigned int ut)\n{\nlong x1, x2;\nx1 = (((long)ut - (long)ac6)*(long)ac5) >> 15;\nx2 = ((long)mc << 11)/(x1 + md);\nb5 = x1 + x2;\nreturn ((b5 + 8)>>4);\n}';
  
  Blockly.Arduino.definitions_['bmp180GetPressure'] = 'long bmp180GetPressure(unsigned long up)\n{\nlong x1, x2, x3, b3, b6, p;\nunsigned long b4, b7;\nb6 = b5 - 4000;\nx1 = (b2 * (b6 * b6)>>12)>>11;\nx2 = (ac2 * b6)>>11;\nx3 = x1 + x2;\nb3 = (((((long)ac1)*4 + x3)<<OSS) + 2)>>2;\nx1 = (ac3 * b6)>>13;\nx2 = (b1 * ((b6 * b6)>>12))>>16;\nx3 = ((x1 + x2) + 2)>>2;\nb4 = (ac4 * (unsigned long)(x3 + 32768))>>15;\nb7 = ((unsigned long)(up - b3) * (50000>>OSS));\nif (b7 < 0x80000000)\n  p = (b7<<1)/b4;\nelse\n  p = (b7/b4)<<1;\nx1 = (p>>8) * (p>>8);\nx1 = (x1 * 3038)>>16;\nx2 = (-7357 * p)>>16;\np += (x1 + x2 + 3791)>>4;\nreturn p;\n}';

  Blockly.Arduino.definitions_['bmp180Read'] = 'int bmp180Read(unsigned char address)\n{\nunsigned char data;\nWire.beginTransmission(BMP180ADD);\nWire.write(address);\nWire.endTransmission();\nWire.requestFrom(BMP180ADD, 1);\nwhile(!Wire.available());\nreturn Wire.read();\n}';

  Blockly.Arduino.definitions_['bmp180ReadDate'] = 'int bmp180ReadDate(unsigned char address)\n{\nunsigned char msb, lsb;\nWire.beginTransmission(BMP180ADD);\nWire.write(address);\nWire.endTransmission();\nWire.requestFrom(BMP180ADD, 2);\nwhile(Wire.available()<2);\nmsb = Wire.read();\nlsb = Wire.read();\nreturn (int) msb<<8 | lsb;\n}';

  Blockly.Arduino.definitions_['bmp180ReadUT'] = 'unsigned int bmp180ReadUT()\n{\nunsigned int ut;\nWire.beginTransmission(BMP180ADD);\nWire.write(0xF4);\nWire.write(0x2E);\nWire.endTransmission();\ndelay(5);\nut = bmp180ReadDate(0xF6);\nreturn ut;\n}';

  Blockly.Arduino.definitions_['bmp180ReadUP'] = 'unsigned long bmp180ReadUP()\n{\nunsigned char msb, lsb, xlsb;\nunsigned long up = 0;\nWire.beginTransmission(BMP180ADD);\nWire.write(0xF4);\nWire.write(0x34 + (OSS<<6));\nWire.endTransmission();\ndelay(2 + (3<<OSS));\nWire.beginTransmission(BMP180ADD);\nWire.write(0xF6);\nWire.endTransmission();\nWire.requestFrom(BMP180ADD, 3);\nwhile(Wire.available() < 3);\nmsb = Wire.read();\nlsb = Wire.read();\nxlsb = Wire.read();\nup = (((unsigned long) msb << 16) | ((unsigned long) lsb << 8) | (unsigned long) xlsb) >> (8-OSS);\nreturn up;\n}';
 
  Blockly.Arduino.definitions_['temperature1'] = 'float temperature1()\n{\ntemperature = bmp180GetTemperature(bmp180ReadUT());\ntemperature = temperature*0.1;\nreturn temperature;\n}';

  Blockly.Arduino.definitions_['pressure1'] = 'double pressure1()\n{\nbmp180GetTemperature(bmp180ReadUT());\npressure = bmp180GetPressure(bmp180ReadUP());\nreturn pressure;\n}\n'

  Blockly.Arduino.definitions_['altitude1'] = 'double altitude1()\n{\nbmp180GetTemperature(bmp180ReadUT());\npressure = bmp180GetPressure(bmp180ReadUP());\npressure2 = pressure/101325;\npressure2 = pow(pressure2,0.19029496);\naltitude = 44330*(1-pressure2);\nreturn altitude;\n}\n'

  Blockly.Arduino.setups_['wire.begin'] = 'Wire.begin();';
  Blockly.Arduino.setups_['OSS'] = 'OSS = 2;';
  Blockly.Arduino.setups_['BMP180start'] = 'BMP180start();';


  var dropdown_type = this.getFieldValue('BMP180_PIN');
  var code = '';

  if (dropdown_type == "T") code += 'temperature1()';
  if (dropdown_type == "P") code += 'pressure1()';
  if (dropdown_type == "A") code += 'altitude1()';
  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/////////////////////////////DS3231时钟/////////////////////////////
Blockly.Arduino.ke_ds3231 = function () {
  var RTCName = this.getFieldValue('RTCName');
  var year = Blockly.Arduino.valueToCode(this, "year", Blockly.Arduino.ORDER_ATOMIC);
  var month = Blockly.Arduino.valueToCode(this, "month", Blockly.Arduino.ORDER_ATOMIC);
  var day = Blockly.Arduino.valueToCode(this, "day", Blockly.Arduino.ORDER_ATOMIC);
  var dow = Blockly.Arduino.valueToCode(this, "dow", Blockly.Arduino.ORDER_ATOMIC) 
  var hour = Blockly.Arduino.valueToCode(this, "hour", Blockly.Arduino.ORDER_ATOMIC);
  var minute = Blockly.Arduino.valueToCode(this, "minute", Blockly.Arduino.ORDER_ATOMIC);
  var second = Blockly.Arduino.valueToCode(this, "second", Blockly.Arduino.ORDER_ATOMIC);


  Blockly.Arduino.definitions_['include_DS3231_h'] = '#include <DS3231.h>';
  Blockly.Arduino.definitions_['DS3231'] = 'DS3231  '+RTCName+'(A4, A5);';

  Blockly.Arduino.setups_['begin1'] = ''+RTCName+'.begin();';
  Blockly.Arduino.setups_['setDOW'] = ''+RTCName+'.setDOW('+dow+');';
  Blockly.Arduino.setups_['setTime'] = ''+RTCName+'.setTime('+hour+', '+minute+', '+second+');';
  Blockly.Arduino.setups_['setDate'] = ''+RTCName+'.setDate('+day+', '+month+', '+year+');';

  var code = 'Serial.print('+RTCName+'.getDOWStr());\nSerial.print(" ");\nSerial.print('+RTCName+'.getDateStr());\nSerial.print(" -- ");\nSerial.println('+RTCName+'.getTimeStr());\ndelay (1000);';

  return code;
};

/////////////////////////////DS3231获取时间////////////////////////
Blockly.Arduino.ke_ds3231getTime = function () {
  var RTCName = this.getFieldValue('RTCName');
  var timeType = this.getFieldValue('TIME_TYPE');
  Blockly.Arduino.definitions_['include_DS3231_h'] = '#include <DS3231.h>';
  Blockly.Arduino.definitions_['DS3231'] = 'DS3231  '+RTCName+'(A4, A5);';
  Blockly.Arduino.definitions_['Time'] = 'Time  t;';


  Blockly.Arduino.definitions_['second1'] = 'int second1()\n{\nt = '+RTCName+'.getTime();\nt.sec;\ndelay(1000);\nreturn t.sec;\n}';
  
  Blockly.Arduino.definitions_['minute1'] = 'int minute1()\n{\nt = '+RTCName+'.getTime();\nt.min;\nreturn t.min;\n}';

  Blockly.Arduino.definitions_['hour1'] = 'int hour1()\n{\nt = '+RTCName+'.getTime();\nt.hour;\nreturn t.hour;\n}';

  Blockly.Arduino.definitions_['day1'] = 'int day1()\n{\nt = '+RTCName+'.getTime();\nt.date;\nreturn t.date;\n}';

  Blockly.Arduino.definitions_['week1'] = 'int week1()\n{\nt = '+RTCName+'.getTime();\nt.dow;\nreturn t.dow;\n}';

  Blockly.Arduino.definitions_['month1'] = 'int month1()\n{\nt = '+RTCName+'.getTime();\nt.mon;\nreturn t.mon;\n}';

  Blockly.Arduino.definitions_['year1'] = 'int year1()\n{\nt = '+RTCName+'.getTime();\nt.year;\nreturn t.year;\n}';

  Blockly.Arduino.setups_['begin1'] = ''+RTCName+'.begin();';


  var dropdown_type = this.getFieldValue('TIME_TYPE');
  var code = '';
  //code += ''+timeType+' = '+RTCName+'.getTime();\n';
  if (dropdown_type == "getYear") code += 'year1()';
  if (dropdown_type == "getMonth") code += 'month1()';
  if (dropdown_type == "getDay") code += 'day1()';
  if (dropdown_type == "getHour") code += 'hour1()';
  if (dropdown_type == "getMinute") code += 'minute1()';
  if (dropdown_type == "getSecond") code += 'second1()';
  if (dropdown_type == "getWeek") code += 'week1()';

  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/////////////////旋转编码器--按钮////////////////////
Blockly.Arduino.ke_rotation_button = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'button',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
  //return code;
};


/////////////////旋转编码器--旋转////////////////////
Blockly.Arduino.ke_rotation_right = function() {
  var variable0 = Blockly.Arduino.variableDB_.getName(
        this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_DAT = Blockly.Arduino.valueToCode(this, 'DAT',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_CLK = Blockly.Arduino.valueToCode(this, 'CLK',Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_SW = Blockly.Arduino.valueToCode(this, 'button',Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_PinChangeInt.h'] = '#include <PinChangeInt.h>';
  //Blockly.Arduino.definitions_['DAT'] = 'int DAT = A2; ';
  //Blockly.Arduino.definitions_['CLK'] = 'int CLK = 2;';
  //Blockly.Arduino.definitions_['BUTTON'] = 'int BUTTON = A3;';
  Blockly.Arduino.definitions_['COUNT'] = 'int '+variable0+' = 0;';
  //Blockly.Arduino.definitions_['COUNT'] = 'int COUNT = 0;';

  Blockly.Arduino.definitions_['RoteStateChanged()'] = 'int RoteStateChanged() \n{\nif  (digitalRead('+dropdown_DAT+'))\n{\n'+variable0+'++;\ndelay(20);\n}else              \n   {\n    '+variable0+'--;\n    delay(20);\n   }\nreturn('+variable0+'); \n}';
  //else\n{\nCOUNT--;\ndelay(20);\n}\n
  //Blockly.Arduino.definitions_['RoteStateChanged'] = 'void RoteStateChanged() \n{\nif  (digitalRead('+dropdown_DAT+'))\n{\nCOUNT++;\ndelay(20);\n}\n';
  Blockly.Arduino.setups_['setup_input_dropdown'] = 'pinMode('+dropdown_CLK+', INPUT);\n  digitalWrite('+dropdown_CLK+', HIGH);\n  pinMode('+dropdown_DAT+', INPUT);\n ';
  
  var dropdown_type = this.getFieldValue('rot');
  var code = 'attachPinChangeInterrupt('+dropdown_CLK+',RoteStateChanged , FALLING);\n';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/////////////////////遥感///////////////////////////
Blockly.Arduino.ke_joystick = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  //var code = 'analogRead('+dropdown_pin+')';

  var dropdown_type = this.getFieldValue('joy');
  var code = '';
  if (dropdown_type == "Lx") code += 'analogRead('+dropdown_pin+')';
  if (dropdown_type == "Ly") code += 'analogRead('+dropdown_pin+')';
  //if (dropdown_type == "Lz") code += 'digitalRead('+dropdown_pin+')';
  //if (dropdown_type == "Rx") code += 'analogRead('+dropdown_pin+')';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/////////////////遥感///////////////
Blockly.Arduino.ke_joystick_btn = Blockly.Arduino.ke_ir_g

///////////////////////////pca9685/////////////////
Blockly.Arduino.ke_pca9685=function(){
  
  var value_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_pwm = Blockly.Arduino.valueToCode(this, 'pwm', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_PWMServoDriver'] = '#include <Adafruit_PWMServoDriver.h>';

  Blockly.Arduino.definitions_['PWMServo'] = 'Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();';

  Blockly.Arduino.definitions_['PWMangle'] = 'void servo_9g_write(uint8_t n,int Angle)\n{\n  double pulse = Angle;\n  pulse = pulse/100+0.5;\n  setServoPulse(n,pulse); \n}\n';

  Blockly.Arduino.definitions_['setServoPulse'] = 'void setServoPulse(uint8_t n, double pulse) \n {\n  double pulselength;\n  pulselength = 1000000;   // 1,000,000 us per second\n  pulselength /= 50;   // 60 Hz\n  Serial.print(pulselength); Serial.println(" us per period"); \n  pulselength /= 4096;  // 12 bits of resolution\n  Serial.print(pulselength); Serial.println(" us per bit"); \n  pulse *= 1000;  // convert to us\n  pulse /= pulselength;\n  Serial.println(pulse);\n  pwm.setPWM(n, 0, pulse);\n}\n';

   //Blockly.Arduino.definitions_['pulselen'] = 'uint16_t pulselen ='+value_pwm+';';

    Blockly.Arduino.setups_['setup_begin'] = 'pwm.begin();\npwm.setPWMFreq(50);\ndelay(10);\n';

  var code = 'servo_9g_write('+value_pin+','+value_pwm+');\n';
  
  return code;
};






////////////////////////////////////////////////////
//////////////////////////显示屏///////////////////
//////////////////////////////////////////////////////////

///////////////////////////RGB灯/////////////////
Blockly.Arduino.ke_rgb2812=function(){
  var dropdown_rgbpin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var value_led = Blockly.Arduino.valueToCode(this, 'num01', Blockly.Arduino.ORDER_ATOMIC);
  var value_rvalue = Blockly.Arduino.valueToCode(this, 'red', Blockly.Arduino.ORDER_ATOMIC);
  var value_gvalue = Blockly.Arduino.valueToCode(this, 'green', Blockly.Arduino.ORDER_ATOMIC);
  var value_bvalue = Blockly.Arduino.valueToCode(this, 'blue', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
   Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
   if (!Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin]) {
      Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin] = 'Adafruit_NeoPixel  rgb_display_' + dropdown_rgbpin + '' + '(8);';
      Blockly.Arduino.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();';
      Blockly.Arduino.setups_['setup_rgb_display_setpin' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.setPin(' + dropdown_rgbpin + ');';
  }
  
  var code = 'rgb_display_'+dropdown_rgbpin+'.setPixelColor('+value_led+'-1, '+value_rvalue+','+value_gvalue+','+value_bvalue+');\n';
  code+='rgb_display_'+dropdown_rgbpin+'.show();\n';
  return code;
};

////////////////////////////TM1637数码管初始化//////////////////////////
Blockly.Arduino.ke_tm1637_init = function(){
  var CLK = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var DIO = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_TM1637.h'] = '#include <TM1637.h>';
  Blockly.Arduino.definitions_['TM1637'] = 'TM1637 TM('+CLK+', '+DIO+');';
  return '';
};

///////////////////////////TM1637数码管自定义显示/////////////////
Blockly.Arduino.ke_tm1637_dy=function(){
  var num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC);
  //var tc = Blockly.Arduino.valueToCode(this, 'tc', Blockly.Arduino.ORDER_ATOMIC);
  var weishu = Blockly.Arduino.valueToCode(this, 'weishu', Blockly.Arduino.ORDER_ATOMIC);
  var wei = Blockly.Arduino.valueToCode(this, 'wei', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'TM.cls();\nTM.Num('+num+',0,'+weishu+','+wei+');'+'\n';
  return code;
};

///////////////////////////TM1637数码管自定义显示是否填充/////////////////
Blockly.Arduino.ke_tm1637_tc=function(){
  var num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC);
  //var tc = Blockly.Arduino.valueToCode(this, 'tc', Blockly.Arduino.ORDER_ATOMIC);
  var tc = Blockly.Arduino.valueToCode(this, '0and1', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'TM.cls();\nTM.Num('+num+','+tc+');'+'\n';
  return code;
};

///////////////////////////TM1637数码管亮度/////////////////
Blockly.Arduino.ke_tm1637_ld=function(){
  var num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'TM.BL('+num+');'+'\n';
  return code;
};


///////////////////////////TM1637数码管是否隐藏/////////////////
Blockly.Arduino.ke_tm1637_yc=function(){
  var bool = Blockly.Arduino.valueToCode(this, 'BOOL', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'TM.show('+bool+');'+'\n';
  return code;
};

///////////////////////////TM1637数码管是否显示冒号////////////////
Blockly.Arduino.ke_tm1637_mh=function(){
  var bool = Blockly.Arduino.valueToCode(this, 'BOOL', Blockly.Arduino.ORDER_ATOMIC);
  var num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC);
  var num2 = Blockly.Arduino.valueToCode(this, 'num2', Blockly.Arduino.ORDER_ATOMIC);


  var code = 'TM.DNum('+num1+','+num2+','+bool+');'+'\n';
  return code;
};

////////////////////////1602LCD无IIC///////////////////////////
Blockly.Arduino.ke_1602lcd_w = function() {
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'


  Blockly.Arduino.definitions_['DRE'] = 'int DI = 12,RW = 11,Enable = 2;';
  Blockly.Arduino.definitions_['DB'] = 'int DB[] = {3, 4, 5, 6, 7, 8, 9, 10};';
  Blockly.Arduino.definitions_['STR'] = 'char *string = "0";';
  Blockly.Arduino.definitions_['LcdCommandWrite'] = 'void LcdCommandWrite(int value) \n{\nint i = 0;\nfor (i=DB[0]; i <= DI; i++) \n{\ndigitalWrite(i,value & 01);\nvalue >>= 1;\n}\ndigitalWrite(Enable,LOW);\ndelayMicroseconds(1);\ndigitalWrite(Enable,HIGH);\ndelayMicroseconds(1); \ndigitalWrite(Enable,LOW);\ndelayMicroseconds(1); \n}\n';
  Blockly.Arduino.definitions_['LcdDataWrite'] = 'void LcdDataWrite(int value) \n{\nint i = 0;\ndigitalWrite(DI, HIGH); \ndigitalWrite(RW, LOW); \nfor (i=DB[0]; i <= DB[7]; i++) \n{\ndigitalWrite(i,value & 01);\nvalue >>= 1;\n}\ndigitalWrite(Enable,LOW);  \ndelayMicroseconds(1);\ndigitalWrite(Enable,HIGH); \ndelayMicroseconds(1);\ndigitalWrite(Enable,LOW); \ndelayMicroseconds(1); \n}\n';
  //Blockly.Arduino.definitions_['LcdStringWrite'] = 'void LcdStringWrite(char *a)\n{\nfor(int i = 0;i < 14; i++)\n{\nif(*(a+i) == '\0')\n {\nbreak;\n}\nLcdDataWrite(*(a+i));\n}\n}\n';
   Blockly.Arduino.definitions_['lsw'] = 'void LcdStringWrite(char *a)\n{\nfor(int i = 0;i < strlen(a); i++){\nLcdDataWrite(*(a+i));\n}\n}\n';

  Blockly.Arduino.setups_['setup_lcd'] = 'int i = 0;\nfor (i=Enable; i <= DI; i++) \n{\n    pinMode(i,OUTPUT);\n}\ndelay(100);\nLcdCommandWrite(0x38);\ndelay(64);  \nLcdCommandWrite(0x38); \ndelay(50);  \nLcdCommandWrite(0x38); \ndelay(20);  \nLcdCommandWrite(0x06); \ndelay(20);  \nLcdCommandWrite(0x0E);\ndelay(20);  \nLcdCommandWrite(0x01);  \ndelay(100); \nLcdCommandWrite(0x80); \ndelay(20);  \n';

  var code = 'LcdCommandWrite(0x01); \ndelay(10); \nLcdCommandWrite(0x80+0); \ndelay(10); \nstring = '+str1+';\nLcdStringWrite(string);\ndelay(10);\nLcdCommandWrite(0xc0+0); \n string = '+str2+';\nLcdStringWrite(string);\ndelay(10);\ndelay(300);';

  return code;
};


Blockly.Arduino.ke_1602lcd_init = function() {
  var varName = this.getFieldValue('VAR');
  var TYPE = this.getFieldValue('TYPE');
  var device = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC) || '0x27';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['var_LiquidCrystal_I2C_'+varName] = 'LiquidCrystal_I2C '+varName+'('+device+','+TYPE+');';
  return '';
};

Blockly.Arduino.ke_1602lcd = function() {
  var varName = this.getFieldValue('VAR');
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
  //var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
  //var str4 = Blockly.Arduino.valueToCode(this, 'TEXT4', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
  if (Blockly.Arduino.definitions_['var_LiquidCrystal_SoftI2C_' + varName] || Blockly.Arduino.definitions_['var_LiquidCrystal_I2C_' + varName]) {
      Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
      Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';
  }
  var code = varName+'.setCursor(0, 0);\n'
  code+=varName+'.print('+str1+');\n';
  code+=varName+'.setCursor(0, 1);\n';
  code+=varName+'.print('+str2+');\n';  
  //code+=varName+'.setCursor(0, 2);\n';
  //code+=varName+'.print('+str3+');\n';
  //code+=varName+'.setCursor(0, 3);\n';
  //code+=varName+'.print('+str4+');\n';
  return code;
};

Blockly.Arduino.ke_1602lcd_print2 = function() {
  var varName = this.getFieldValue('VAR');
  var str = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")';
  var row = Blockly.Arduino.valueToCode(this, 'row', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var column = Blockly.Arduino.valueToCode(this, 'column', Blockly.Arduino.ORDER_ATOMIC) || '1';
  if (Blockly.Arduino.definitions_['var_LiquidCrystal_SoftI2C_' + varName] || Blockly.Arduino.definitions_['var_LiquidCrystal_I2C_' + varName]) {
      Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
      Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';
  }
  var code = varName+'.setCursor('+column+'-1, '+row+'-1);\n'
  code+=varName+'.print('+str+');\n';
  return code;
};

Blockly.Arduino.ke_1602lcd_left = function() {
  var varName = this.getFieldValue('VAR');
  var code = ''+varName+'.scrollDisplayLeft();\n'
  return code;
};

Blockly.Arduino.ke_1602lcd_right = function() {
  var varName = this.getFieldValue('VAR');
  var code = ''+varName+'.scrollDisplayRight();\n'
  return code;
};


////////////////////////1602LCD///////////////////////////
/*Blockly.Arduino.ke_1602lcd = function() {
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var dropdown_stat = this.getFieldValue('STAT');
  //var bool = Blockly.Arduino.valueToCode(this, 'BOOL', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_lcd'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['var_lcd'] = 'LiquidCrystal_I2C lcd(0x27,16,2);';
  Blockly.Arduino.setups_['setup_lcd1'] = 'lcd.init();';
  Blockly.Arduino.setups_['setup_lcd2'] = 'lcd.backlight();';
  var code = 'lcd.setCursor(0, 0);\n'
  code+='lcd.print('+str1+');\n';
  code+='lcd.setCursor(0, 1);\n';
  code+='lcd.print('+str2+');\n';
  return code;
};*/

Blockly.Arduino.ke_1602lcd_clear= function() {
  var varName = this.getFieldValue('VAR');
  var dropdown_stat = this.getFieldValue('STAT');
  if (Blockly.Arduino.definitions_['var_LiquidCrystal_SoftI2C_' + varName] || Blockly.Arduino.definitions_['var_LiquidCrystal_I2C_' + varName]) {
      Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
      Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';
  }
  var code = varName+'.'+dropdown_stat+'();\n'
  return code;
};

////////////////////////1602LCD///////////////////////////
/*Blockly.Arduino.ke_1602lcd_clear = function() {
  
  var code = 'lcd.clear();\n'

  return code;
};*/




////////////////////////2004LCD///////////////////////////
Blockly.Arduino.ke_2004lcd = function() {
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var str4 = Blockly.Arduino.valueToCode(this, 'TEXT4', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'

  Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_df_lcd'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['var_df_lcd'] = 'LiquidCrystal_I2C df_lcd(0x27,16,4);';
  Blockly.Arduino.setups_['setup_df_lcd1'] = 'df_lcd.init();';
  Blockly.Arduino.setups_['setup_df_lcd2'] = 'df_lcd.backlight();';
  var code = 'df_lcd.setCursor(0, 0);\n'
  code+='df_lcd.print('+str1+');\n';
  code+='df_lcd.setCursor(0, 1);\n';
  code+='df_lcd.print('+str2+');\n';
  code+='df_lcd.setCursor(0, 2);\n';
  code+='df_lcd.print('+str3+');\n';
  code+='df_lcd.setCursor(0, 3);\n';
  code+='df_lcd.print('+str4+');\n';
  return code;
};

////////////////////////oled_init///////////////////////////
Blockly.Arduino.ke_OLED_init = function() {
  Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_GFX'] = '#include <Adafruit_GFX.h>';
  Blockly.Arduino.definitions_['define_SSD1306'] = '#include <Adafruit_SSD1306.h>';

  Blockly.Arduino.definitions_['OLED_RESET'] = '#define OLED_RESET 4';
  Blockly.Arduino.definitions_['display'] = 'Adafruit_SSD1306 display(OLED_RESET);';
  
  Blockly.Arduino.setups_['setup_oled1'] = 'display.begin(SSD1306_SWITCHCAPVCC, 0x3C);';
  Blockly.Arduino.setups_['setup_oled2'] = 'display.display();';
  Blockly.Arduino.setups_['setup_oled3'] = 'delay(2000);';
  Blockly.Arduino.setups_['setup_oled4'] = 'display.clearDisplay();';
  
  var code = ''

  return code;
};

////////////////////////oled_pixel///////////////////////////
Blockly.Arduino.ke_OLED_piexl = function() {
  var valx = Blockly.Arduino.valueToCode(this, 'val_x', Blockly.Arduino.ORDER_ATOMIC);
  var valy = Blockly.Arduino.valueToCode(this, 'val_y', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'display.drawPixel('+valx+', '+valy+', WHITE);\ndisplay.display();\n'

  return code;
};

////////////////////////oled_line///////////////////////////
Blockly.Arduino.ke_OLED_line = function() {
  var valx1 = Blockly.Arduino.valueToCode(this, 'val_x1', Blockly.Arduino.ORDER_ATOMIC);
  var valy1 = Blockly.Arduino.valueToCode(this, 'val_y1', Blockly.Arduino.ORDER_ATOMIC);
  var valx2 = Blockly.Arduino.valueToCode(this, 'val_x2', Blockly.Arduino.ORDER_ATOMIC);
  var valy2 = Blockly.Arduino.valueToCode(this, 'val_y2', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'display.drawLine('+valx1+', '+valy1+', '+valx2+', '+valy2+', WHITE);\ndisplay.display();\n'

  return code;
};

////////////////////////oled_drawRect///////////////////////////
Blockly.Arduino.ke_OLED_rect = function() {
  var valx1 = Blockly.Arduino.valueToCode(this, 'val_x1', Blockly.Arduino.ORDER_ATOMIC);
  var valy1 = Blockly.Arduino.valueToCode(this, 'val_y1', Blockly.Arduino.ORDER_ATOMIC);
  var valx2 = Blockly.Arduino.valueToCode(this, 'val_x2', Blockly.Arduino.ORDER_ATOMIC);
  var valy2 = Blockly.Arduino.valueToCode(this, 'val_y2', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'display.drawRect('+valx1+', '+valy1+', '+valx2+', '+valy2+', WHITE);\ndisplay.display();\n'

  return code;
};

////////////////////////oled_drawfullRect///////////////////////////
Blockly.Arduino.ke_OLED_fullrect = function() {
  var valx1 = Blockly.Arduino.valueToCode(this, 'val_x1', Blockly.Arduino.ORDER_ATOMIC);
  var valy1 = Blockly.Arduino.valueToCode(this, 'val_y1', Blockly.Arduino.ORDER_ATOMIC);
  var valx2 = Blockly.Arduino.valueToCode(this, 'val_x2', Blockly.Arduino.ORDER_ATOMIC);
  var valy2 = Blockly.Arduino.valueToCode(this, 'val_y2', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'display.fillRect('+valx1+', '+valy1+', '+valx2+', '+valy2+', 1);\ndisplay.display();\n'

  return code;
};

////////////////////////oled_roundrect///////////////////////////
Blockly.Arduino.ke_OLED_roundrect = function() {
  var valx1 = Blockly.Arduino.valueToCode(this, 'val_x1', Blockly.Arduino.ORDER_ATOMIC);
  var valy1 = Blockly.Arduino.valueToCode(this, 'val_y1', Blockly.Arduino.ORDER_ATOMIC);
  var valx2 = Blockly.Arduino.valueToCode(this, 'val_x2', Blockly.Arduino.ORDER_ATOMIC);
  var valy2 = Blockly.Arduino.valueToCode(this, 'val_y2', Blockly.Arduino.ORDER_ATOMIC);
  var val_round = Blockly.Arduino.valueToCode(this, 'val_round', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'display.drawRoundRect('+valx1+', '+valy1+', '+valx2+', '+valy2+', '+val_round+',  WHITE);\ndisplay.display();\n'

  return code;
};

////////////////////////oled_fullroundrect///////////////////////////
Blockly.Arduino.ke_OLED_fullroundrect = function() {
  var valx1 = Blockly.Arduino.valueToCode(this, 'val_x1', Blockly.Arduino.ORDER_ATOMIC);
  var valy1 = Blockly.Arduino.valueToCode(this, 'val_y1', Blockly.Arduino.ORDER_ATOMIC);
  var valx2 = Blockly.Arduino.valueToCode(this, 'val_x2', Blockly.Arduino.ORDER_ATOMIC);
  var valy2 = Blockly.Arduino.valueToCode(this, 'val_y2', Blockly.Arduino.ORDER_ATOMIC);
  var val_round = Blockly.Arduino.valueToCode(this, 'val_round', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'display.fillRoundRect('+valx1+', '+valy1+', '+valx2+', '+valy2+', '+val_round+',  WHITE);\ndisplay.display();\n'

  return code;
};

////////////////////////oled_drawcircle///////////////////////////
Blockly.Arduino.ke_OLED_circle = function() {
  var valx1 = Blockly.Arduino.valueToCode(this, 'val_x1', Blockly.Arduino.ORDER_ATOMIC);
  var valy1 = Blockly.Arduino.valueToCode(this, 'val_y1', Blockly.Arduino.ORDER_ATOMIC);
  var valx2 = Blockly.Arduino.valueToCode(this, 'val_circle', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'display.drawCircle('+valx1+', '+valy1+', '+valx2+', WHITE);\ndisplay.display();\n'

  return code;
};

////////////////////////oled_drawfillcircle///////////////////////////
Blockly.Arduino.ke_OLED_fullcircle = function() {
  var valx1 = Blockly.Arduino.valueToCode(this, 'val_x1', Blockly.Arduino.ORDER_ATOMIC);
  var valy1 = Blockly.Arduino.valueToCode(this, 'val_y1', Blockly.Arduino.ORDER_ATOMIC);
  var valx2 = Blockly.Arduino.valueToCode(this, 'val_circle', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'display.fillCircle('+valx1+', '+valy1+', '+valx2+', WHITE);\ndisplay.display();\n'

  return code;
};

////////////////////////oled_triangle///////////////////////////
Blockly.Arduino.ke_OLED_triangle = function() {
  var valx1 = Blockly.Arduino.valueToCode(this, 'val_x1', Blockly.Arduino.ORDER_ATOMIC);
  var valy1 = Blockly.Arduino.valueToCode(this, 'val_y1', Blockly.Arduino.ORDER_ATOMIC);
  var valx2 = Blockly.Arduino.valueToCode(this, 'val_x2', Blockly.Arduino.ORDER_ATOMIC);
  var valy2 = Blockly.Arduino.valueToCode(this, 'val_y2', Blockly.Arduino.ORDER_ATOMIC);
  var valx3 = Blockly.Arduino.valueToCode(this, 'val_x3', Blockly.Arduino.ORDER_ATOMIC);
  var valy3 = Blockly.Arduino.valueToCode(this, 'val_y3', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'display.drawTriangle('+valx1+', '+valy1+', '+valx2+', '+valy2+', '+valx3+', '+valy3+',WHITE);\ndisplay.display();\n'

  return code;
};

////////////////////////oled_fulltriangle///////////////////////////
Blockly.Arduino.ke_OLED_fulltriangle = function() {
  var valx1 = Blockly.Arduino.valueToCode(this, 'val_x1', Blockly.Arduino.ORDER_ATOMIC);
  var valy1 = Blockly.Arduino.valueToCode(this, 'val_y1', Blockly.Arduino.ORDER_ATOMIC);
  var valx2 = Blockly.Arduino.valueToCode(this, 'val_x2', Blockly.Arduino.ORDER_ATOMIC);
  var valy2 = Blockly.Arduino.valueToCode(this, 'val_y2', Blockly.Arduino.ORDER_ATOMIC);
  var valx3 = Blockly.Arduino.valueToCode(this, 'val_x3', Blockly.Arduino.ORDER_ATOMIC);
  var valy3 = Blockly.Arduino.valueToCode(this, 'val_y3', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'display.fillTriangle('+valx1+', '+valy1+', '+valx2+', '+valy2+', '+valx3+', '+valy3+',WHITE);\ndisplay.display();\n'

  return code;
};

////////////////////////oled_string///////////////////////////
Blockly.Arduino.ke_OLED_string = function() {
  var valx1 = Blockly.Arduino.valueToCode(this, 'val_x1', Blockly.Arduino.ORDER_ATOMIC);
  var valy1 = Blockly.Arduino.valueToCode(this, 'val_y1', Blockly.Arduino.ORDER_ATOMIC);
  var val_size = Blockly.Arduino.valueToCode(this, 'size', Blockly.Arduino.ORDER_ATOMIC);
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'display.setTextSize('+val_size+');\n  display.setTextColor(WHITE);\n  display.setCursor('+valx1+','+valy1+');\ndisplay.println('+str1+');\ndisplay.display();\n'

  return code;
};



//////////////////////////OLED//////////////////////////////////////
Blockly.Arduino.ke_oled = function() {

  var s = Blockly.Arduino.valueToCode(this, 'size', Blockly.Arduino.ORDER_ATOMIC);

  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC);
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC);
  var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC);
  var str4 = Blockly.Arduino.valueToCode(this, 'TEXT4', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'display.setTextSize('+s+');\ndisplay.setTextColor(WHITE);\ndisplay.setCursor(0,0);\ndisplay.println('+str1+');\ndisplay.println('+str2+');\ndisplay.println('+str3+');\ndisplay.println('+str4+');\ndisplay.display();\ndelay(250);';
  return code;
};


////////////////////////oled_clear///////////////////////////
Blockly.Arduino.ke_oled_clear = function() {
  
  var code = 'display.clearDisplay();\n'

  return code;
};



//////////////////////////////点阵初始化/////////////////////////////
Blockly.Arduino.ke_matrix_init = function() {
  var SDA = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  var SCL = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
  var addr = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);

  var matrixName = this.getFieldValue('matrixName');
  Blockly.Arduino.definitions_['include_Matrix'] = '#include <Matrix.h>';
  Blockly.Arduino.definitions_[matrixName] = 'Matrix '+ matrixName +'('+SDA+','+SCL+');';
  Blockly.Arduino.setups_['setup_' + matrixName] = matrixName + '.begin('+addr+'); \n';
  var code= matrixName+'.clear();\n';
  return code;
};

Blockly.Arduino.ke_Matrix_POS = function() {
  var pos_x = Blockly.Arduino.valueToCode(this, 'XVALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
  var pos_y = Blockly.Arduino.valueToCode(this, 'YVALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
  var matrixName = this.getFieldValue('matrixName');
  var dropdown_type = this.getFieldValue('DrawPixel_TYPE');
  var code = matrixName + '.drawPixel('+pos_x+'-1,'+pos_y+'-1,'+dropdown_type+');\n'
      code+= matrixName + '.writeDisplay();\n';
  return code;
};
Blockly.Arduino.ke_Matrix_Rotation = function() {
  var matrixName = this.getFieldValue('matrixName');
  var dropdown_type = this.getFieldValue('Rotation_TYPE');
  var code = matrixName + '.setRotation('+dropdown_type+');\n'
  return code;
};
Blockly.Arduino.ke_matrix_text = function() {
  var matrixName = this.getFieldValue('matrixName');
  var textString = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ASSIGNMENT);
  var code = matrixName + '.drawStr('+textString+');\n'
  return code;
};
//执行器_点阵屏显示_显示图案
Blockly.Arduino.ke_matrix1 = function() {
  var matrixName = this.getFieldValue('matrixName');
  var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);
  Blockly.Arduino.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
//  var code='Matrix_'+SDA+'_'+SCL+'.clear()dotMatrix;\n';
  var code='';
  code+='for(int i=0; i<8; i++)\n';
  code+='{\n'
  code+='  LEDArray[i]='+dotMatrixArray+'[i];\n';
  code+='  for(int j=7; j>=0; j--)\n'
  code+='  {\n'
  code+='    if((LEDArray[i]&0x01)>0)\n';
  code+='    '+ matrixName +'.drawPixel(j, i,1);\n';
  code+='    LEDArray[i] = LEDArray[i]>>1;\n';
  code+='  }  \n'
  code+='}\n'
  code+= matrixName+'.writeDisplay();\n'
  return code;
};
//执行器_点阵屏显示_点阵数组
Blockly.Arduino.ke_matrix2 = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 1; i < 9; i++) {
    a[i] = new Array();
    for (var j = 1; j < 9; j++) {
      a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var i = 1; i < 9; i++) {
    var tmp = ""
    for (var j = 1; j < 9; j++) {
      tmp += a[i][j];
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((i != 8) ? ',' : '');
  }
  code += '};';
  //Blockly.Arduino.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
  Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
  //return ["LedArray_"+clearString(this.id), Blockly.Arduino.ORDER_ATOMIC];
  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};


////////////////////////清屏/////////////////////////////
Blockly.Arduino.ke_matrix_clear = function() {
  var matrixName = this.getFieldValue('matrixName');
  var code = matrixName + '.clear();\n'
  code += matrixName +'.writeDisplay();\n';
  return code;
};


////////////////////////////////点阵1////////////////////////////
//执行器_点阵屏显示_显示图案
/*Blockly.Arduino.ke_matrix1 = function() {
  var matrixName = this.getFieldValue('matrixName');
  var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);
  Blockly.Arduino.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
//  var code='Matrix_'+SDA+'_'+SCL+'.clear()dotMatrix;\n';
  var code='';
  code+='for(int i=0; i<8; i++)\n';
  code+='{\n'       //由于硬件横向引脚排序往左移了一位的问题，需要程序将数组往右移一位。
  code+='if('+dotMatrixArray+'[i] & 0x01)\n'   //如果数据最后一位是1，1是有效数值
  code+='{\n'
  code+='LEDArray[i]=('+dotMatrixArray+'[i] >> 1) | 0x80;\n' //这里先整体往右移了，就是把最后一个数（1）移掉了，就需要或上0x80,相当于把1放到前面去。
  code+='}\n'
  code+='else\n'    //如果最后一位是0
  code+='{'
  code+='LEDArray[i]='+dotMatrixArray+'[i]>>1;\n'   //就直接往右移一位就可以，前面会自动补0
  code+='}';
  //code+='  for(int j=7; j>=0; j--)\n'
  code+='  for(int j=0; j<=7; j++)\n'
  code+='  {\n'
  code+='    if((LEDArray[i]&0x01)>0)\n';
  code+='    '+ matrixName +'.drawPixel(j, i,1);\n';
  code+='    LEDArray[i] = LEDArray[i]>>1;\n';
  code+='  }  \n'
  code+='}\n'
  code+= matrixName+'.writeDisplay();\n'
  return code;
};
//执行器_点阵屏显示_点阵数组
Blockly.Arduino.ke_matrix2 = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 1; i < 9; i++) {
    a[i] = new Array();
    for (var j = 1; j < 9; j++) {
      a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var i = 1; i < 9; i++) {
    var tmp = ""
    for (var j = 1; j < 9; j++) {
      tmp += a[i][j];

    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((i != 8) ? ',' : '');
  }
  code += '};';
  //Blockly.Arduino.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
  Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
  //return ["LedArray_"+clearString(this.id), Blockly.Arduino.ORDER_ATOMIC];
  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};*/




////////////////////////////////通讯///////////////////////////////

///////////////////////红外接收///////////////////
Blockly.Arduino.ke_ir_r = function () {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['include_IRremote'] = '#include <IRremote.h>\n';
    //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    Blockly.Arduino.definitions_['var_ir_recv' + dropdown_pin] = 'IRrecv irrecv_' + dropdown_pin + '(' + dropdown_pin + ');\ndecode_results results_' + dropdown_pin + ';\n';
    Blockly.Arduino.setups_['setup_ir_recv_' + dropdown_pin] = 'irrecv_' + dropdown_pin + '.enableIRIn();';
    var code = "if (irrecv_" + dropdown_pin + ".decode(&results_" + dropdown_pin + ")) {\n"
    code += '  ' + variable + '=results_' + dropdown_pin + '.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results_' + dropdown_pin + '.decode_type>=1&&results_' + dropdown_pin + '.decode_type<=13){\n';
    code += '    type=typelist[results_' + dropdown_pin + '.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv_' + dropdown_pin + '.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

//////////////////////////////////////红外发射/////////////////////////////
Blockly.Arduino.ke_ir_s = function() {

  var num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_IRre.h'] = '#include <IRremote.h>';
  Blockly.Arduino.definitions_['define_IRsend'] = 'IRsend irsend;';

  var code = 'irsend.sendRC5('+num1+', 8);\ndelay(200);\n';
  return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.ke_bluetooth = function () {
  var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
  var val = this.getFieldValue('VAL');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);


  Blockly.Arduino.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['mySerial'] = 'SoftwareSerial mySerial('+dropdown_pin1+', '+dropdown_pin2+');\n';
  Blockly.Arduino.definitions_['char'] = 'char '+val+';\n';

  Blockly.Arduino.setups_['mySerial23'] = 'mySerial.begin(9600);';

   var code = 'if (mySerial.available())\n{\n'+val+' = mySerial.read();\n';
   code += branch;
   code += '}\n';
  return code;
};