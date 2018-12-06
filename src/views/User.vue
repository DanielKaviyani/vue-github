<template>
  <div>
    <template v-if="userDetail && userRepos">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <el-card class="box-card">
            <el-col :span="8">
              <img :src="userDetail.avatar_url" alt="" style="width:100%; height:auto; border-radius: 50%;">
            </el-col>
            <el-col :span="16" style="text-align:center;">
              <h4 style="margin-left:15px;">
                {{userDetail.name}}
              </h4>
              <p style="margin-left:15px; font-size: 0.9rem;">
                {{userDetail.bio}}
              </p>
              <el-row>
                <el-col :span="8" style="text-align:center;">
                  <p>
                    {{userDetail.public_repos}}
                  </p>
                  <p style="font-size: 0.8rem;">Repositories</p>
                </el-col>
                <el-col :span="8" style="text-align:center;">
                  <router-link class="no-decoration" :to="'/user/' + username + '/followers'">
                    <p>
                      {{userDetail.followers}}
                    </p>
                  </router-link>
                  <p style="font-size: 0.8rem;">Followers</p>
                </el-col>
                <el-col :span="8" style="text-align:center;">
                  <router-link class="no-decoration" :to="'/user/' + username + '/following'">
                    <p>
                      {{userDetail.following}}
                    </p>
                  </router-link>
                  <p style="font-size: 0.8rem;">Following</p>
                </el-col>
              </el-row>
            </el-col>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
          <el-card class="box-card">
            <el-row :gutter="20">
              <el-col :span="12" v-for="repo in userRepos" :key="repo.id" style="margin: 10px 0 10px 0;">
                <router-link class="no-decoration" :to="'/user/' + username + '/' + repo.name">
                  <el-card class="box-card transform-card">
                    <h4 style="margin:0;">
                      {{repo.name}}
                    </h4>
                    <p>
                      {{repo.description}}
                    </p>
                    <el-row>
                      <el-button type="primary" plain style="padding: 6px 8px 8px 8px;">
                        <star-outline />
                        {{repo.stargazers_count}}
                      </el-button>
                      <el-button type="primary" plain style="padding: 6px 8px 8px 8px;">
                        <source-fork />
                        {{repo.forks_count}}
                      </el-button>
                      <el-button type="warning" plain style="padding: 6px 8px 8px 8px; float: right;">
                        {{repo.language}}
                      </el-button>
                    </el-row>
                  </el-card>
                </router-link>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
import StarOutline from 'vue-material-design-icons/StarOutline.vue'
import SourceFork from 'vue-material-design-icons/SourceFork.vue'
export default {
  name: 'user',
  components: {
    StarOutline,
    SourceFork
  },
  data: () => {
    return {
      username: ''
    }
  },
  beforeMount () {
    this.username = this.$route.params.username
    this.$store.dispatch('userRepos', this.username)
    this.$store.dispatch('userDetail', this.username)
  },
  computed: {
    userRepos () {
      return this.$store.state.UserModule.userRepos
    },
    userDetail () {
      return this.$store.state.UserModule.userDetail
    }
  }
}
</script>
