<template>
<div class="flex bg-white flex-col rounded border dataset">
  <div class="flex-row flex">
    <div class="h-full w-full flex flex-row justify-between rounded">
      <div class="flex flex-row">
        <img v-bind:src="dataset.thumbnails[0]"
             class="h-24 w-24 object-cover rounded-br-xl  rounded-tl">
        <img v-bind:src="dataset.thumbnails[1]"
             class="h-20 w-20 object-cover rounded-br-xl">
        <img v-bind:src="dataset.thumbnails[2]"
             class="h-12 w-12 object-cover rounded-br-xl">
        <img v-bind:src="dataset.thumbnails[3]"
             class="h-8 w-8 object-cover rounded-br-xl">
        <img v-bind:src="dataset.thumbnails[4]"
             class="h-4 w-4 object-cover rounded-br-xl ">
        <img v-bind:src="dataset.thumbnails[6]"
             class="h-2 w-2 object-cover rounded-br">
      </div>
      <div>
        <CirclePercentangeProgress v-bind:percentage="(dataset.progress * 100)"
                                   v-bind:id="dataset.id">

        </CirclePercentangeProgress>
      </div>
    </div>

  </div>
  <div class="w-full p-4 bg-gradient-to-b from-white to-blue-200 rounded-br rounded-bl">
    <div class="font-bold text-lg uppercase mb-2"> {{dataset.name}}
    </div>
    <div class="flex flex-row justify-around">
      <div class="flex flex-col p-2 rounded mr-2">
        <div class="uppercase text-gray-500 mr-2 font-bold text-xs">Annotations</div>
        <div class="text-xs text-gray-500">{{dataset.num_annotations}}</div>
      </div>
      <div class="flex flex-col p-2 rounded mr-2">
        <div class="uppercase text-gray-500 mr-2 font-bold text-xs">Images</div>
        <div class="text-xs text-gray-500">{{dataset.num_images}}</div>
      </div>
      <div class="flex flex-col p-2 rounded mr-2">
        <div class="uppercase mr-2 text-gray-500 font-bold text-xs">Videos</div>
        <div class="text-xs text-gray-500">{{dataset.num_videos}}</div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
import CirclePercentangeProgress from "@/views/Circle-percentage";
export default {
  name: "Dataset",
  props: {
    dataset: Object
  },
  components: {CirclePercentangeProgress},
}
</script>

<style scoped>
.dataset:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>