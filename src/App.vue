<template>
  <div id="app">
    <el-container>
      <el-header height="100px">
        <el-col :span="2">
          <a @click="$router.go(-1)">
            <arrow-left class="header-icon" />
          </a>
        </el-col>
        <el-col :span="20">
          <router-link to="/" class="no-decoration">
            <h1 class="text-center header-title">
              vue-github
            </h1>
          </router-link>
        </el-col>
        <el-col :span="2">
          <a href="https://github.com/moeen" target="_blank">
            <github-circle class="header-icon"/>
          </a>
        </el-col>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer style="text-align: center; color: #37474F;" height="40px">
        <a class="no-decoration" href="https://github.com/moeen/vue-github" target="_blank">vue-github</a> | <a class="no-decoration" href="https://github.com/moeen" target="_blank">Moein</a>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import GithubCircle from 'vue-material-design-icons/GithubCircle.vue'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
export default {
  components: {
    GithubCircle,
    ArrowLeft
  }
}
</script>

<style>
body {
  background-color: #ECEFF1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.text-center {
  text-align: center !important;
}
.header-title {
  margin-top: 10px;
  font-size: 3rem;
  color: #46bd87;
}
.header-icon {
  margin-top: 8px;
  font-size: 3rem;
  color: #546E7A;
}
.no-decoration {
  text-decoration: none !important;
  color: inherit !important;
}
</style>
