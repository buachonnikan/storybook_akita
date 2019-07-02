<template>
  <button :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
    button{
        position: relative;
        top: 0;
        margin-top: 0;
        margin-bottom: 4px;
        color:cadetblue;
        font-weight: 600;
        background-color:white;
        border:1px solid cadetblue;
        border-radius: 20px;
        /* height:5vh;
        width:10vw; */
        cursor:pointer;
        box-shadow: 0 4px 0 0 rgb(53, 86, 87);
    }
    /* button:hover{
        color:white;
        background-color:cadetblue;
    } */
    button:active{
        box-shadow: none;
        top: 2px;
        margin-bottom: 0;
        outline: 0 !important;
    }
    button:focus{
        outline: 0 !important;
    }
    button:disabled{
        color:gray;
        background-color:white;
        border:1px solid gray;
        cursor:no-drop;
    }
</style>
