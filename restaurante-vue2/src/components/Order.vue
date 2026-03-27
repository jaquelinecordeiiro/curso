<template>
    <div class="order">
        <form>
            <label for="">Nome</label>
            <input type="text" placeholder="Digite seu nome">
            <p>O nome é obrigatório</p>
        </form>
        <button class="primary-buttom" @click="orderItens">Concluir Pedido</button>
    </div>

</template>

<script>
export default {
    methods(){

    }
  
}
</script>

<style lang="less" scoped>
.order {
    width: 720px;
    margin:30px auto;
    background: white;
    border-radius: 10px;
    padding: 30px 50px;
}
</style>