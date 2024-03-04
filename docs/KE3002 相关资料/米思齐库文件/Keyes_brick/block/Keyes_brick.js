'use strict';



//////////////////颜色/////////////////////
goog.provide('Blockly.Blocks.Keyes_control');
Blockly.Blocks.Keyes_control.HUE = 120;

goog.provide('Blockly.Blocks.Keyes_digitalRead');
Blockly.Blocks.Keyes_digitalRead.HUE = 230;

goog.provide('Blockly.Blocks.Keyes_analogRead');
Blockly.Blocks.Keyes_analogRead.HUE = 360;

goog.provide('Blockly.Blocks.Keyes_special');
Blockly.Blocks.Keyes_special.HUE = 320;

goog.provide('Blockly.Blocks.Keyes_display');
Blockly.Blocks.Keyes_display.HUE = 275;

goog.provide('Blockly.Blocks.Keyes_communication');
Blockly.Blocks.Keyes_communication.HUE = 180;

//goog.provide('Blockly.Blocks.keyes');
//Blockly.Blocks.keyes.HUE = 120;

goog.require('Blockly.Blocks');

/////////////////模拟输出//////////////////////
Blockly.Blocks.ke_a_Write = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.Kids_anologWrite);
    //.appendField(new Blockly.FieldImage("../../media/KS0077/ks77_led3.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("num", Number)
    .appendField(Blockly.Kids_value)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    
    //.appendField(new Blockly.FieldDropdown([[Blockly.ke_ON, "HIGH"], [Blockly.ke_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

//////////////////食人鱼LED////////////////
Blockly.Blocks.ke_led_r = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    //.appendField(Blockly.MIXLY_ke_LED1)
    .appendField(Blockly.ke_red_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_red.png", 52, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.ke_led_y = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_yellow_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_yellow.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.ke_led_w = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_white_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_white.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_led_g = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_white_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_g.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_led4 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_3W)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_3w.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_jg = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_jg1)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_jg.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


Blockly.Blocks.ke_dual = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_dual_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_double.png", 43, 32));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_qcd = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_QCD)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_qcd.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//////////////////RGB1////////////////////
Blockly.Blocks.ke_rgb1_1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_RGB)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rgb.png", 43, 32));
    this.appendValueInput("PIN1", Number)
    .appendField("R:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "LOW"], [Blockly.Kids_OFF, "HIGH"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField("G:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "LOW"], [Blockly.Kids_OFF, "HIGH"]]), "STAT2");
    this.appendValueInput("PIN3", Number)
    .appendField("B:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "LOW"], [Blockly.Kids_OFF, "HIGH"]]), "STAT3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


////////////////////////rgb01///////////////////////////////////
Blockly.Blocks.ke_rgb1_2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField("RGB")
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rgb.png", 43, 32));
    this.appendValueInput("R", Number)
    .appendField("R")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("r", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("R(0~255):");
    this.appendValueInput("G", Number)
    .appendField("G")
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("g", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("G(0~255):");
    this.appendValueInput("B", Number)
    .appendField("B")
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("b", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("B(0~255):");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

//////////////////RGB2///////////////////
Blockly.Blocks.ke_rgb2_1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_RGB)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rgb2.png", 43, 32));
    this.appendValueInput("PIN1", Number)
    .appendField("R:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField("G:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT2");
    this.appendValueInput("PIN3", Number)
    .appendField("B:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


////////////////////////rgb01///////////////////////////////////
Blockly.Blocks.ke_rgb2_2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField("RGB")
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rgb2.png", 43, 32));
    this.appendValueInput("R", Number)
    .appendField("R")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("r", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("R(0~255):");
    this.appendValueInput("G", Number)
    .appendField("G")
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("g", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("G(0~255):");
    this.appendValueInput("B", Number)
    .appendField("B")
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("b", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("B(0~255):");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


/////////////////蜂鸣器//////////////////////
Blockly.Blocks.ke_w_buzzer1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BUZZER1)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_y.png", 39, 32));    
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.ke_w_buzzer2={
  init:function(){
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BUZZER2)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 39, 32));    
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput('FREQUENCY')
    .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_FREQUENCY);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
      }
    };
    Blockly.Blocks.ke_w_buzzer3={
      init:function(){
        this.setColour(Blockly.Blocks.Keyes_control.HUE);
        this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ke_BUZZER2)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 39, 32));    
        this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
        this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_FREQUENCY);
        this.appendValueInput('DURATION')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DURATION);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
      }
    };

       //////////////////蜂鸣器//////////////////
var TONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];


Blockly.Blocks.ke_tone01 = {
   init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.ke_buzzer={
init:function(){
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BUZZER2)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 39, 32));  
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.kids_tone);

    //this.appendValueInput('DURATION')
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(Blockly.kids_beat);
    this.appendDummyInput("")
        .appendField(Blockly.kids_beat)
        .appendField(new Blockly.FieldDropdown([["1/8", "125"],["3/8", "375"],["1/4", "250"],["3/4", "750"],["1/2", "500"],["1", "1000"]]), 'beat1');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
  }
};


///////////music////////////////////
Blockly.Blocks.ke_music = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.kids_play_tone)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 39, 32));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);   
    this.appendDummyInput("")
        //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
        .appendField(new Blockly.FieldDropdown([[Blockly.kids_Ode_to_joy, "Ode to Joy"],[Blockly.kids_birthday, "Birthday"]]), 'play');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////////关闭蜂鸣器////////////////////////
Blockly.Blocks.ke_notone={
init:function(){
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.kids_notone)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 39, 32));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);   
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};


///////////////////////继电器////////////////////////////
Blockly.Blocks.ke_relay = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_RELAY)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_relay.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////电机///////////////////////////////////
Blockly.Blocks.ke_motor = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_MOTOR01)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_dianji.png", 43, 32));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INA')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INB')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////电机001///////////////////////////////////
Blockly.Blocks.ke_motor001 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_MOTOR01)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_dianji.png", 43, 32));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INA')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("pwmb")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWMB:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////电机2///////////////////////////////////
Blockly.Blocks.ke_motor2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_MOTOR)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_fs.png", 43, 32));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INA')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INB')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////电机002///////////////////////////////////
Blockly.Blocks.ke_motor002 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_MOTOR)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_fs.png", 43, 32));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INA')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("pwmb")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWMB:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////TB6612电机驱动///////////////////////////////////
Blockly.Blocks.ke_tb6612 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_TB6612)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_tb6612.png", 43, 32));
    this.appendValueInput("MA", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('MA')
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_H, "HIGH"], [Blockly.MIXLY_L, "LOW"]]), "STAT1");
    this.appendValueInput("MB", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('MB')
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_H, "HIGH"], [Blockly.MIXLY_L, "LOW"]]), "STAT2");
    this.appendValueInput("PWMA", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput("pwma")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWMA:");
    this.appendValueInput("PWMB", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput("pwmb")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWMB:");
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


///////////////////////////舵机///////////////////////////////////
Blockly.Blocks.ke_servo = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_ke_SERVO)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_servo.png", 70, 32))
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput("angle", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DEGREE_0_180);
    this.appendValueInput("time", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DELAY+'('+Blockly.MIXLY_DELAY_MS+')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};

Blockly.Blocks.ke_servo_r = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_ke_SERVO)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_READ_DEGREES)
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_READ);
  }
};

/////////////////////数字传感器///////////////////////////////

///////////人体红外传感器////////////////////
Blockly.Blocks.ke_ir_g = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_IR_G)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rentihongwai.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////火焰传感器////////////////////
/*
Blockly.Blocks.ke_flame = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_FLAME)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_fire.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};
*/

///////////霍尔传感器////////////////////
Blockly.Blocks.ke_hall = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_HALL)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_hall.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////敲击传感器////////////////////
Blockly.Blocks.ke_crash = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_KNOCK)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_zhengdong.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////按键传感器////////////////////
Blockly.Blocks.ke_button = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BUTTON)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_button.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////电容触摸传感器////////////////////
Blockly.Blocks.ke_tuoch = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_TUOCH)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_touch.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////碰撞传感器////////////////////
Blockly.Blocks.ke_knock = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_CRASH)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_pengzhuang.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////倾斜传感器////////////////////
Blockly.Blocks.ke_tilt = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_TILT)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_qingxie.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////振动传感器////////////////////
Blockly.Blocks.ke_shake = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SHAKE)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_qiaoji.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};



