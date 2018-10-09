<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div id="message">
        <h3>Wanna keep in touch with me ? You can contact me at <a v-bind:href="'mailto:' + mail">marc.inthaamnouay@gmail.com</a></h3>      
      </div>
      <div id="github">
        <a href="https://github.com/MarcInthaamnouay">
          <font-awesome-icon :icon="['fab', 'github-alt']" />
        </a>
      </div>  
    </div>
    <p id="copyright">Copyright Marc Intha-amnouay - 2018</p>
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

  p, h3 {
    color: white;
  }

  a {
    color: white;
    transition: all 0.25s ease;
  }

  a:hover {
    color: rgba(17, 158, 239, 0.6);
  }

  #message {
    flex-grow: 1;

    h3 {
      width: 40%;
    }
  }

  h2, h3, p {
    font-weight: 500;
  }

  h3 {
    font-size: 1.45em;
  }

  .footer-wrapper {
    display: flex;

    #github {
      font-size: 4em;
    }
  }

  #copyright {
    text-align: center;
    margin-bottom: 0px;
  }
}
</style>