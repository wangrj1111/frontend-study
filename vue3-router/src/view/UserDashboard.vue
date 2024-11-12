<template>
    <nav>
        <router-link to="/user/profile">profile</router-link>
        <router-link to="/user/setting">setting</router-link>
      </nav>
      <router-view />
</template>


<style scoped>
nav {

  margin-top: 20px;
}
a {
  margin-left: 10px;
  text-decoration: none;
  color: greenyellow;
  padding: 5px  10px;
}

.router-link-active {
  background-color: green;
  color: white;
  font-weight: bold;
}

</style>

