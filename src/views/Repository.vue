<template>
  <div>
    <template v-if="repoDetail && repoContributors">
      <el-card class="box-card">
        <el-row>
          <h2 style="margin: 0; display: inline;">
            {{repoDetail.name}}
            <a target="_blank" class="no-decoration" :href="repoDetail.html_url">
              <web />
            </a>
          </h2>
          <el-button type="warning" plain style="padding: 6px 8px 8px 8px; float: right; display: inline;">
            {{repoDetail.language}}
          </el-button>
        </el-row>
        <p style="font-size: 0.9rem; margin: 2px 0 5px 0;">
          {{repoDetail.description}}
          <a target="_blank" :href="repoDetail.homepage">{{repoDetail.homepage}}</a>
        </p>
        <p style="margin: 12px 0 0 0; font-size: 0.9rem;">
          Clone over HTTPS:
        </p>
        <p style="background-color: #263238; color: #ECEFF1; padding: 10px; border-radius: 5px; display: inline-block; margin: 5px 0;">
          {{repoDetail.clone_url}}
        </p>
        <br>
        <p style="margin: 8px 0 0 0; font-size: 0.9rem;">
          Clone over SSH:
        </p>
        <p style="background-color: #263238; color: #ECEFF1; padding: 10px; border-radius: 5px; display: inline-block; margin: 5px 0;">
          {{repoDetail.ssh_url}}
        </p>
        <div v-if="repoReadme" style="border-style: solid; border-radius: 3px; border-width: 2px; padding: 0 20px; margin-top: 30px; border-color: #CFD8DC;" v-html="toMarkdown(repoReadme)"></div>
      </el-card>
      <el-card class="box-card" style="margin-top: 30px;">
        <h4 style="margin: 0 0 10px 0;">
          Contributors
        </h4>
        <el-row :gutter="20">
          <el-col style="margin: 10px 0 10px 0;" v-for="contributor in repoContributors" :key="contributor.id" :xs="6" :sm="4" :md="3" :lg="3" :xl="3">
            <router-link :to="'/user/' + contributor.login" class="no-decoration">
              <el-card class="transform-card" :body-style="{ padding: '0px' }">
                <img :src="contributor.avatar_url" class="image">
                <div style="padding: 14px; text-align: center;">
                  <span style="font-size: 0.75  rem;">{{contributor.login}}</span>
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </el-card>
    </template>
  </div>
</template>

<script>
import Web from 'vue-material-design-icons/Web.vue'
const marked = require('marked')
export default {
  name: 'repository',
  components: {
    Web
  },
  data: () => {
    return {
      info: {
        username: '',
        repo: ''
      }
    }
  },
  beforeMount () {
    this.info.username = this.$route.params.username
    this.info.repo = this.$route.params.repo
    this.$store.dispatch('repoDetail', this.info)
    this.$store.dispatch('repoReadme', this.info)
    this.$store.dispatch('repoContributors', this.info)
  },
  computed: {
    repoDetail () {
      return this.$store.state.RepoModule.repoDetail
    },
    repoReadme () {
      return this.$store.state.RepoModule.repoReadme
    },
    repoContributors () {
      return this.$store.state.RepoModule.repoContributors
    }
  },
  methods: {
    toMarkdown (markdown) {
      return marked(markdown)
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
</style>
