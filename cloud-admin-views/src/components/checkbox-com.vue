<template>
    <label class="checkbox-com">
        <input type="checkbox" class="checkbox-com-input" v-model="currentValue" value="998">
        <span class="box-wrap"></span>
    </label>
</template>

<script>
export default {
    name:"checkbox-com",
    props:{
        value:{
            type:[String,Number,Boolean]
        }
    },
    data (){
        return{
            currentValue:this.value
        }
    },
    watch : {
        currentValue (newValue) {
            this.$emit('input',newValue)
            this.$emit('change',newValue)
        },
        value (){
            this.currentValue = this.value
        }
    }
}
</script>

<style scoped>
.checkbox-com{
    width: 50px;
    height: 50px;
    display: inline-block;
    border: 1px solid #a1a1a1;
    border-radius: 4px;
    cursor: pointer;

}
.box-wrap{
    transform: scale(0);
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;

}
.checkbox-com-input:checked + .box-wrap{
    transition: transform .05s ease;
    transform: scale(1);
    background: #4091ff;
  
}
.checkbox-com-input:checked + .box-wrap::after {
    content: "";
    position: absolute;
    left: 55%;
    top: 12%;
    display: block;
    width: 30px;
    height: 14px;
    border-left: 4px solid #fff;
    border-bottom: 4px solid  #fff;
    transform: rotate(-45deg) translate(-50%,-50%)

}

.checkbox-com-input{
    display: none;
}

</style>
