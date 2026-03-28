<template>
    <div class="order">
        <form>
            <label for="">{{ formData.name.label }}</label>
            <input type="text" 
            placeholder="Digite seu nome" 
            v-model="formData.name.value" 
            @blur="formData.name.isValid()">
            <p class="error-message" v-if="!formData.name.valid">{{ formData.name.errorMessage}}</p>
        </form>
        <button class="primary-button" @click="orderItens">Concluir Pedido</button>
    </div>

</template>

<script>
export default {
    data(){
        return{
            formData: {
                name: {
                    value: '',
                    errorMessage: 'O nome é obrigatório',
                    label: 'Nome*',
                    valid: true,
                    isValid: () => {
                        this.formData.name.valid = this.formData.name.valid.length;
                    }
                }
            }
        }
    },
    methods:{
        triggerValidations() {
            this.formData.name.isValid();
        },
        orderItens(){
            this.triggerValidations();
        }
    }  
};
</script>

<style lang="less" scoped>
.order {
    width: 720px;
    margin:30px auto;
    background: white;
    border-radius: 8px;
    padding: 30px 50px;

    form{
        display: flex;
        flex-direction: column;

        label{
            font-weight: 500;
            font-size: 16px;
            margin-top: 5px;
        }
        .error-message{
            font-size: 12px;
            color: red;

        }
    }
}
</style>