(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      #module-content {
        margin: 0 20px;
      }

      p {
        font-family: cursive;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        line-height: 20px;
        font-size: 14px;
        line-height: 20px;
      }

      h1 {
        font-size: 50px;
      }

      h2 {
        font-size: 16px;
        color: green;
      }
    </style>

    <div id='module-content'>
      <h1>Lorem Ipsum</h1>

      <h2>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>

      <h2>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>

      <hr />

      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue aliquam enim et bibendum. Quisque justo est, sollicitudin non dolor ut, aliquet mollis ligula. Integer arcu augue, dapibus a tincidunt at, tempus eu risus. Donec tristique eleifend sem, id tincidunt mauris maximus quis. Pellentesque elit odio, dictum eu turpis ac, volutpat volutpat neque. Duis efficitur dui vitae sapien hendrerit, in pellentesque enim porttitor. Maecenas eget iaculis odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris volutpat non tellus vitae elementum. Aenean dolor sapien, elementum vitae vehicula vitae, scelerisque vel dolor. Proin a placerat justo. Suspendisse egestas, enim ut volutpat vestibulum, velit nibh aliquam tortor, id porta nunc ligula ut diam. Donec mollis est ornare dapibus hendrerit. Integer commodo sem id lacus pulvinar tristique. Phasellus efficitur dolor pharetra elit fermentum, sed scelerisque libero lobortis. Quisque vestibulum metus est, sit amet condimentum nunc iaculis id.
        </p>
        <p>
          Morbi facilisis ante sit amet elit venenatis, ut dignissim risus suscipit. Quisque et elit ultrices, consequat nibh ut, consectetur orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque at pellentesque urna, in sodales lacus. Mauris vitae velit eu neque feugiat sollicitudin. Cras nec risus in mauris suscipit convallis ac et diam. Proin ac nulla eu enim luctus suscipit. Duis a sapien eget orci interdum ultrices nec ut dolor. Vivamus fermentum mi at ligula pulvinar egestas. Nullam eleifend enim sed risus facilisis, non vehicula magna varius. Fusce pulvinar ac justo quis efficitur. Fusce nec massa tortor. Nunc id tortor eget ipsum mattis elementum.
        </p>
        <p>
          Nulla commodo orci eu ante finibus, nec dapibus urna posuere. Maecenas enim augue, imperdiet nec bibendum at, rutrum ut ligula. Quisque lobortis dolor a orci tincidunt malesuada. Sed convallis nec sem ut luctus. In hac habitasse platea dictumst. Nullam sollicitudin, libero viverra fringilla accumsan, enim arcu aliquam purus, id varius ligula erat vulputate felis. Pellentesque non faucibus mauris. Aliquam nec risus urna. Cras venenatis facilisis est at eleifend. Morbi sit amet lacinia eros, et elementum arcu. Ut lacus sem, rutrum porttitor venenatis vel, eleifend eget nisl. Donec posuere est ut mi blandit, ac ullamcorper ex hendrerit.
        </p>
        <p>
          Phasellus scelerisque risus tellus, dignissim viverra mi congue ultrices. Nam scelerisque metus neque. Proin elementum eget leo in accumsan. Vestibulum volutpat tempor magna eu euismod. Proin vitae efficitur enim, at viverra sapien. Suspendisse potenti. Vivamus euismod rutrum euismod. Pellentesque mollis tempor ligula, et eleifend eros. Nullam efficitur elementum libero, a iaculis odio aliquet in. In eget lectus ornare, ultrices orci vel, congue leo. Aenean eget viverra purus, sed volutpat erat. Curabitur facilisis malesuada finibus.
        </p>
        <p>
          Nunc sed dolor nec nulla gravida vestibulum suscipit vitae nibh. Aenean congue finibus turpis, vitae congue felis fermentum ut. Cras ac odio imperdiet, cursus odio in, accumsan turpis. Pellentesque placerat ornare commodo. Duis ut leo imperdiet, fermentum felis eu, tristique orci. Suspendisse potenti. Sed a efficitur nunc, quis tempus tortor. Ut imperdiet sit amet arcu vel ultricies. Nunc mollis risus id dui ullamcorper, vitae mollis massa varius. Praesent condimentum lectus et fringilla commodo. Morbi eu ex eu diam ullamcorper pretium a eget nisl. Aliquam ullamcorper sed arcu eget ullamcorper. Quisque efficitur dignissim dolor.
        </p>
      </div>
    </div>
  `;

  class LoremIpsumModule extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    static get observedAttributes() {
      return ['width', 'text-align', 'force-fail'];
    }
    
    // Lifecycle
    // When the component is connected
    connectedCallback() {
      console.log('LoremIpsum module element added to page.');
    }

    // When any of observed attributes has changed
    attributeChangedCallback(name, oldValue, newValue) {
      console.log('LoremIpsum module has seen a change.');
      if (name == 'force-fail') {
        if(newValue) {
          const fail = null;
          fail.test();
        }
      }
      if (name == 'width'){
        this.shadowRoot.querySelector('#module-content').style.width = `${newValue}%`;
      }
      if (name == 'text-align'){
        this.shadowRoot.querySelector('#module-content').style.textAlign = newValue;
      }
    }
      
    // When the component is removed
    disconnectedCallback() {
      console.log('LoremIpsum module element removed from page.');
    }
  }

  window.customElements.define('lorem-ipsum-module', LoremIpsumModule);
})();