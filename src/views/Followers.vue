<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col class="follow-card" v-for="follower in userFollowers" :key="follower.id" :xs="12" :sm="8" :md="4" :lg="4" :xl="4">
          <router-link :to="'/user/' + follower.login" class="no-decoration">
            <el-card class="username-card" :body-style="{ padding: '0px' }">
              <img :src="follower.avatar_url" class="image">
              <div style="padding: 14px; text-align: center;">
                <span>{{follower.login}}</span>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'followers',
  data: () => {
    return {
    }
  },
  beforeCreate () {
    let username = this.$route.params.username
    this.$store.dispatch('userFollowers', username)
  },
  computed: {
    userFollowers () {
      return this.$store.state.UserModule.userFollowers
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
  .follow-card {
    margin: 10px 0 10px 0;
  }
</style>
