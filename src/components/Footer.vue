<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div id="message">
        <h3>Wanna keep in touch with me ? Drop me a message at <a v-bind:href="'mailto:' + mail">marc.inthaamnouay@gmail.com</a></h3>      
      </div>
      <div id="logo-wrapper">
        <div id="github">
          <a
            :href="gitLink"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'github-alt']" />
          </a>
        </div>
        <div id="idCard">
          <a
            :href="cvLink"
            target="_blank"
          >
            <font-awesome-icon icon="id-card" />
          </a>
        </div>
      </div> 
    </div>
    <p id="copyright">Copyright Marc Intha-amnouay - 2018</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: () => {
    return {
      mail: 'marc.inthaamnouay@gmail.com',
      cvLink: 'https://drive.google.com/file/d/1Miu8by2Bx4TlvVY7jfBWHF1wAtrDZewN/view?usp=sharing',
      gitLink: 'https://github.com/MarcInthaamnouay'
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

    #github, #idCard {
      font-size: 3em;
    }
  }

  #copyright {
    text-align: center;
    margin-bottom: 0px;
  }
}
</style>