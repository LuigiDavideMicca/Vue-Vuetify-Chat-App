<template>
  <div>
    <p>Profile</p>
    <p>Benvenuto {{this.$store.getters.user.username}}</p>
  </div>
</template>

<script>
  import * as firebase from 'firebase'

  export default {
    data () {
      return {
        chatName: '',
        loading: false
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
    },
    methods: {
      createChat () {
        if (this.chatName == '' || this.loading) {
          return
        }

        this.loading = true

        let time = new Date().valueOf()
        let newPostKey = firebase.database().ref().child('chats').push().key

        let updates = {}
        updates['/chats/' + newPostKey] = {name: this.chatName}
        updates['/chat_members/' + newPostKey + '/users/' + this.user.id] = {timestamp: time}
        updates['users/' + this.user.id + '/chats/' + newPostKey] = {timestamp: time}
        firebase.database().ref().update(updates).then(() => {
          this.loading = false
          this.$router.push('/chat/' + newPostKey)
        })
      }
    }
  }
</script>
