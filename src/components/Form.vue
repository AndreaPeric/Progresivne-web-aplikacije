<template>
  <form>
    <InputText type="text" v-model="value" placeholder="Username" />
    <Button label="Submit" icon="pi pi-check" iconPos="right"/>
  </form>  
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  Button {
    margin-left:10px;
  }
</style>