///////////干簧管传感器////////////////////
Blockly.Blocks.ke_reed_s = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_REED_S)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_ghg.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////循迹传感器////////////////////
Blockly.Blocks.ke_track = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_TRACK)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_xunji.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////避障传感器////////////////////
Blockly.Blocks.ke_avoid = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_AVOID)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_hongwaibz.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////光折断传感器////////////////////
Blockly.Blocks.ke_light_b = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_LIGHT_B)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_photo.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////烟雾数字传感器////////////////////
Blockly.Blocks.ke_smoke_D = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SMOKE)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_gas.png", 60, 48));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////酒精数字传感器////////////////////
Blockly.Blocks.ke_alcohol_D = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ALCOHOL)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_alcohol.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};




///////////////////////////模拟传感器//////////////////////////
///////////模拟温度传感器///////////////
Blockly.Blocks.ke_analog_t = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ANALOG_T)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_mnwd.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////声音传感器///////////////
Blockly.Blocks.ke_sound = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SOUND)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_sound.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////光线传感器///////////////
Blockly.Blocks.ke_light = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_LIGHT)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_guangmin.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////水位传感器///////////////
Blockly.Blocks.ke_water = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_WATER)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_water.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////土壤传感器///////////////
Blockly.Blocks.ke_soil = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SOIL)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_soil.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////电位器///////////////
Blockly.Blocks.ke_potentiometer = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_POTENTIOMETER)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_dianweiqi.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////LM35///////////////
Blockly.Blocks.ke_lm35 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_LM35)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_lm35.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////滑动电位器///////////////
Blockly.Blocks.ke_slide_potentiometer = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SLIDE_POTENTIOMETER)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_hddwq.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////TEMT6000环境光///////////////
Blockly.Blocks.ke_temt6000 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_TEMT6000)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_temt6000.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////水蒸气传感器///////////////
Blockly.Blocks.ke_steam = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_STEAM)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_steam.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////薄膜压力传感器///////////////
Blockly.Blocks.ke_film_p = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_FILM_P)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_tptouch.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////摇杆传感器///////////////
var joystick = [
  ["x", "Lx"],
  ["y", "Ly"],
 // ["z", "Lz"],
];

Blockly.Blocks.ke_joystick = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    //this.appendDummyInput("")
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(joystick), "joy");
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_JOYSTICK)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_joys.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////遥感按钮////////////////////
Blockly.Blocks.ke_joystick_btn = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_JOYSTICK_btn)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_joys.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};


///////////烟雾传感器///////////////
Blockly.Blocks.ke_smoke = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SMOKE)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_gas.png", 60, 48));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////酒精传感器///////////////
Blockly.Blocks.ke_alcohol = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ALCOHOL)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_alcohol.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////手指脉动传感器///////////////
Blockly.Blocks.ke_shouzhi = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_shouzhi1)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_sz.png", 60, 48));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////MQ135空气质量///////////////
Blockly.Blocks.ke_mq135 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_MQ135)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_gas.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////火焰模拟传感器///////////////
Blockly.Blocks.ke_fire2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_FLAME)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_fire.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////18B20温度模块///////////////
Blockly.Blocks.ke_18b20 = {
    init: function () {
        var UNIT = [[Blockly.MIXLY_DS18B20_C, '0'], [Blockly.MIXLY_DS18B20_F, '1']];
        this.setColour(Blockly.Blocks.Keyes_special.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_ke_18B20)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_18B20.png", 50, 40))
            .appendField(Blockly.Kids_pin)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_ke_18B20_R)
            .appendField(new Blockly.FieldDropdown(UNIT), "UNIT");
        this.setOutput(true, Number);
    }
};

///////////////////////////////DHT11//////////////////////////////////
Blockly.Blocks.ke_dht11 = {
    init: function () {
        var WHAT = [[Blockly.MIXLY_DHT11_T, 'temperature'], [Blockly.MIXLY_DHT11_H, 'humidity']];
        this.setColour(Blockly.Blocks.Keyes_special.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new Blockly.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22'], ['DHT33', '33'], ['DHT44', '44']]), 'TYPE')
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_dht11.png", 50, 40))
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
        this.setOutput(true, Number);
        var thisBlock = this;
        this.setTooltip(function () {
            var op = thisBlock.getFieldValue('WHAT');
            var TOOLTIPS = {
                'temperature': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
                'humidity': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
            };
            return TOOLTIPS[op];
        });
    }
};

//////////BMP180高度计模块///////////////
Blockly.Blocks.ke_bmp180 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BMP180)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_bmp180.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

