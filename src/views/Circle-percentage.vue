<template>
  <canvas v-bind:id="'myCanvas' + id" width="100" height="100"></canvas>
</template>

<script>
export default {
  name: "Circle-percentage",
  props: {
    percentage: Number,
    id: String
  },
  mounted() {
    function degreesToRadians(deg) {
      return (deg/180) * Math.PI;
    }

    function percentToRadians(percentage) {
      // convert the percentage into degrees
      const degrees = percentage * 360 / 100;
      // and so that arc begins at top of circle (not 90 degrees) we add 270 degrees
      return degreesToRadians(degrees + 270);
    }

    function getColorByPercentage(percentage) {
      if (percentage < 25) {
        return "red";
      }  else if(percentage >= 25 && percentage <75){
        return "orange";
      } else {
        return "green";
      }
    }

    function drawPercentageCircle(percentage, radius, canvas) {
      const context = canvas.getContext('2d');
      canvas.style.backgroundColor = 'white';

      const x = canvas.width / 2;
      const y = canvas.height / 2;
      const startAngle = percentToRadians(0);
      const endAngle = percentToRadians(percentage);
      // set to true so that we draw the missing percentage
      let counterClockwise = true;

      context.beginPath();
      context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      context.lineWidth = 6;

      // line color
      context.strokeStyle = 'lightgray';
      context.stroke();

      const color = getColorByPercentage(percentage);
      // set to false so that we draw the actual percentage
      counterClockwise = false;

      context.beginPath();
      context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      context.lineWidth = 6;

      // line color
      context.strokeStyle = color;
      context.stroke();

      // now draw the inner text
      context.font = '26px';
      context.fillStyle = color;
      context.textAlign = "center";
      // baseline correction for text
      context.fillText(percentage+"%", x, y*1.05);
    }
    // implantation happens here
    const myCanvas = document.getElementById('myCanvas' + this.id);
    let radius;
    if (myCanvas.height < myCanvas.width) {
      radius = myCanvas.height / 3;
    }
    else {
      radius = myCanvas.width / 3;
    }
    drawPercentageCircle((Math.round(this.percentage * 10) / 10), radius, myCanvas);

  }
}
</script>

<style scoped>

</style>