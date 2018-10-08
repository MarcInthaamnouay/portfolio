<template>
  <div class="footer">
    <div id="message">
      <h3>Wanna keep in touch with me ? You can contact me at <a v-bind:href="'mailto:' + mail">marc.inthaamnouay@gmail.com</a></h3>      
    </div>
    <p>Copyright Marc Intha-amnouay - 2018</p>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data: () => {
    return {
      mail: 'marc.inthaamnouay@gmail.com'
    }
  }
}
</script>

<style lang="scss">
.footer {
  background-color: rgba(17, 158, 239, 0.3);
  padding: 20px;
  height: 200px;

  #message {
    width: 40%;

    a {
      color: white;
      transition: all 0.25s ease;
    }

    a:hover {
      color: rgba(17, 158, 239, 0.6);
    }
  }

  h2, h3, p {
    font-weight: 500;
  }

  h3 {
    font-size: 1.45em;
  }
}
</style>