/////////////////////////////////////////////
////////////////传感器////////////////////////
/////////////////////////////////////////////


///////////ADKey///////////////
Blockly.Blocks.ke_ADKey = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.kids_ADkey)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_ADKey.png", 60, 48));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};


//////////////////////魔术光杯///////////////
Blockly.Blocks.ke_msgb_led = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_msgb_led1)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_msgb.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//////////魔术光杯/////////////////
Blockly.Blocks.ke_msgb_sor = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_msgb_sor1)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_msgb.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////////超声波/////////////////////////
Blockly.Blocks.ke_sr01 = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SR01)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_sr04.png", 50, 40));
    this.appendValueInput("PIN1", Number)
    .appendField('Trig#')
    .setCheck(Number);
    this.appendValueInput("PIN2", Number)
    .appendField('Echo#')
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};


var ADXL345_ZHOU = [
  [Blockly.MIXLY_ADXL345_X, "x"],
  [Blockly.MIXLY_ADXL345_Y, "y"],
  [Blockly.MIXLY_ADXL345_Z, "z"],
 // [Blockly.MIXLY_ADXL345_XA, "xa"],
  //[Blockly.MIXLY_ADXL345_YA, "ya"]
  //, [Blockly.MIXLY_ADXL345_ZA, "za"]
];
//传感器-重力感应块-获取数据
Blockly.Blocks.ke_adxl345 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ADXL345)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_adxl345.png", 50, 40))
    .appendField(Blockly.Kids_iic);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(ADXL345_ZHOU), "ADXL345_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};


/////////////////////////////BMP280////////////////////////
var BMP280_TP = [
  [Blockly.MIXLY_ke_BMP280_T, "T"],
  [Blockly.MIXLY_ke_BMP280_A, "P"],
  [Blockly.MIXLY_ke_BMP180_H, "A"],
];
/////////////////////////////BMP280////////////////////////
Blockly.Blocks.ke_bmp280 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BMP280)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_bmp180.png", 50, 40))
    .appendField(Blockly.Kids_iic);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(BMP280_TP), "BMP280_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};


/////////////////////////////BMP180////////////////////////
var BMP180_TP = [
  [Blockly.MIXLY_ke_BMP180_T, "T"],
  [Blockly.MIXLY_ke_BMP180_A, "P"],
  [Blockly.MIXLY_ke_BMP180_H, "A"],
];
/////////////////////////////BMP180////////////////////////
Blockly.Blocks.ke_bmp180 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BMP180)
    .appendField(Blockly.Kids_iic);
    //.appendField(new Blockly.FieldImage("../../media/keyes/ke_bmp180.png", 50, 40));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(BMP180_TP), "BMP180_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};

//////////////////////////////////DS3231时钟。//////////////////////////////
//传感器-实时时钟块_设置时间
Blockly.Blocks.ke_ds3231 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_3231)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_ds3231.png", 50, 40))
    .appendField(Blockly.Kids_iic)
    .appendField(new Blockly.FieldTextInput('myTime'), 'RTCName');
    this.appendValueInput("dow").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_ke_TEXT);
    this.appendValueInput("day").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_ke_DAY);
    this.appendValueInput("month").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_ke_MONTH);
    this.appendValueInput("year").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_ke_YEAR);
    
    this.appendValueInput("hour").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_ke_HOUR);
    this.appendValueInput("minute").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_ke_MINUTE);
    this.appendValueInput("second").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_ke_SECOND);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
   }
};

////////////////////////////DS3231读取时间/////////////////////////////////
//传感器-实时时钟块_时间变量
var RTC_TIME_TYPE = [
  [Blockly.MIXLY_ke_YEAR, "getYear"],
  [Blockly.MIXLY_ke_MONTH, "getMonth"],
  [Blockly.MIXLY_ke_DAY, "getDay"],
  [Blockly.MIXLY_ke_HOUR, "getHour"],
  [Blockly.MIXLY_ke_MINUTE, "getMinute"],
  [Blockly.MIXLY_ke_SECOND, "getSecond"],
  [Blockly.MIXLY_ke_WEEK, "getWeek"],
];

