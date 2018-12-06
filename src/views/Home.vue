<template>
  <div class="home">
    <el-row :gutter="10">
      <el-col :span="22">
        <el-input placeholder="username ..." v-model="username" @keyup.enter.native="searchUsername"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" icon="el-icon-search" @click="searchUsername">Search</el-button>
      </el-col>
    </el-row>
    <template v-if="searchResult">
      <el-alert v-if="searchResult.items.length == 0" title="Username incorrect" type="error" :description="'We couldn’t find any username matches ' + username" show-icon> </el-alert>
      <el-row :gutter="20" style="margin-top: 50px;">
        <el-col v-for="user in searchResult.items" :key="user.id" :xs="12" :sm="8" :md="4" :lg="4" :xl="4">
          <router-link :to="'/user/' + user.login" class="no-decoration">
            <el-card class="username-card" :body-style="{ padding: '0px' }">
              <img :src="user.avatar_url" class="image">
              <div style="padding: 14px; text-align: center;">
                <span>{{user.login}}</span>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => {
    return {
      username: ''
    }
  },
  methods: {
    searchUsername () {
      this.$store.dispatch('userSearch', this.username)
    }
  },
  computed: {
    searchResult () {
      return this.$store.state.UserModule.searchResult
    }
  }
}
</script>

<style scoped>
  .image {
    width: 100%;
    height: auto;
    display: block;
  }
  .username-card:hover {
    transform: scale(1.1);
  }
</style>
