//console.log("test");
var actions = [];
var action_count = 10;
var count_changed = 1;

function setup() {
  actions = [
    "Diagonal Left",
    "Diagonal Right",
    "270° Left Turn",
    "270° Right Turn",
    "Left Turn",
    "Right Turn",
    "HALT Left Turn Forward",
    "HALT Right Turn Forward",
    "HALT Down Walk Around",
    "HALT Fast Forward From Sit",
    "HALT Sit",
    "360° Right Turn",
    "360° Left Turn",
    "About Turn",
    "Figure 8 No Distractions",
    "Stop and Down",
    "Serpentine Weave Once",
    "Offset Serpentine Left",
    "Offset Serpentine Right",
    "Moving Side Step Right",
    "Moving Side Step Left",
    "Loop Right",
    "Loop Left",
    "Slow Pace",
    "Normal Pace",
    "Fast Pace",
    "Call Front Return to Heel",
    "Call Front Finish Right Forward",
    "Call Front Finish Left Forward"
  ];
  createCanvas(1000, 1000);
  fill(0,0,0);
  textSize(20);
  let inp = createInput('');
  inp.position(100, 300);
  inp.size(100);
  inp.input(myInputEvent);
  //background(168, 220, 255);
}

function draw() {
  if (count_changed) {
    console.log("generating...")
    clear();
    text("Enter number of actions (default 10):", 100, 40);
    var output_actions = [];
    var prev_index = -1;
    if (action_count > actions.length){
      action_count = actions.length;
    }
    var index = floor(random(0, actions.length));
    for (let i=0; i<action_count; i++){
      if (index < (actions.length/2)){
        index = floor(random(index+1,actions.length));
      } else {
        index = floor(random(0, index-1));
      }
      //console.log(actions[index]);
      output_actions.push(actions[index]);
      prev_index = index;
    }
    count_changed = 0;
    text_pos = 100;
    direction = floor(random(0,2));
    console.log(direction);
    start = "Clockwise";
    if (direction) {
      start = "Counter-Clockwise";
    }
    text("Starting Direction: " + start, 100, text_pos);
    text_pos += 20;
    for (let i=0; i<output_actions.length; i++){
      text(str(i+1) + ") " + output_actions[i], 120, text_pos);
      text_pos += 20;
    }
    console.log(output_actions);
  }
}

function myInputEvent() {
  // console.log('you are typing: ', this.value());
  action_count = this.value();
  count_changed = 1;
}

// function windowResized(){
//   resizeCanvas(windowWidth/2, windowHeight/2);
// }