//传感器-实时时钟块_获取时间
Blockly.Blocks.ke_ds3231getTime = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_ke_GET);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput('myTime'), 'RTCName');
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
    this.setInputsInline(true);
    this.setOutput(true, Number);
  }
};

///////////旋转编码器////////////////////
Blockly.Blocks.ke_rotation_button = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ROT)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rotaration.png", 43, 32));
    this.appendValueInput("button", Number)
    .appendField(Blockly.Kids_rot)
    .setCheck(Number);
    
    this.setOutput(true, Boolean);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};


/*var rot = [
  ["right", "R"],
  ["left", "L"],
  ["button", "B"],
];*/

///////////旋转编码器////////////////////
Blockly.Blocks.ke_rotation_right = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ROT)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rotaration.png", 43, 32));
   // this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(rot), "rot");
    this.appendDummyInput()
        .appendField(Blockly.Kids_rot_count)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput('i'), 'VAR');
    this.appendValueInput("DAT", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("DAT")
    .setCheck(Number);
    this.appendValueInput("CLK", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("CLK")
    .setCheck(Number);
    //this.appendValueInput("button", Number)
   // .appendField("SW")
  //  .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip('');
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};

/////////////////pca9685////////////////////////////
Blockly.Blocks.ke_pca9685 = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_special.HUE);
        this.appendDummyInput("")
            .appendField("pca9685")
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_pca9685.png", 70, 40));
         
        this.appendValueInput("pin")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("pin0~15");
        this.appendValueInput("pwm")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_ke_angle);
        
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};





////////////////////////////////////////////////////
////////////////////////显示屏///////////////////////
////////////////////////////////////////////////////

//////////////////RGB灯////////////////////////////
Blockly.Blocks.ke_rgb2812 = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_ke_2812RGB)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_rgb2812.png", 50, 40));
         this.appendValueInput("PIN", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_PIN);
        this.appendValueInput("num01")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_ke_Count);
        this.appendValueInput("red")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("R：");
        this.appendValueInput("green")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("G：");
        this.appendValueInput("blue")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("B：");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

/////////////////////TM1637数码管初始化////////////////////////////////////
Blockly.Blocks.ke_tm1637_init = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 50, 40));
        this.appendValueInput("PIN1", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("#CLK:");
        this.appendValueInput("PIN2", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("#DIO:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        //this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_TIP);
        //this.setHelpUrl('');
    }
};

//////////////////TM1637数码自定义显示////////////////////////////
Blockly.Blocks.ke_tm1637_dy = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 50, 40));
  
        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_value);
   
        this.appendValueInput("weishu")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_ws);
        this.appendValueInput("wei")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_begin);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码自定义显示是否填充////////////////////////////
Blockly.Blocks.ke_tm1637_tc = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 50, 40));
  
        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_value);
   
        this.appendValueInput('0and1')
            .setCheck([Number,Boolean])
            .appendField(Blockly.ke_fill0);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管亮度////////////////////////////
Blockly.Blocks.ke_tm1637_ld = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 50, 40));
  
        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_light);
   
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管是否隐藏////////////////////////////
Blockly.Blocks.ke_tm1637_yc = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 50, 40));
  
        this.appendValueInput('BOOL')
            .setCheck([Number,Boolean])
            .appendField(Blockly.ke_XY);
   
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管是否显示冒号////////////////////////////
Blockly.Blocks.ke_tm1637_mh = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 50, 40));
        this.appendValueInput("num1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_L);
        this.appendValueInput('BOOL')
            .setCheck([Number,Boolean])
            .appendField(Blockly.ke_MH);
        this.appendValueInput("num2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_R);
   
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
/////////////////////8*8点阵/////////////////////

Blockly.Blocks.ke_matrix_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_DISPLAY_MATRIX_INIT).appendField(new Blockly.FieldImage("../../media/keyes/ke_matrix.png", 70, 32));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    this.appendValueInput("address", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("address:");
    this.appendValueInput("PIN1").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("SDA#");
    this.appendValueInput("PIN2").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("SCL#"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//   this.setTooltip("display_点阵屏初始化");
   }
};


//执行器_点阵屏显示_画点变量
var ke_DrawPixel_NUM = [
  [Blockly.MIXLY_4DIGITDISPLAY_ON, "1"],
  [Blockly.MIXLY_4DIGITDISPLAY_OFF, "0"]
];

//执行器_点阵屏显示_画点显示
Blockly.Blocks.ke_Matrix_POS = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendValueInput("XVALUE").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_X);
    this.appendValueInput("YVALUE").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_Y);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOWPOINT).appendField(new Blockly.FieldDropdown(ke_DrawPixel_NUM), "DrawPixel_TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip(Blockly.MIXLY_DISPLAY_MATRIX_SHOWPOINT_TOOLTIP);
  }
};
//执行器_点阵屏显示_旋转变量
var ke_Rotation_NUM = [
  ["0°", "0"],
  ["-90°", "1"],
  ["+90°", "3"],
  ["180°", "2"]
];

