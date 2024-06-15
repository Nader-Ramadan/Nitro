const headerElement = document.querySelector("header");
const headerContent = `
    <div class="info-wraper1">
        <div class="logo"></div>
        <nav>
          <div id="home">Home</div>
          <div id="about-us">About us</div>
          <div id="articles">Articles</div>
          <div id="shopping">Shopping</div>
          <div id="contact-us">Contact us</div>
        </nav>
      </div>
      <div class="info-wraper2">
        <h2>Title Example</h2>
        <h4>Sub Title Example</h4>
      </div>
      <div class="slider">
        <div id="bg1"></div>
        <div id="bg2"></div>
        <div id="bg3"></div>
        <div id="bg4"></div>
      </div>
      <div class="info-wraper3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non
          eius esse blanditiis repellat amet. At eaque corporis beatae
          recusandae ipsum odit in consequatur? Delectus eligendi veniam
          recusandae fugiat nisi!
        </p>
      </div>
`
headerElement.innerHTML = headerContent;


const footerElement = document.querySelector("footer");
const footerContent = `
    <div class="info-wraper1">
        <h4>Footer</h4>
        <div class="info-wraper2">
          <h4>Nav Links</h4>
          <ul>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
            <li>link 4</li>
            <li>link 5</li>
          </ul>
        </div>
        <div class="socail-links"></div>
      </div>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="E-mail" />
        <textarea name="" id="" placeholder="Message"></textarea>
      </form>
      <div class="info-wraper3">
        <div class="logo"></div>
        <div class="number">+20 0000000000</div>
        <div class="email">Eaxample@email.com</div>
      </div>
`
footerElement.innerHTML = footerContent;
