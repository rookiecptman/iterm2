<template>
  <div id="app">
    <el-alert
    type="warning"
    center
    show-icon
    title="警告"
    v-show="showAlert">
    {{alertMsg}}
    </el-alert>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  name: 'app',
  computed:mapState({
    alertMsg: state => {
        return state.alertMsg 
    },
    ...mapGetters([
          'showAlert'
      ])
  })
}
</script>

<style>

</style>