//执行器_点阵屏显示_显示旋转
Blockly.Blocks.ke_Matrix_Rotation = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_ROTATE).appendField(new Blockly.FieldDropdown(ke_Rotation_NUM), "Rotation_TYPE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
 //   this.setTooltip("");
  }
};
//执行器_点阵屏显示_字符显示
Blockly.Blocks.ke_matrix_text={
  init:function(){
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendValueInput("TEXT", String).setCheck([Number, String]).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.ke_string);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    //this.setTooltip("");
  }
};
//执行器_点阵屏显示_显示图案
Blockly.Blocks.ke_matrix1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW).appendField(new Blockly.FieldImage("../../media/keyes/ke_matrix.png", 70, 32));
    this.appendValueInput("LEDArray").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_PICARRAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip();
  }
};
//执行器_点阵屏显示_图案数组
Blockly.Blocks.ke_matrix2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_DISPLAY_MATRIX_ARRAYVAR).appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a81").appendField(new Blockly.FieldCheckbox("FALSE"), "a82").appendField(new Blockly.FieldCheckbox("FALSE"), "a83").appendField(new Blockly.FieldCheckbox("FALSE"), "a84").appendField(new Blockly.FieldCheckbox("FALSE"), "a85").appendField(new Blockly.FieldCheckbox("FALSE"), "a86").appendField(new Blockly.FieldCheckbox("FALSE"), "a87").appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a71").appendField(new Blockly.FieldCheckbox("FALSE"), "a72").appendField(new Blockly.FieldCheckbox("FALSE"), "a73").appendField(new Blockly.FieldCheckbox("FALSE"), "a74").appendField(new Blockly.FieldCheckbox("FALSE"), "a75").appendField(new Blockly.FieldCheckbox("FALSE"), "a76").appendField(new Blockly.FieldCheckbox("FALSE"), "a77").appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a61").appendField(new Blockly.FieldCheckbox("FALSE"), "a62").appendField(new Blockly.FieldCheckbox("FALSE"), "a63").appendField(new Blockly.FieldCheckbox("FALSE"), "a64").appendField(new Blockly.FieldCheckbox("FALSE"), "a65").appendField(new Blockly.FieldCheckbox("FALSE"), "a66").appendField(new Blockly.FieldCheckbox("FALSE"), "a67").appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a51").appendField(new Blockly.FieldCheckbox("FALSE"), "a52").appendField(new Blockly.FieldCheckbox("FALSE"), "a53").appendField(new Blockly.FieldCheckbox("FALSE"), "a54").appendField(new Blockly.FieldCheckbox("FALSE"), "a55").appendField(new Blockly.FieldCheckbox("FALSE"), "a56").appendField(new Blockly.FieldCheckbox("FALSE"), "a57").appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a41").appendField(new Blockly.FieldCheckbox("FALSE"), "a42").appendField(new Blockly.FieldCheckbox("FALSE"), "a43").appendField(new Blockly.FieldCheckbox("FALSE"), "a44").appendField(new Blockly.FieldCheckbox("FALSE"), "a45").appendField(new Blockly.FieldCheckbox("FALSE"), "a46").appendField(new Blockly.FieldCheckbox("FALSE"), "a47").appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a31").appendField(new Blockly.FieldCheckbox("FALSE"), "a32").appendField(new Blockly.FieldCheckbox("FALSE"), "a33").appendField(new Blockly.FieldCheckbox("FALSE"), "a34").appendField(new Blockly.FieldCheckbox("FALSE"), "a35").appendField(new Blockly.FieldCheckbox("FALSE"), "a36").appendField(new Blockly.FieldCheckbox("FALSE"), "a37").appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a21").appendField(new Blockly.FieldCheckbox("FALSE"), "a22").appendField(new Blockly.FieldCheckbox("FALSE"), "a23").appendField(new Blockly.FieldCheckbox("FALSE"), "a24").appendField(new Blockly.FieldCheckbox("FALSE"), "a25").appendField(new Blockly.FieldCheckbox("FALSE"), "a26").appendField(new Blockly.FieldCheckbox("FALSE"), "a27").appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a11").appendField(new Blockly.FieldCheckbox("FALSE"), "a12").appendField(new Blockly.FieldCheckbox("FALSE"), "a13").appendField(new Blockly.FieldCheckbox("FALSE"), "a14").appendField(new Blockly.FieldCheckbox("FALSE"), "a15").appendField(new Blockly.FieldCheckbox("FALSE"), "a16").appendField(new Blockly.FieldCheckbox("FALSE"), "a17").appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
    this.setOutput(true, Number);
    //this.setTooltip();
  }
};


