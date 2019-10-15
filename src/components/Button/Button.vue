<template>
    <div class="poney">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'PButton'
}
</script>

<style scoped>

.poney {
    background-color: deepskyblue;
    border-radius: 4px;
    padding: 20px;
    margin: 10px;
    color:aliceblue;
    font-weight: 800;
}

</style>