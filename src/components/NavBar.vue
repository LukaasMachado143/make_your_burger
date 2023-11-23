<template>
    <div id="navBar">
        <RouterLink to="/" id="logo-img">
            <img :src="logo" :alt="descriptionImage" id="logo">
        </RouterLink>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/requests">Pedidos</RouterLink>
        <RouterLink to="/ingredients">Ingrendientes</RouterLink>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: ["logo", "descriptionImage"]
}
</script>

<style scoped>
#navBar {
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#navBar #logo-img {
    margin: auto;
    margin-left: 0;
}

#logo {
    width: 40px;
    height: 40px;
}

#navBar a {
    color: #FCBA03;
    text-decoration: none;
    margin: 12px;
    transition: 0.5s;
}

#navBar a:hover {
    color: #FFF;
}
</style>