//执行器_点阵屏显示_清除屏幕
Blockly.Blocks.ke_matrix_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_CLEAR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip();
  }
};

///////////////////1602LCD无IIC//////////////////////
/*Blockly.Blocks.ke_1602lcd_w = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput("")
          .appendField("LCD1602")
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_lcd1602.png", 70, 32));
    this.appendValueInput("TEXT1", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
*/


///////////////////1602LCD_init//////////////////////
Blockly.Blocks.ke_1602lcd_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendValueInput("address", Number)
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_SETUP)
        .appendField(Blockly.Kids_lcd_p)
        .appendField(new Blockly.FieldDropdown([['1602','16,2'],['2004','20,4']]),'TYPE')
        .appendField(Blockly.Kids_shilihua)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.Kids_iic_pin)
        //.appendField("address:");
        
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("address:");
        .appendField(Blockly.MIXLY_LCD_ADDRESS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};


Blockly.Blocks.ke_1602lcd = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput("")
          .appendField(Blockly.MIXLY_DF_LCD)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_lcd1602.png", 70, 32));
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
       // .appendField(Blockly.MIXLY_DF_LCD)
        
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_1602lcd_print2 = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendValueInput("row", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_ROW);
    this.appendValueInput("column", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_COLUMN);
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
  }
};




///////////////////1602LCD//////////////////////
/*Blockly.Blocks.ke_1602lcd = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_1602LCD)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_lcd1602.png", 70, 32));
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print1);
    this.appendValueInput("TEXT2", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};*/

Blockly.Blocks.ke_1602lcd_left = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Kids_lcd_left)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR');
        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_1602lcd_right = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Kids_lcd_right)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR');
        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_1602lcd_clear = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_LCD_STAT_ON, "display"], [Blockly.MIXLY_LCD_STAT_OFF, "noDisplay"], [Blockly.MIXLY_LCD_STAT_CURSOR, "cursor"], [Blockly.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], [Blockly.MIXLY_LCD_STAT_BLINK, "blink"], [Blockly.MIXLY_LCD_STAT_NOBLINK, "noBlink"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"], [Blockly.MIXLY_LCD_NOBACKLIGHT, "noBacklight"], [Blockly.MIXLY_LCD_BACKLIGHT, "backlight"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////LCD1602清屏///////////////////////
/*Blockly.Blocks.ke_1602lcd_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField("1602LCD_clear")
    //.appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};*/


/////////////////2004LCD//////////////////////
Blockly.Blocks.ke_2004lcd = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_2004LCD)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_lcd2004.png", 70, 32));
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("第一行");
    this.appendValueInput("TEXT2", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("第二行")
    this.appendValueInput("TEXT3", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("第三行");
    this.appendValueInput("TEXT4", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("第四行")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


///////////////////OLED_init///////////////////////
Blockly.Blocks.ke_OLED_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_init)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_oled.png", 70, 32))
    .appendField(Blockly.Kids_iic_pin);
    //.appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_piexl///////////////////////
Blockly.Blocks.ke_OLED_piexl = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_piexl);
    this.appendValueInput("val_x", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    //.appendField(new Blockly.FieldImage("../../media/keyes/ke_oled.png", 70, 32))
    //.appendField(Blockly.Kids_iic_pin);
    //.appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_line///////////////////////
Blockly.Blocks.ke_OLED_line = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_line)
    .appendField(Blockly.ke_oled_cong);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_dao);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


///////////////////OLED_rect///////////////////////
Blockly.Blocks.ke_OLED_rect = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_rect);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_kai);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_chang);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_kuan);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_fullrect///////////////////////
Blockly.Blocks.ke_OLED_fullrect = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_fil_lrect);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_kai);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_chang);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_kuan);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



///////////////////OLED_roundrect///////////////////////
Blockly.Blocks.ke_OLED_roundrect = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_r_rect);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_kai);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_chang);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_kuan);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendValueInput("val_round", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_radius);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


///////////////////OLED_fullroundrect///////////////////////
Blockly.Blocks.ke_OLED_fullroundrect = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_r_fill_rect);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_kai);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_chang);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_kuan);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendValueInput("val_round", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_radius);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



///////////////////OLED_circle///////////////////////
Blockly.Blocks.ke_OLED_circle = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_circle);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    
    this.appendValueInput("val_circle", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_circle_radius);
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_fullcircle///////////////////////
Blockly.Blocks.ke_OLED_fullcircle = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_fill_circle);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    
    this.appendValueInput("val_circle", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_circle_radius);
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_三角形///////////////////////
Blockly.Blocks.ke_OLED_triangle = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_triangle)
    .appendField(Blockly.ke_oled_angle1);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);

    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_angle2);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);

    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_angle3);
    this.appendValueInput("val_x3", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y3", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



///////////////////OLED_填充三角形///////////////////////
Blockly.Blocks.ke_OLED_fulltriangle = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_fill_triangle)
    .appendField(Blockly.ke_oled_angle1);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);

    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_angle2);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);

    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_angle3);
    this.appendValueInput("val_x3", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y3", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_string///////////////////////
Blockly.Blocks.ke_OLED_string = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_string1);
    this.appendValueInput("size", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Kids_size);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_weizhi);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_print);
    //.appendField(new Blockly.FieldImage("../../media/keyes/ke_oled.png", 70, 32))
    //.appendField(Blockly.Kids_iic_pin);
    //.appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


////////////////////OLED////////////////////////
Blockly.Blocks.ke_oled = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_OLED);
    

    this.appendValueInput("size", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Kids_size);
 
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print1);
    this.appendValueInput("TEXT2", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print2);
    this.appendValueInput("TEXT3", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print3);
    this.appendValueInput("TEXT4", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print4);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED清屏///////////////////////
Blockly.Blocks.ke_oled_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_clear)
    //.appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


/////////////////////////////通讯/////////////////////////////////////////////

////////////////红外接收////////////////////////////
//红外接收模块
Blockly.Blocks.ke_ir_r = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_communication.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new Blockly.FieldTextInput('ir_rec'), 'VAR')
            .appendField(Blockly.MIXLY_ke_IR_R)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_irr.png", 70, 32))
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
        this.appendStatementInput('DO')
            .appendField(Blockly.MIXLY_ke_read);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

////////////////////红外发射/////////////////////
Blockly.Blocks.ke_ir_s = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_communication.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_IR_E)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_irs.png", 43, 32));
    
    this.appendValueInput("num1", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Send");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//////////////////////蓝牙////////////////////////////
Blockly.Blocks.ke_bluetooth = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_communication.HUE);
        this.appendValueInput("PIN1", Number)
            .appendField(new Blockly.FieldTextInput('val'), 'VAL')
            .appendField(Blockly.MIXLY_ke_BLUETOOTH)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_bluetooth.png", 70, 32))
            .appendField("RX:")
            .setCheck(Number);
        this.appendValueInput("PIN2", Number)
            .appendField("TX:")
            .setCheck(Number);
        this.appendStatementInput('DO')
            .appendField(Blockly.MIXLY_ke_read);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};